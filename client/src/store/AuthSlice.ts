import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import type { User } from "@/types/types";

const API_URL = "http://localhost:5000/api/auth"; // عدليها حسب السيرفر

// ✅ Axios Setup to auto-attach token
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("bywaytoken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
  otpStep: boolean; // to show OTP screen after signup
  userIdForOtp: number | null; // store user_id to use in verifyOtp / resendOtp
  emailForOtp: string | null;
}

const initialState: AuthState = {
  user: null,
  token: localStorage.getItem("bywaytoken") || null,
  loading: false,
  error: null,
  otpStep: false,
  userIdForOtp: null,
  emailForOtp: null,
};

// ✅ Signup -> returns userId + email + otp (testing only)
export const signup = createAsyncThunk(
  "auth/signup",
  async (
    data: {
      first_name: string;
      last_name: string;
      username: string;
      email: string;
      password: string;
      role?: string;
    },
    thunkAPI
  ) => {
    try {
      const res = await axios.post(`${API_URL}/signup`, data);
      return res.data; // { message, otp, userId, email }
    } catch (err: any) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.error || "Signup failed"
      );
    }
  }
);

// ✅ Verify OTP -> returns token + user
export const verifyOtp = createAsyncThunk(
  "auth/verifyOtp",
  async (data: { user_id: number; otp: string }, thunkAPI) => {
    try {
      const res = await axios.post(`${API_URL}/verify-otp`, data);
      return res.data; // { token, user }
    } catch (err: any) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.error || "OTP verification failed"
      );
    }
  }
);

// ✅ Resend OTP
export const resendOtp = createAsyncThunk(
  "auth/resendOtp",
  async (data: { user_id: number }, thunkAPI) => {
    try {
      const res = await axios.post(`${API_URL}/resend-otp`, data);
      return res.data; // { message, otp }
    } catch (err: any) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.error || "Failed to resend OTP"
      );
    }
  }
);

// ✅ Login
export const login = createAsyncThunk(
  "auth/login",
  async (data: { email: string; password: string }, thunkAPI) => {
    try {
      const res = await axios.post(`${API_URL}/login`, data);
      return res.data; // { token, user }
    } catch (err: any) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.error || "Login failed"
      );
    }
  }
);

// ✅ GetMe
export const getMe = createAsyncThunk("auth/getMe", async (_, thunkAPI) => {
  try {
    const res = await axios.get(`${API_URL}/me`);
    return res.data.user;
  } catch (err: any) {
    return thunkAPI.rejectWithValue("Failed to fetch user");
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("bywaytoken");
    },
  },
  extraReducers: (builder) => {
    // ✅ Signup
    builder.addCase(signup.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(signup.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.otpStep = true;
      state.userIdForOtp = action.payload.userId;
      state.emailForOtp = action.payload.email;
    });
    builder.addCase(signup.rejected, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    });

    // ✅ Verify OTP
    builder.addCase(
      verifyOtp.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.otpStep = false;
        localStorage.setItem("bywaytoken", action.payload.token);
      }
    );
    builder.addCase(verifyOtp.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(verifyOtp.rejected, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    });

    // ✅ Resend OTP
    builder.addCase(resendOtp.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(resendOtp.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(resendOtp.rejected, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    });

    // ✅ Login
    builder.addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.token = action.payload.token;
      state.user = action.payload.user;
      localStorage.setItem("bywaytoken", action.payload.token);
    });
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.rejected, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    });

    // ✅ GetMe
    builder.addCase(getMe.fulfilled, (state, action: PayloadAction<any>) => {
      state.user = action.payload;
      state.loading = false;
    });
    builder.addCase(getMe.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getMe.rejected, (state) => {
      state.loading = false;
      state.token = null;
      localStorage.removeItem("bywaytoken");
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
/////////////////////////////////////////////
// interface User {
//   id: string;
//   email: string;
//   name?: string;
//   role?: string;
//   [key: string]: any;
// }
// // type User = Record<string, any>;

// interface AuthState {
//   user: User | null;
//   token: string | null;
//   loading: boolean;
//   error: string | null;
//   otpSent: boolean;
//   isAuthenticated: boolean;
// }

// const initialState: AuthState = {
//   user: null,
//   token: localStorage.getItem("bywaytoken") || null,
//   loading: false,
//   error: null,
//   otpSent: false,
//   isAuthenticated: !!localStorage.getItem("bywaytoken"),
// };

// // ✅ Signup
// export const signup = createAsyncThunk(
//   "auth/signup",
//   async (
//     data: { email: string; password: string; name?: string },
//     { rejectWithValue }
//   ) => {
//     try {
//       const res = await axiosInstance.post("/auth/signup", data);
//       return res.data; // هيرجع { message: "OTP Sent" }
//     } catch (err: any) {
//       return rejectWithValue(err.response?.data?.message || "Signup failed");
//     }
//   }
// );

// // ✅ Verify OTP → هيستلم Token
// export const verifyOtp = createAsyncThunk(
//   "auth/verifyOtp",
//   async (data: { email: string; otp: string }, { rejectWithValue }) => {
//     try {
//       const res = await axiosInstance.post("/auth/verify-otp", data);
//       return res.data; // هيرجع { token, user }
//     } catch (err: any) {
//       return rejectWithValue(
//         err.response?.data?.message || "OTP verification failed"
//       );
//     }
//   }
// );

// // ✅ Resend OTP
// export const resendOtp = createAsyncThunk(
//   "auth/resendOtp",
//   async (data: { email: string }, { rejectWithValue }) => {
//     try {
//       const res = await axiosInstance.post("/auth/resend-otp", data);
//       return res.data;
//     } catch (err: any) {
//       return rejectWithValue(
//         err.response?.data?.message || "OTP resend failed"
//       );
//     }
//   }
// );

// // ✅ Get Me (Using Token)
// export const getMe = createAsyncThunk(
//   "auth/getMe",
//   async (_, { rejectWithValue }) => {
//     try {
//       const res = await axiosInstance.get("/auth/me");
//       return res.data.user;
//     } catch (err: any) {
//       return rejectWithValue("Unauthorized");
//     }
//   }
// );

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     logout: (state) => {
//       state.user = null;
//       state.token = null;
//       state.isAuthenticated = false;
//       localStorage.removeItem("token");
//     },
//   },
//   extraReducers: (builder) => {
//     // ✅ Signup
//     builder.addCase(signup.pending, (state) => {
//       state.loading = true;
//       state.error = null;
//     });
//     builder.addCase(signup.fulfilled, (state) => {
//       state.loading = false;
//       state.otpSent = true;
//     });
//     builder.addCase(signup.rejected, (state, action: PayloadAction<any>) => {
//       state.loading = false;
//       state.error = action.payload;
//     });

//     // ✅ Verify OTP
//     builder.addCase(verifyOtp.pending, (state) => {
//       state.loading = true;
//       state.error = null;
//     });
//     builder.addCase(
//       verifyOtp.fulfilled,
//       (state, action: PayloadAction<any>) => {
//         state.loading = false;
//         state.token = action.payload.token;
//         state.user = action.payload.user;
//         state.isAuthenticated = true;
//         localStorage.setItem("token", action.payload.token);
//       }
//     );
//     builder.addCase(verifyOtp.rejected, (state, action: PayloadAction<any>) => {
//       state.loading = false;
//       state.error = action.payload;
//     });

//     // ✅ Resend OTP
//     builder.addCase(resendOtp.pending, (state) => {
//       state.loading = true;
//       state.error = null;
//     });
//     builder.addCase(resendOtp.fulfilled, (state) => {
//       state.loading = false;
//       state.otpSent = true;
//     });
//     builder.addCase(resendOtp.rejected, (state, action: PayloadAction<any>) => {
//       state.loading = false;
//       state.error = action.payload;
//     });

//     // ✅ Get Me
//     builder.addCase(getMe.pending, (state) => {
//       state.loading = true;
//       state.error = null;
//     });
//     builder.addCase(getMe.fulfilled, (state, action: PayloadAction<User>) => {
//       state.loading = false;
//       state.user = action.payload;
//       state.isAuthenticated = true;
//     });
//     builder.addCase(getMe.rejected, (state, action: PayloadAction<any>) => {
//       state.loading = false;
//       state.error = action.payload;
//       state.isAuthenticated = false;
//       localStorage.removeItem("token");
//     });
//   },
// });

// export const { logout } = authSlice.actions;
// export default authSlice.reducer;

// // import { authSlice } from "@reduxjs/toolkit";
// import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

// type AuthState = {
//   isAuthenticated: boolean;
//   currentPage: "login" | "signup" | null;
// };

// const initialState: AuthState = {
//   isAuthenticated: false,
//   currentPage: null,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     loginSuccess: (state) => {
//       state.isAuthenticated = true;
//       state.currentPage = null;
//     },
//     logout: (state) => {
//       state.isAuthenticated = false;
//       state.currentPage = null;
//     },
//     setCurrentPage: (
//       state,
//       action: PayloadAction<"login" | "signup" | null>
//     ) => {
//       state.currentPage = action.payload;
//     },
//   },
// });

// export const { loginSuccess, logout, setCurrentPage } = authSlice.actions;
// export default authSlice.reducer;
