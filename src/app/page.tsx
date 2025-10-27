import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Task Manager App
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          A task management application built with Next.js, React, and
          TypeScript.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/tasks"
            className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition text-lg font-medium"
          >
            View Tasks
          </Link>
          <Link
            href="/create"
            className="bg-white text-blue-600 border-2 border-blue-600 py-3 px-8 rounded-lg hover:bg-blue-50 transition text-lg font-medium"
          >
            Create Task
          </Link>
        </div>
      </div>
    </div>
  );
}
