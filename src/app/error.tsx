"use client";

import { IErrorMessageProps } from "@/types/task";

export default function ErrorMessage({
  message = "Something went wrong",
  retry,
}: IErrorMessageProps) {
  return (
    <>
      <div className="h-svh flex items-center justify-center">
        <div className="w-full flex flex-col justify-center items-center gap-3 mb-4">
          <div className="flex gap-3">
            <svg
              className="w-6 h-6 text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-lg font-semibold text-red-900">Error</h3>
          </div>
          <p className="text-red-700 mb-4">{message}</p>

          {retry && (
            <button
              onClick={retry}
              className="w-1/5 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition cursor-pointer"
            >
              Try again
            </button>
          )}
        </div>
      </div>
    </>
  );
}
