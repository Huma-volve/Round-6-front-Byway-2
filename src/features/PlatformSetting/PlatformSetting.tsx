

export default function PlatformSetting() {
  return (
    <>
    <div>
        <h2 className="text-[#587DBD] mb-3 mt-2 font-medium text-2xl">Platform Settings</h2>
        <p className="mb-5  text-sm">Configure platform-wide settings including commissions, categories, and withdrawal policies.</p>
        <div className="bg-white border-gray-300 p-4 mb-5 border rounded-lg">
            <h2 className="font-semibold mb-5 text-lg">Commission Settings</h2>
            <div className="flex mb-3 mt-3 gap-2 items-center">
                <div className="p-1 border border-gray-300 rounded-lg">
                    <p>15 %</p>
                </div>
                <p>← (Editable input)</p>
            </div>
            <p>Note: This percentage will be deducted from instructor revenue for each course sold.</p>
        </div>
        <div className="bg-white border-gray-300 p-4 mb-5 border rounded-lg">
            <h2 className="font-semibold text-lg mb-5 ">Withdrawal Policy</h2>
            <div className="flex mb-2 items-center gap-2">
                <div className="p-1 px-3 border-gray-300 border rounded-lg">
                    <p>$50.00</p>
                </div>
                <p>← (Editable input)</p>
            </div>
            <p>Note: Instructors can only request payouts when their available balance exceeds this amount.</p>
        </div>
        <div className="bg-white mb-5 border-gray-300  p-4 border rounded-lg mt-3">
            <h2 className="font-semibold mb-3 text-xl">Course Categories Management</h2>
            <p className="mb-2">Available Categories:</p>
            <p className="mb-2">[ Design ] [ Business ] [ Development ] [ Languages ]</p>
            <p className="mb-2">+  Add New Category ⊕</p>
            <div className="flex items-center mt-3 gap-5">
                <button className="border-gray-300 w-[65px] cursor-pointer border px-2 rounded-lg text-red">Delete</button>
                <button className="border-gray-300 w-[60px] cursor-pointer border px-2 rounded-lg text-blue">Edit</button>
            </div>
        </div>
        <button className="text-white cursor-pointer hover:bg-[#5d7bb0] py-1 px-3  rounded-lg bg-[#587DBD]">Save Changes</button>
    </div>
    
    </>
  )
}
