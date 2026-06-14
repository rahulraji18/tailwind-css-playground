const TextColors = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Text Colors</h2>
      <p className="mb-4">
        Tailwind provides a comprehensive color palette. View the full documentation here: 
        <a 
          href="https://tailwindcss.com/docs/customizing-colors" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 underline ml-1"
        >
          Official Colors Documentation
        </a>
      </p>

      {/* Example of manually defined colors that will render correctly */}
      <div className="flex gap-2">
        <div className="w-10 h-10 bg-red-500 rounded"></div>
        <div className="w-10 h-10 bg-green-500 rounded"></div>
        <div className="w-10 h-10 bg-blue-500 rounded"></div>
        <div className="w-10 h-10 bg-yellow-500 rounded"></div>
      </div>
      <div className="space-y-4 mt-5">
        <div className="text-slate-500">text-slate-500</div>
        <div className="text-gray-600">text-gray-600</div>
        <div className="text-red-500">text-red-500</div>
        <div className="text-blue-600 font-bold">text-blue-600</div>
        <div className="text-green-700">text-green-700</div>
        <div className="text-purple-600">text-purple-600</div>
        <div className="text-orange-500">text-orange-500</div>
      </div>
    </div>
  );
};

export default TextColors;