const Spacing = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Spacing (Padding & Margin)</h2>
      
      {/* Padding Demonstration */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-4">Padding (p-*)</h3>
        <p className="text-slate-600 mb-4">Padding adds space inside the border.</p>
        <div className="flex gap-4">
          <div className="bg-blue-500 text-white p-2">p-2</div>
          <div className="bg-blue-500 text-white p-4">p-4</div>
          <div className="bg-blue-500 text-white p-8">p-8</div>
        </div>
      </div>

      {/* Margin Demonstration */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Margin (m-*)</h3>
        <p className="text-slate-600 mb-4">Margin adds space outside the border.</p>
        <div className="bg-slate-200 p-2 inline-block">
          <div className="bg-red-500 text-white m-2">m-2</div>
          <div className="bg-red-500 text-white m-4">m-4</div>
          <div className="bg-red-500 text-white m-8">m-8</div>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4 mt-4">Other</h3>
        <p>1--0.25rem</p>
        <p>className="min-h-screen"</p>
      </div>
    </div>
  );
};

export default Spacing;