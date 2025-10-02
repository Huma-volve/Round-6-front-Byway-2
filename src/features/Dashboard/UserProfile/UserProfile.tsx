import { useSelector } from "react-redux";
import type { RootState } from "@/store/Store";

const UserProfile = () => {
  const users = useSelector((state: RootState) => state.managment.users);

  if (!users || users.length === 0) {
    return (
      <section className="p-6 text-center text-gray-400">
        No user data available.
      </section>
    );
  }

  const user = users[0];

  return (
    <section className="space-y-8">
      {/* Title */}
      <div>
        <h1 className="text-[#587DBD] text-3xl font-bold">User Profile</h1>
        <p className="text-gray-400">
          View detailed information about this user.
        </p>
      </div>

      {/* Profile Info */}
      <div className="bg-white shadow-2xl rounded-xl p-6 w-full space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Full Name */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h2 className="font-semibold text-gray-800">Full Name</h2>
            <p className="text-gray-600">{user.name}</p>
          </div>

          {/* Email */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h2 className="font-semibold text-gray-800">Email</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>

          {/* Role */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h2 className="font-semibold text-gray-800">Role</h2>
            <p className="text-gray-600">{user.role}</p>
          </div>

          {/* Status */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h2 className="font-semibold text-gray-800">Status</h2>
            <p
              className={
                user.status === "Active"
                  ? "text-green-600 font-medium"
                  : "text-red-600 font-medium"
              }
            >
              {user.status}
            </p>
          </div>

          {/* Nationality */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h2 className="font-semibold text-gray-800">Nationality</h2>
            <p className="text-gray-600">Egyptian</p>
          </div>

          {/* Registration Date */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h2 className="font-semibold text-gray-800">Registration Date</h2>
            <p className="text-gray-600">2022-01-01</p>
          </div>
          {/* Registration Date */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h2 className="font-semibold text-gray-800">Total Courses</h2>
            <p className="text-gray-600">5</p>
          </div>
          {/* Registration Date */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h2 className="font-semibold text-gray-800">Average Rating</h2>
            <p className="text-gray-600">⭐ 4.8 / 5</p>
          </div>
          {/* Registration Date */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h2 className="font-semibold text-gray-800">Total Earnings</h2>
            <p className="text-gray-600">$1,250</p>
          </div>
          {/* Registration Date */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h2 className="font-semibold text-gray-800">Bio / About Instructor</h2>
            <p className="text-gray-600">Passionate UI/UX mentor</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
