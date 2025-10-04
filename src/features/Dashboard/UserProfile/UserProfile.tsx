import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import type { RootState } from "@/store/Store";

const UserProfile = () => {
  const { id } = useParams<{ id: string }>();
  const users = useSelector((state: RootState) => state.managment.users);
  const user = users.find((u) => u.id === Number(id));

  if (!user) {
    return (
      <section className="p-6 text-center text-gray-400">
        User not found.
      </section>
    );
  }

  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-[#587DBD] text-3xl font-bold">User Profile</h1>
        <p className="text-gray-400">
          View detailed information about {user.name}.
        </p>
      </div>

      <div className="bg-white shadow-2xl rounded-xl p-6 w-full space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Info label="Full Name" value={user.name} />
          <Info label="Email" value={user.email} />
          <Info label="Role" value={user.role} />
          <Info
            label="Status"
            value={user.status}
            valueClass={
              user.status === "Active" ? "text-green-600" : "text-red-600"
            }
          />
          <Info label="Nationality" value="Egyptian" />
          <Info label="Registration Date" value={user.regDate} />
          <Info label="Total Courses" value="5" />
          <Info label="Average Rating" value="⭐ 4.8 / 5" />
          <Info label="Total Earnings" value="$1,250" />
          <Info label="Bio / About Instructor" value="Passionate UI/UX mentor" />
        </div>
      </div>
    </section>
  );
};

const Info = ({
  label,
  value,
  valueClass = "text-gray-600",
}: {
  label: string;
  value: string;
  valueClass?: string;
}) => (
  <div className="border border-gray-200 rounded-lg p-4">
    <h2 className="font-semibold text-gray-800">{label}</h2>
    <p className={valueClass}>{value}</p>
  </div>
);

export default UserProfile;
