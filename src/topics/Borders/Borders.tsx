const Borders = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Borders</h2>
      
      {/* Border Widths */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-4">Border Widths</h3>
        <div className="flex gap-4 items-center">
          <div className="border border-slate-400 p-4">border</div>
          <div className="border-2 border-slate-400 p-4">border-2</div>
          <div className="border-4 border-slate-400 p-4">border-4</div>
          <div className="border-8 border-slate-400 p-4">border-8</div>
        </div>
      </div>

      {/* Border Radius */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-4">Border Radius</h3>
        <div className="flex gap-4 items-center">
          <div className="border border-slate-400 p-4 rounded-sm">rounded-sm</div>
          <div className="border border-slate-400 p-4 rounded-md">rounded-md</div>
          <div className="border border-slate-400 p-4 rounded-lg">rounded-lg</div>
          <div className="border border-slate-400 p-4 rounded-full">rounded-full</div>
        </div>
      </div>
    </div>
  );
};

export default Borders;