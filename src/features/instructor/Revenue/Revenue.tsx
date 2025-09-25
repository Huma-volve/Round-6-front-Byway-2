import { Button } from "@/components/ui/button"
import Charts from "./Charts"
import Transactions from "./Transactions"
import Input from "@/components/shared/Input"
import { IoFilter } from "react-icons/io5";
import { NavLink } from "react-router";


const Revenue = () => {
  return<>
  <div className="container mt-10">
    <h2 className="text-2xl font-bold">Revenue Analytics</h2>
    <div className="info flex justify-between w-[70%]">
      <div className="flex flex-col mt-3">
        <h3>Revenue</h3>
        <p className="text-[#94A3B8]">Get top insights about your performance</p>
      </div>
      <NavLink to={"/instructors/PayoutDetails"}>
      <Button className="bg-blue-700 mt-5 hover:bg-blue-800 text-white opacity-80">Get Paid</Button>
      </NavLink>
    </div>
    <div className="flex justify-between items-center w-[70%] mt-7 mb-14 ">
      <div className="p-4 border border-[#E2E8F0] flex flex-col items-center justify-center rounded-lg shadow-md shadow-[#E2E8F0] w-[25%]">
      <p className="text-2xl font-bold">+ $24,340</p>
        <p className="text-[#334155]">Total Profit</p>
      </div>
      <div className="p-4 border border-[#E2E8F0] flex flex-col items-center justify-center rounded-lg shadow-md shadow-[#E2E8F0] w-[25%]">
      <p className="text-2xl font-bold">+ $44,340</p>
      <p className="text-[#334155]">available balance</p>
      </div>
      <div className="p-4 border border-[#E2E8F0] flex flex-col items-center justify-center rounded-lg shadow-md shadow-[#E2E8F0] w-[25%]">
      <p className="text-2xl font-bold">+ $98.76</p>
      <p className="text-[#334155]">Last Transaction</p>
      </div>
    </div>
    <section>
      <p className="mb-9">All</p>
      <Charts/>
    </section>
    <section>
      <div className="flex flex-col gap-7">
      <h2 className="font-bold text-2xl mt-3">Transactions</h2>
      <div className="flex justify-between">
      <Input />
      <div className="flex gap-2 items-center">
      <p>Filter</p>
      <IoFilter />
      </div>
      </div>
      <Transactions />
      </div>
    </section>
  </div>
  </>
}

export default Revenue