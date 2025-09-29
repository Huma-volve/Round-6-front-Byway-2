import { Input } from "@/components/ui/input";
import { CiSearch } from "react-icons/ci";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DropDown from "./DropDown";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/Store";
import { useInput } from "@/hooks/userManagment/InputStatus";
import { useMemo } from "react";

function UserManagement() {
  const users = useSelector((state: RootState) => state.managment.users);
  const name = useInput("");

  const filteredUsers = useMemo(() => {
    if (!name.value.trim()) return users;
    return users.filter((user) =>
      user.name.toLowerCase().includes(name.value.toLowerCase())
    );
  }, [name.value, users]);

  return (
    <section>
      <h1 className="text-[#587DBD] text-[32px] font-bold">User Management</h1>
      <p>Manage all registered users including learners and instructors.</p>

      {/* Search */}
      <div className="flex items-center justify-between relative mt-8 mb-8">
        <Input
          value={name.value}
          onChange={name.onChange}
          placeholder="Search by name..."
          className="pr-12"
        />
        <CiSearch className="absolute right-5 text-gray-500" size={24} />
      </div>

      {/* -------- Table (Desktop / Tablet) -------- */}
      <div className="overflow-x-auto shadow-2xl hidden md:block">
        <Table className="w-full rounded-lg border border-gray-700 shadow-lg">
          <TableHeader>
            <TableRow className="bg-white/20 text-white">
              <TableHead className="border px-4 py-2 text-center">Name</TableHead>
              <TableHead className="border px-4 py-2 text-center w-[15%]">Email</TableHead>
              <TableHead className="border px-4 py-2 text-center">Role</TableHead>
              <TableHead className="border px-4 py-2 text-center">Status</TableHead>
              <TableHead className="border px-4 py-2 text-center">Reg. Date</TableHead>
              <TableHead className="border px-4 py-2 text-center w-[15%]">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="border px-4 py-2 text-center font-medium">
                    {user.name}
                  </TableCell>
                  <TableCell className="border px-4 py-2 text-center text-blue-500">
                    {user.email}
                  </TableCell>
                  <TableCell className="border px-4 py-2 text-center">
                    {user.role}
                  </TableCell>
                  <TableCell
                    className={`border px-4 py-2 text-center font-semibold ${
                      user.status === "Active" ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {user.status}
                  </TableCell>
                  <TableCell className="border px-4 py-2 text-center">
                    {user.regDate}
                  </TableCell>
                  <TableCell className="border px-4 py-2 text-center">
                    <div className="bg-[#88aff4] hover:bg-[#6d8dc4] text-white px-3 py-1 rounded-lg shadow-md">
                      <DropDown userId={user.id} />
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="text-center text-gray-400 py-6">
                  No users found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* -------- Cards (Mobile) -------- */}
      <div className="md:hidden space-y-4">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div
              key={user.id}
              className="bg-white rounded-lg shadow-md p-4 border border-gray-200 space-y-2"
            >
              <p>
                <span className="font-semibold text-gray-800">Name:</span>{" "}
                {user.name}
              </p>
              <p>
                <span className="font-semibold text-gray-800">Email:</span>{" "}
                <span className="text-blue-500">{user.email}</span>
              </p>
              <p>
                <span className="font-semibold text-gray-800">Role:</span>{" "}
                {user.role}
              </p>
              <p>
                <span className="font-semibold text-gray-800">Status:</span>{" "}
                <span
                  className={
                    user.status === "Active"
                      ? "text-green-600 font-medium"
                      : "text-red-600 font-medium"
                  }
                >
                  {user.status}
                </span>
              </p>
              <p>
                <span className="font-semibold text-gray-800">Reg. Date:</span>{" "}
                {user.regDate}
              </p>
              <div className="pt-2">
                <div className="bg-[#88aff4] hover:bg-[#6d8dc4] text-white px-3 py-1 rounded-lg shadow-md inline-block">
                  <DropDown userId={user.id} />
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400">No users found</p>
        )}
      </div>
    </section>
  );
}

export default UserManagement;
