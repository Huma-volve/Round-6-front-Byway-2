const CourseCardSkeleton = () => {
  return (
    <div className="rounded-2xl p-4 border-[1px] border-gray-border w-[280px]">
      <div className="rounded-[8px] h-[139px] w-full mb-4 bg-gray-200 animate-pulse"></div>
      <div className="flex flex-col gap-2">
        <div className="h-7 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-5 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-7 w-30 bg-gray-200 rounded animate-pulse"></div>
      </div>
    </div>
  );
};

export default CourseCardSkeleton;
