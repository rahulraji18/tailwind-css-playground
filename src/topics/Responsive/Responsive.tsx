const Responsive = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Responsive Design</h2>
      
      <p className="mb-8 text-slate-600">
        Tailwind is mobile-first. Apply styles for mobile, then use <code>md:</code> or <code>lg:</code> 
        prefixes to change them for larger screens.
      </p>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-8 bg-blue-500 text-white rounded-lg text-center font-bold">
          Mobile (1 Col)
        </div>
        <div className="p-8 bg-indigo-500 text-white rounded-lg text-center font-bold">
          Tablet (2 Col)
        </div>
        <div className="p-8 bg-purple-500 text-white rounded-lg text-center font-bold">
          Desktop (3 Col)
        </div>
      </div>

      <div className="mt-12 p-6 bg-slate-800 text-emerald-400 rounded-lg font-mono text-sm">
        <p>{`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`}</p>
      </div>
    </div>
  );
};

export default Responsive;