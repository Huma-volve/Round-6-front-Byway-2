import { Button } from "@/components/ui/button"
import Dropdown3 from "./DropDown"
import DropdownBankName from "./BankName"
import { NavLink } from "react-router"
const Continue = () => {
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
  <label htmlFor="AccountNumber" className="flex flex-col gap-2">
        Account Number
        <input type="text" id="AccountNumber" className="w-[20%] p-2 border-gray-400 border rounded-md" placeholder="123571625375" />
  </label>
  <div className="flex flex-col gap-5 items-baseline">
    <h2 className="text-2xl">Bank Name</h2>
    <DropdownBankName />
  </div>

  <label htmlFor="Save" className="flex gap-5 items-center mt-35">
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
      <Button className="w-[20%] mb-4 bg-green-500 hover:bg-green-600 cursor-pointer font-semibold text-lg">Continue</Button>
      </NavLink>
  </section>
  </>
}
export default Continue