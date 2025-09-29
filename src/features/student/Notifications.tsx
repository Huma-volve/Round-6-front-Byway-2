import Bell from "@/components/shared/Bell";

export default function Notifications() {
  const data = [];

  return (
    <div className="container mx-auto mt-20">
      <div>
        {data.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-8 ">
            <Bell />
            <h2 className="font-bold text-3xl mr-7">You are all up to date</h2>
            <p className="text-[#707070] text-2xl mr-7">
              No new notifications - come back soon
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <div
              className={`group flex justify-between border-1 border-[rgba(114,114,114,0.18)] p-4 w-3/4 h-30 rounded-xl hover:bg-[#72727212] transition `}
            >
              <h3 className="group-hover:text-[#5BAE61] transition">
                Your payment of 400 EGP for 'Prototyping with Figma' was
                successful.
              </h3>
              <p className="text-[#727272]">Just now</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
