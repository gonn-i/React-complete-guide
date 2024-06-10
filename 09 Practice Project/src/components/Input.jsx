import { forwardRef } from 'react';

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  const inputClassName =
    'w-full p-1 border-b-2 rounded-sm border-grey-300 bg-grey-200 text-grey-600 focus:outline-none focus:border-grey-600';
  return (
    <p className="mb-10 flex flex-col">
      <label className="block mb-3 text-sm font-medium text-gray-900">{label}</label>
      {textarea ? (
        <textarea ref={ref} className={inputClassName} {...props} type="text" />
      ) : (
        <input ref={ref} className={inputClassName} {...props} />
      )}
    </p>
  );
});

export default Input;
