const ShimmerCourseList = () => (
  <div className="animate-pulse space-y-4">
    {[...Array(10)].map((_, index) => (
      <div
        key={index}
        className="flex items-center p-4 bg-gray-100 rounded-lg shadow-sm"
      >
        <div className="w-16 h-16 bg-gray-200 rounded-md mr-4"></div>
        <div className="flex-1">
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-3 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    ))}
  </div>
);

export default ShimmerCourseList;
