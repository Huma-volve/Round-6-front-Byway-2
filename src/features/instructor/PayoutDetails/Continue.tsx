import DropdownBankName from "./BankName"

const Continue = () => {
  return (
    <section className="mt-10 flex flex-col gap-6 p-6 rounded-lg shadow-md bg-white border border-gray-200">
      <label htmlFor="AccountNumber" className="flex flex-col gap-2">
        <span className="text-lg font-medium">Account Number</span>
        <input
          type="text"
          id="AccountNumber"
          className="w-full max-w-md p-3 border-gray-300 border rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
          placeholder="123571625375"
        />
      </label>

      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold">Bank Name</h2>
        <DropdownBankName />
      </div>

    </section>
  )
}

export default Continue
