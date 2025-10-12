const ReviewCardSkeleton = () => {
  return (
    <div className="rounded-2xl p-4 lg:p-6 border border-gray-border w-full min-w-[300px]">
      <div className="flex gap-4 items-center">
        <div className="h-16 w-16 flex-shrink-0 rounded-full mb-4 bg-gray-200 animate-pulse"></div>
        <div className="h-7 w-full bg-gray-200 animate-pulse rounded"></div>
      </div>
      <div className="h-6 w-full bg-gray-200 animate-pulse rounded"></div>
    </div>
  );
};

export default ReviewCardSkeleton;
