import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Welcome to Task Manager
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          A modern, efficient task management application built with Next.js,
          React, and TypeScript. Manage your tasks with ease using our intuitive
          interface.
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

      <div className="grid md:grid-cols-3 gap-8 mt-16">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold mb-3 text-gray-900">
            Easy to Use
          </h3>
          <p className="text-gray-600">
            Intuitive interface for managing your daily tasks efficiently
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold mb-3 text-gray-900">
            Real-time Updates
          </h3>
          <p className="text-gray-600">
            See your changes instantly with optimistic updates
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold mb-3 text-gray-900">
            Filter & Search
          </h3>
          <p className="text-gray-600">
            Organize tasks by status and find what you need quickly
          </p>
        </div>
      </div>
    </div>
  );
}
