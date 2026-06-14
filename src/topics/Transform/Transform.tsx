const Transform = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Transforms</h2>
      
      <p className="mb-8 text-slate-600">
        Transform utilities allow you to manipulate elements without changing the document layout.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-10">
        {/* Scale */}
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-500 mx-auto scale-125 rounded-lg"></div>
          <p className="mt-4 font-mono">scale-125</p>
        </div>

        {/* Rotate */}
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-500 mx-auto rotate-45 rounded-lg"></div>
          <p className="mt-4 font-mono">rotate-45</p>
        </div>

        {/* Translate */}
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-500 mx-auto translate-x-4 rounded-lg"></div>
          <p className="mt-4 font-mono">translate-x-4</p>
        </div>

        {/* Skew */}
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-500 mx-auto skew-y-12 rounded-lg"></div>
          <p className="mt-4 font-mono">skew-y-12</p>
        </div>
      </div>
    </div>
  );
};

export default Transform;