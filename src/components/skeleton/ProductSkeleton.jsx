import React from "react";

const ProductSkeleton = ({ count = 1 }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, idx) => (
        <div
          key={idx}
          className="card bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100 animate-pulse"
        >
          {/* Image Skeleton */}
          <figure className="relative h-48 w-full bg-gray-200 flex items-center justify-center">
            <div className="w-full h-full bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200"></div>
          </figure>

          {/* Card Body Skeleton */}
          <div className="card-body p-5">
            {/* Title Skeleton */}
            <div className="space-y-2 mb-3">
              <div className="h-6 bg-gray-200 rounded-lg w-full"></div>
              <div className="h-4 bg-gray-200 rounded-lg w-4/5"></div>
            </div>

            {/* Rating Skeleton */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-4 h-4 bg-gray-200 rounded-sm"></div>
                ))}
              </div>
              <div className="h-4 bg-gray-200 rounded w-24"></div>
            </div>

            {/* Sales Count Skeleton */}
            <div className="h-3 bg-gray-200 rounded w-20 mb-3"></div>

            {/* Price Skeleton */}
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 bg-gray-200 rounded w-24"></div>
              <div className="h-6 bg-gray-200 rounded w-20"></div>
            </div>

            {/* Button Skeleton */}
            <div className="h-10 bg-gray-200 rounded-lg w-full"></div>
          </div>
        </div>
      ))}
    </>
  );
};

export const ProductDetailsSkeleton = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8 animate-pulse">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button Skeleton */}
        <div className="h-8 bg-gray-200 rounded w-24 mb-6"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Image Section Skeleton */}
          <div className="h-96 bg-gray-200 rounded-2xl"></div>

          {/* Product Info Section */}
          <div className="space-y-6">
            {/* Title Skeleton */}
            <div className="space-y-2">
              <div className="h-10 bg-gray-200 rounded w-full"></div>
              <div className="h-6 bg-gray-200 rounded w-3/4"></div>
            </div>

            {/* Rating Section Skeleton */}
            <div className="flex items-center gap-4 pb-4 border-b border-gray-200">
              <div className="h-6 bg-gray-200 rounded w-32"></div>
              <div className="h-6 bg-gray-200 rounded w-32"></div>
              <div className="h-6 bg-gray-200 rounded w-24"></div>
            </div>

            {/* Price Section Skeleton */}
            <div className="space-y-2">
              <div className="h-12 bg-gray-200 rounded w-48"></div>
              <div className="h-4 bg-gray-200 rounded w-40"></div>
            </div>

            {/* Buttons Skeleton */}
            <div className="flex gap-4 pt-4">
              <div className="h-12 bg-gray-200 rounded-lg flex-1"></div>
              <div className="h-12 bg-gray-200 rounded-lg flex-1"></div>
            </div>

            {/* Features Skeleton */}
            <div className="space-y-3">
              <div className="h-6 bg-gray-200 rounded w-32"></div>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-4 bg-gray-200 rounded w-full"></div>
              ))}
            </div>
          </div>
        </div>

        {/* Description Section Skeleton */}
        <div className="bg-white shadow-lg rounded-xl p-6 mb-8">
          <div className="h-8 bg-gray-200 rounded w-40 mb-4"></div>
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-4 bg-gray-200 rounded w-full"></div>
            ))}
          </div>
        </div>

        {/* Q&A Section Skeleton */}
        <div className="space-y-4 mb-8">
          <div className="h-8 bg-gray-200 rounded w-64 mb-4"></div>
          {[1, 2].map((i) => (
            <div key={i} className="h-16 bg-gray-200 rounded-lg"></div>
          ))}
        </div>

        {/* Info Cards Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-24 bg-gray-200 rounded-xl"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
