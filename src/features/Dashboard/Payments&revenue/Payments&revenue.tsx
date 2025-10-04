import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEdit } from "react-icons/ai";

function PaymentsRevenue() {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const stats = [
    { value: "$24,340", label: "Platform Earnings" },
    { value: "$18,560", label: "Instructor Earnings" },
    { value: "6", label: "Total Withdrawal" },
    { value: "$5,780", label: "Student Payments" },
  ];

  const [data, setData] = useState([
    {
      date: "28 Jul 2025",
      user: "Nour Ali",
      type: "Withdrawal",
      amount: "$150.00",
      status: "Pending",
      method: "Bank",
      action: "View",
    },
    {
      date: "29 Jul 2025",
      user: "Salma Ahmed",
      type: "Payment",
      amount: "$95.00",
      status: "Completed",
      method: "Visa",
      action: "View",
    },
  ]);

  const handleAction = (action: string, index: number) => {
    setData((prev) =>
      prev.map((row, i) =>
        i === index
          ? { ...row, action: action === "Approve" ? "Approved" : "Rejected" }
          : row
      )
    );
    setOpenDropdown(null);
  };

  return (
    <div className="my-3 pr-10">
      <h1 className="text-3xl text-[#587DBD] mb-3 font-semibold">
        Payments & Revenue
      </h1>
      <p>
        Track all platform earnings, instructor payouts, and student payments.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6 mr-10">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-md p-6 text-center shadow"
          >
            <div className="text-2xl font-bold py-3">{stat.value}</div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-white p-5 rounded-lg my-10">
        <table className="w-full text-left border-collapse rounded-lg">
          <thead>
            <tr className="bg-white">
              <th className="p-3">Date</th>
              <th className="p-3">User Name</th>
              <th className="p-3">Type</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Status</th>
              <th className="p-3">Method</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="bg-white border-t">
                <td className="p-3">{row.date}</td>
                <td className="p-3">{row.user}</td>
                <td className="p-3">{row.type}</td>
                <td className="p-3">{row.amount}</td>
                <td className="p-3">
                  {row.status === "Pending" ? (
                    <span className="text-orange-500">{row.status}</span>
                  ) : (
                    <span className="text-green-600">{row.status}</span>
                  )}
                </td>
                <td className="p-3">{row.method}</td>

                <td className="p-3 relative">
                  {row.action === "View" ? (
                    <>
                      <button
                        onClick={() =>
                          setOpenDropdown(openDropdown === index ? null : index)
                        }
                        className="bg-[#587DBD70] hover:bg-gray-300 text-black px-3 rounded-lg flex items-center gap-1"
                      >
                        View
                        <AiOutlineEye />
                      </button>

                      {openDropdown === index && (
                        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded border z-10">
                          <ul>
                            <li>
                              <Link
                                to={`/payments/`}
                                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200"
                              >
                                View Details
                              </Link>
                            </li>
                            <li>
                              <button
                                onClick={() => handleAction("Approve", index)}
                                className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-200 text-green-600"
                              >
                                Approve Withdrawal
                              </button>
                            </li>
                            <li>
                              <button
                                onClick={() => handleAction("Reject", index)}
                                className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-200 text-red-600"
                              >
                                Reject Request
                              </button>
                            </li>
                          </ul>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="flex items-center gap-2 relative">
                      <span
                        className={
                          row.action === "Approved"
                            ? "text-green-600"
                            : "text-red-600"
                        }
                      >
                        {row.action}
                      </span>

                      <button
                        onClick={() =>
                          setOpenDropdown(openDropdown === index ? null : index)
                        }
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <AiOutlineEdit />
                      </button>

                      {openDropdown === index && (
                        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded border z-10">
                          <ul>
                            <li>
                              <Link
                                to={`/payments/`}
                                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200"
                              >
                                View Details
                              </Link>
                            </li>
                            <li>
                              <button
                                onClick={() => handleAction("Approve", index)}
                                className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-200 text-green-600"
                              >
                                Approve Withdrawal
                              </button>
                            </li>
                            <li>
                              <button
                                onClick={() => handleAction("Reject", index)}
                                className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-200 text-red-600"
                              >
                                Reject Request
                              </button>
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PaymentsRevenue;
