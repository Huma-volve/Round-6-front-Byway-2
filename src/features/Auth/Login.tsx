import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import loginstimg from "@/assets/images/login_st.png";
import facebookIcon from "@/assets/icons/facebook.svg";
import googleIcon from "@/assets/icons/google.svg";
import microsoftIcon from "@/assets/icons/microsoft.svg";
import { Link } from "react-router-dom";

export default function Login() {
  const Values = {
    email: "",
    password: "",
  };

  const socialButtons = [
    { src: facebookIcon, label: "Facebook", href: "#" },
    { src: googleIcon, label: "Google", href: "#" },
    { src: microsoftIcon, label: "Microsoft", href: "#" },
  ];

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("email is not correct")
      .required("email required"),
    password: Yup.string()
      .min(6, "The password must be at least 6 characters long")
      .required("Password required"),
  });

  const onSubmit = (values: { email: string; password: string }) => {
    console.log("Form data:", values);
    alert(`Hello ${values.email}`);
  };

  return (
    <div className="flex items-center justify-start ">
      <div className="w-170 pl-15 space-y-7 ">
        <h1 className="text-2xl font-semibold">Sign in to your account</h1>
        <Formik
          initialValues={Values}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="space-y-4">
            <div>
              <label className="block mb-2">Email</label>
              <Field
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full border rounded-lg px-3 py-2 mb-2 outline-none focus:ring-1 ring-gray-400 "
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm "
              />
            </div>

            <div>
              <label className="block mb-2">Password</label>
              <Field
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full border rounded-lg px-3 py-2 mb-2 outline-none focus:ring-1 ring-gray-400"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm"
              />
              <div className="text-right mt-1">
                <Link
                  to="/forgot-password"
                  className="text-sm text-gray-400 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            <button
              type="submit"
              className="w-24 bg-[#5BAE61] text-white py-3 rounded-lg hover:bg-green-700 transition"
            >
              Sign In
            </button>

            <div className="flex items-center p2-3">
              <hr className="flex-grow border-gray-300" />
              <span className="px-3 text-gray-400 text-sm">Sign in with</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            <div className="flex space-x-10">
              {socialButtons.map((btn, index) => (
                <a
                  key={index}
                  href={btn.href}
                  className="flex items-center border rounded-lg px-4 py-2 hover:bg-gray-50"
                >
                  <img src={btn.src} alt={btn.label} className="w-5 h-5 mr-2" />
                  <span>{btn.label}</span>
                </a>
              ))}
            </div>
          </Form>
        </Formik>
      </div>

      <img src={loginstimg} alt="Login" className="w-170" />
    </div>
  );
}
