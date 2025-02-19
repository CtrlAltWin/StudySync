const ShimmerCourseDetails = () => (
  <div className="w-full max-w-4xl mx-auto p-2 shadow-lg rounded-lg animate-pulse scale-95">
    <div className="w-full h-96 bg-gray-200 rounded-md mb-6"></div>
    <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
    <div className="h-5 bg-gray-200 rounded w-1/2 mb-4"></div>

    <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
    <div className="space-y-3">
      {[...Array(4)].map((_, index) => (
        <div key={index} className="h-4 bg-gray-200 rounded w-full"></div>
      ))}
    </div>

    <div className="h-10 bg-gray-300 rounded w-full mt-6"></div>
  </div>
);

export default ShimmerCourseDetails;
