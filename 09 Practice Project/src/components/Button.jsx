export default function Button({ children, ...props }) {
  return (
    <button
      className="text-gray-900 border border-gray-200 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-12 py-3 me-5 mb-5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      {...props}
    >
      {children}
    </button>
  );
}
