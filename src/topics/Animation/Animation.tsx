const Animation = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Animations</h2>
      
      <p className="mb-8 text-slate-600">
        Tailwind includes several built-in animation utilities like <code>animate-spin</code>, 
        <code>animate-pulse</code>, and <code>animate-bounce</code>.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-10">
        {/* Spin */}
        <div className="text-center">
          <div className="w-12 h-12 bg-blue-500 mx-auto rounded-full animate-spin"></div>
          <p className="mt-4 font-mono">animate-spin</p>
        </div>

        {/* Pulse */}
        <div className="text-center">
          <div className="w-12 h-12 bg-blue-500 mx-auto rounded-full animate-pulse"></div>
          <p className="mt-4 font-mono">animate-pulse</p>
        </div>

        {/* Bounce */}
        <div className="text-center">
          <div className="w-12 h-12 bg-blue-500 mx-auto rounded-full animate-bounce"></div>
          <p className="mt-4 font-mono">animate-bounce</p>
        </div>

        {/* Ping */}
        <div className="text-center">
          <div className="w-12 h-12 bg-blue-500 mx-auto rounded-full animate-ping"></div>
          <p className="mt-4 font-mono">animate-ping</p>
        </div>
      </div>
    </div>
  );
};

export default Animation;