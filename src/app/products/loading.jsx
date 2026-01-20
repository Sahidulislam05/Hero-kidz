import ProductSkeleton from "@/components/skeleton/ProductSkeleton";
import React from "react";

const LoadingProducts = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Skeleton */}
        <div className="mb-12">
          <div className="h-10 bg-gray-200 rounded-lg w-1/3 mb-4 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
        </div>

        {/* Products Grid with Skeleton Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <ProductSkeleton count={8} />
        </div>
      </div>
    </div>
  );
};

export default LoadingProducts;
