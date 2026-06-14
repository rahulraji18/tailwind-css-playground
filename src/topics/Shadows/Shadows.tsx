const Shadows = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Shadows</h2>
      
      <p className="mb-8 text-slate-600">
        Shadows are used to indicate elevation. Higher values (like <code>shadow-2xl</code>) 
        make an element appear to "float" higher above the page.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="p-6 bg-white rounded-lg shadow-sm text-center">shadow-sm</div>
        <div className="p-6 bg-white rounded-lg shadow-md text-center">shadow-md</div>
        <div className="p-6 bg-white rounded-lg shadow-lg text-center">shadow-lg</div>
        <div className="p-6 bg-white rounded-lg shadow-2xl text-center">shadow-2xl</div>
      </div>

      <div className="mt-12 p-4 bg-slate-800 text-white rounded font-mono text-sm">
        <p>Pro tip: Use <code>shadow-inner</code> for "sunken" or pressed-in effects.</p>
      </div>
    </div>
  );
};

export default Shadows;