export default function Notfications() {
  const data = [1];

  return (
    <div className="container mx-auto mt-20">
      <div>
        {data.length === 0 ? (
          <div className="flex flex-col items-center justify-center">
            <h2 className="font-bold text-3xl">You are all up to date</h2>
            <p className="text-[#707070] text-2xl">
              No new notifications - come back soon
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <button
              className={`flex justify-between border-1 border-[rgba(114,114,114,0.18)] p-4 w-3/4 h-30 rounded-xl `}
            >
              <h3>
                Your payment of 400 EGP for 'Prototyping with Figma' was
                successful.
              </h3>
              <p className="text-[#727272]">Just now</p>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
