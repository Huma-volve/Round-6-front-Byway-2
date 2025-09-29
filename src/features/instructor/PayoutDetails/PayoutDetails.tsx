import { Button } from "@/components/ui/button"
import Dropdown3 from "./DropDown"
import { NavLink } from "react-router"
const PayoutDetails = () => {
  return<>
<section className="mt-10 flex flex-col gap-5">
  <h1 className="text-4xl font-semibold">Enter Payout Details</h1>
  <div className="flex flex-col gap-5 items-baseline">
    <h2 className="text-2xl">Payment Method</h2>
    <Dropdown3 />
  </div>
  <label htmlFor="AccountName" className="flex flex-col gap-2">
        Account Name
        <input type="text" id="AccountName" className="w-[20%] p-2 border-gray-400 border rounded-md" value="Omnia Ali" />
  </label>
  <label htmlFor="AccountEmail" className="flex flex-col gap-2">
        Account Email
        <input type="text" id="AccountEmail" className="w-[20%] p-2 border-gray-400 border rounded-md" value="omnia@gmail.com" />
  </label>
  <label htmlFor="Save" className="flex gap-5 items-center">
  <input
    type="checkbox"
    id="Save"
    value="omnia@gmail.com"
    className="h-4 w-4 appearance-none rounded-full border border-gray-400 
      checked:border-amber-500 checked:bg-white relative
      before:content-[''] before:absolute before:top-1/2 before:left-1/2 
      before:h-2 before:w-2 before:-translate-x-1/2 before:-translate-y-1/2 
      before:rounded-full before:bg-black before:opacity-0 
      checked:before:opacity-100 cursor-pointer"/>Save these details</label>
      <NavLink to={"/instructors/WithDraw"}>
        <Button className="w-[20%] bg-green-500 hover:bg-green-600 cursor-pointer font-semibold text-lg">Continue</Button>
      </NavLink>
  </section>
  </>
}

export default PayoutDetails