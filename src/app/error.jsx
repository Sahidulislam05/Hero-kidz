"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { MdErrorOutline } from "react-icons/md";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { FiRefreshCw } from "react-icons/fi";

const Error = ({ error, reset }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-error/5 via-white to-warning/5 flex items-center justify-center px-4">
      <div className="text-center space-y-8 max-w-2xl">
        {/* Error Icon with Animation */}
        <div className="flex justify-center">
          <div className="relative">
            {/* Animated Background Glow */}
            <div className="absolute inset-0 bg-error/30 blur-3xl rounded-full w-48 h-48 mx-auto animate-pulse"></div>

            {/* Error Icon */}
            <div className="relative z-10">
              <MdErrorOutline
                className="text-9xl text-error mx-auto animate-bounce"
                style={{ animationDuration: "2s" }}
              />
            </div>
          </div>
        </div>

        {/* Error Title and Description */}
        <div className="space-y-4">
          <h1 className="text-6xl font-black bg-gradient-to-r from-error to-warning bg-clip-text text-transparent">
            Oops!
          </h1>
          <h2 className="text-3xl font-bold text-gray-900">
            Something went wrong
          </h2>
        </div>

        {/* Error Information */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 space-y-2">
          <p className="text-blue-900 font-semibold text-sm">
            💡 What can you do?
          </p>
          <ul className="text-blue-800 text-sm space-y-1 text-left">
            <li>✓ Try refreshing the page</li>
            <li>✓ Check your internet connection</li>
            <li>✓ Clear your browser cache</li>
            <li>✓ Contact our support team if the problem persists</li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          {/* Try Again Button */}
          <button
            onClick={() => reset()}
            className="btn btn-primary btn-lg gap-2 group"
          >
            <FiRefreshCw className="text-xl group-hover:rotate-180 transition-transform duration-500" />
            Try Again
          </button>

          {/* Back to Home Button */}
          <Link href="/" className="btn btn-outline btn-lg gap-2">
            <HiOutlineArrowLeft className="text-xl" />
            Back to Home
          </Link>
        </div>

        {/* Status Indicators */}
        <div className="grid grid-cols-3 gap-4 py-6 border-t border-gray-200">
          <div className="space-y-2">
            <div className="text-3xl">⚠️</div>
            <p className="text-xs text-gray-600">Error Detected</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl">🔧</div>
            <p className="text-xs text-gray-600">We're Working On It</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl">📞</div>
            <p className="text-xs text-gray-600">Contact Support</p>
          </div>
        </div>

        {/* Support Message */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-4">
          <p className="text-gray-700 text-sm">
            <span className="font-bold">Need help?</span> Our support team is
            available 24/7 to assist you.
          </p>
          <Link
            href="/"
            className="text-primary font-semibold text-sm hover:underline inline-block mt-2"
          >
            Contact us →
          </Link>
        </div>

        {/* Fun Message */}
        <p className="text-xs text-gray-500 italic">
          "Even the best heroes sometimes stumble. We'll help you back up!" 🦸‍♂️
        </p>
      </div>
    </div>
  );
};

export default Error;
