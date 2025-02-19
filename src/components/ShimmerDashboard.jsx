const ShimmerDashboard = () => (
  <div className="animate-pulse space-y-6">
    <div className="h-8 bg-gray-200 rounded w-1/3"></div>
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
      <div className="space-y-4">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="h-16 bg-gray-200 rounded-lg"></div>
        ))}
      </div>
    </div>
  </div>
);

export default ShimmerDashboard;
