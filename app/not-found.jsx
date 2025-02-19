import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div>
      <div class="flex flex-col bg-[#061E42] pt-32 -mb-20 h-screen justify-center items-center">
        <div class="flex flex-col items-center">
          <h1 class="text-[120px] font-extrabold text-gray-700">404</h1>
          <p class="text-2xl font-medium text-gray-600 mb-6">Page Not Found</p>
          <Link
            href="/"
            class="px-4 py-2 font-medium text-white bg-indigo-500 rounded-md hover:bg-indigo-600 transition-all duration-200 ease-in-out"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
