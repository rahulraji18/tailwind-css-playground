const Grid = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Grid Layout</h2>
      <p className="mb-8 text-slate-600">
        Grid is perfect for 2D layouts. Use <code>grid-cols-{'{n}'}</code> to define 
        column counts and <code>gap-{'{n}'}</code> to manage the space between items.
      </p>

      {/* Grid Container */}
      <div className="grid grid-cols-3 gap-4 p-4 bg-slate-100 rounded-lg border-2 border-dashed border-slate-300">
        <div className="bg-blue-500 text-white p-4 rounded text-center">1</div>
        <div className="bg-blue-500 text-white p-4 rounded text-center">2</div>
        <div className="bg-blue-500 text-white p-4 rounded text-center">3</div>
        {/* Item spanning two columns */}
        <div className="bg-indigo-600 text-white p-4 rounded text-center col-span-2">
          col-span-2
        </div>
        <div className="bg-blue-500 text-white p-4 rounded text-center">5</div>
      </div>

      <div className="mt-8 p-4 bg-slate-800 text-white rounded font-mono text-sm">
        <p>Key utilities used:</p>
        <code className="text-emerald-400">grid grid-cols-3 gap-4</code>
      </div>
    </div>
  );
};

export default Grid;