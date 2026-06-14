const Position = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Positioning</h2>
      
      {/* Relative & Absolute */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Relative & Absolute</h3>
        <p className="text-slate-600 mb-4">
          An absolute element is positioned relative to its closest relative-positioned parent.
        </p>
        <div className="relative w-64 h-64 bg-slate-200 border-2 border-slate-400 p-4">
          <p className="text-sm">Parent (relative)</p>
          <div className="absolute bottom-0 right-0 bg-blue-500 text-white p-2">
            Absolute
          </div>
        </div>
      </div>

      {/* Sticky */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Sticky</h3>
        <p className="text-slate-600 mb-4">
          A sticky element toggles between relative and fixed depending on scroll position.
        </p>
        <div className="h-32 overflow-y-scroll border border-slate-300 p-4 bg-slate-50">
          <div className="sticky top-0 bg-emerald-500 text-white p-2 mb-2">
            I am sticky!
          </div>
          <div className="h-64 bg-slate-100">
            Scroll down to see the sticky behavior.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Position;