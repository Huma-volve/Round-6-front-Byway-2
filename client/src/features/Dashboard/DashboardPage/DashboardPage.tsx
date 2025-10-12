import OverlappingAreaChart from "@/features/instructor/Revenue/Charts";
import { ChevronDown, ChevronsUpDown } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    customer: "Jon Doe",
    date: "12/04/2024",
    type: "Credit",
    amount: "$95.00",
  },
  {
    customer: "Jon Doe",
    date: "12/04/2024",
    type: "Credit",
    amount: "$95.00",
  },
  {
    customer: "Jon Doe",
    date: "12/04/2024",
    type: "Credit",
    amount: "$95.00",
  },
  {
    customer: "Jon Doe",
    date: "12/04/2024",
    type: "Credit",
    amount: "$95.00",
  },
  {
    customer: "Jon Doe",
    date: "12/04/2024",
    type: "Credit",
    amount: "$95.00",
  },
];

function DashboardPage() {
  return (
    <>
      <div className="mt-7">
        {/* Welcome Text */}
        <div>
          <h1 className="text-3xl font-medium text-gray-900">
            Welcome back, Admin 👋
          </h1>
          <p className="text-xl text-gray-900 mt-3">
            Here’s a quick overview of your platform performance
          </p>
        </div>
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-7 ml-11">
          <div className="border flex flex-col gap-y-7 items-center justify-center py-3 bg-white rounded-lg">
            <h3 className="text-3xl font-medium text-black">4,200 </h3>
            <h4 className="text-xl font-normal text-black">Active Learners</h4>
          </div>
          <div className="border flex flex-col gap-y-7 items-center justify-center py-3 bg-white rounded-lg">
            <h3 className="text-3xl font-medium text-black">4,200 </h3>
            <h4 className="text-xl font-normal text-black">Active Learners</h4>
          </div>
          <div className="border flex flex-col gap-y-7 items-center justify-center py-3 bg-white rounded-lg">
            <h3 className="text-3xl font-medium text-black">4,200 </h3>
            <h4 className="text-xl font-normal text-black">Active Learners</h4>
          </div>
          <div className="border flex flex-col gap-y-7 items-center justify-center py-3 bg-white rounded-lg">
            <h3 className="text-3xl font-medium text-black">4,200 </h3>
            <h4 className="text-xl font-normal text-black">Active Learners</h4>
          </div>
        </div>
        {/* Chart */}
        <div className="mt-16">
          <div>
            <h4 className="font-semibold text-xl text-gray-900">
              Monthly Revenue Overview
            </h4>
            <p className="text-sm text-gray-400 font-normal flex items-center gap-1 pt-2">
              Select Period:{" "}
              <span className="flex items-center">
                All <ChevronDown className="w-4 h-4" />{" "}
              </span>
            </p>
          </div>
          <div className="mt-6">
            <OverlappingAreaChart />
          </div>
        </div>
        {/* Top Rated Courses */}
        <div className="mt-16">
          <h4 className="font-semibold text-xl text-[#587DBD]">
            Top Rated Courses
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-3 lg:grid-cols-5 gap-6 mt-3">
            <div className="bg-white py-3.5 px-3 rounded-lg w-fit">
              <div className="">
                <h4 className="text-xl font-semibold text-black">
                  UI/UX Design
                </h4>
                <p className="text-base font-normal text-black">
                  Instructor: Omnya Ali
                </p>
                <p className="text-base font-normal text-black">
                  ⭐ 4.9 (1,200 students)
                </p>
              </div>
            </div>
            <div className="bg-white py-3.5 px-3 rounded-lg w-fit">
              <h4 className="text-xl font-semibold text-black">JavaScript</h4>
              <p className="text-base font-normal text-black">
                Instructor: Ola Mostafa
              </p>
              <p className="text-base font-normal text-black">
                ⭐ 4.9 (1,300 students)
              </p>
            </div>
          </div>
        </div>
        {/* Recent Payout Requests */}
        <div className="my-16">
          <h4 className="font-semibold text-xl text-[#587DBD]">
            Recent Payout Requests
          </h4>
          <div className="mt-6">
            <Table className="bg-white">
              <TableHeader>
                <TableRow className="border-none">
                  <TableHead className="font-medium text-gray-600">
                    Customer <ChevronsUpDown className="inline w-4 h-4 ml-1" />
                  </TableHead>
                  <TableHead className="font-medium text-gray-600">
                    Date <ChevronsUpDown className="inline w-4 h-4 ml-1" />
                  </TableHead>
                  <TableHead className="font-medium text-gray-600">
                    Type <ChevronsUpDown className="inline w-4 h-4 ml-1" />
                  </TableHead>
                  <TableHead className="font-medium text-gray-600 text-center">
                    Amount <ChevronsUpDown className="inline w-4 h-4 ml-1" />
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoice, idx) => (
                  <TableRow key={idx} className="h-14">
                    <TableCell className="font-normal">
                      {invoice.customer}
                    </TableCell>
                    <TableCell>{invoice.date}</TableCell>
                    <TableCell className="text-green-600">
                      {invoice.type}
                    </TableCell>
                    <TableCell className="text-center">
                      {invoice.amount}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardPage;
