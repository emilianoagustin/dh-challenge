import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Task Not Found</h2>
      <p className="text-gray-600 mb-8">
        The task you're looking for doesn't exist.
      </p>
      <Link
        href="/tasks"
        className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition inline-block"
      >
        Back to Tasks
      </Link>
    </div>
  );
}
