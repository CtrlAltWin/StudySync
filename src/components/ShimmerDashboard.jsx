import ShimmerCourseList from "./ShimmerCourseList";

const ShimmerDashboard = () => (
  <div className="animate-pulse space-y-6">
    <div className="h-8 bg-gray-200 rounded w-2/5 m-auto"></div>
    <div className="h-8 bg-gray-200 rounded mt-4"></div>
    <ShimmerCourseList />
  </div>
);

export default ShimmerDashboard;
