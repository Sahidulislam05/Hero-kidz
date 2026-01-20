import React from "react";
import Link from "next/link";
import { MdErrorOutline } from "react-icons/md";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { HiExclamationTriangle } from "react-icons/hi2";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-white to-secondary/10 flex items-center justify-center px-4">
      <div className="text-center space-y-8 max-w-2xl">
        {/* Error Icon */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-error/20 blur-3xl rounded-full w-48 h-48 mx-auto"></div>
            <HiExclamationTriangle className="text-9xl text-error relative z-10" />
          </div>
        </div>

        {/* Error Code and Title */}
        <div className="space-y-3">
          <h1 className="text-7xl font-black bg-gradient-to-r from-error to-warning bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-4xl font-bold text-gray-900">
            Oops! Page Not Found
          </h2>
        </div>

        {/* Error Description */}
        <div className="space-y-2 text-gray-600">
          <p className="text-lg">
            Sorry, the page you are looking for does not exist or has been moved.
          </p>
          <p className="text-sm opacity-75">
            It might have been deleted or you may have mistyped the URL.
          </p>
        </div>

        {/* Error Status Icon */}
        <div className="flex justify-center gap-6 py-4">
          <div className="flex flex-col items-center gap-2">
            <MdErrorOutline className="text-3xl text-warning" />
            <span className="text-sm text-gray-600">Check URL</span>
          </div>
          <div className="divider divider-horizontal"></div>
          <div className="flex flex-col items-center gap-2">
            <HiExclamationTriangle className="text-3xl text-error" />
            <span className="text-sm text-gray-600">Page Missing</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Link href="/" className="btn btn-primary btn-lg gap-2">
            <HiOutlineArrowLeft className="text-xl" />
            Back to Home
          </Link>
          <Link href="/products" className="btn btn-outline btn-lg">
            Browse Products
          </Link>
        </div>

        {/* Decorative Message */}
        <div className="pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 italic">
            "404 - The only perfect thing about this page is the error code." 😅
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
