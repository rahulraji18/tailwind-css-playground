const FontWeights = () => {
  const fontWeights = [
    "font-thin",
    "font-extralight",
    "font-light",
    "font-normal",
    "font-medium",
    "font-semibold",
    "font-bold",
    "font-extrabold",
    "font-black",
  ];

  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <h1 className="text-4xl font-bold">Font Weight</h1>
        <p className="mt-2 text-gray-600">
          Control the thickness of text using Tailwind's font weight utilities.
        </p>
      </div>

      <div className="overflow-hidden rounded-lg border">
        {fontWeights.map((weight) => (
          <div
            key={weight}
            className="border-b p-6 last:border-b-0"
          >
            <p className="mb-2 font-mono text-sm text-gray-500">
              {weight}
            </p>

            <p className={weight}>
              The quick brown fox jumps over the lazy dog
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FontWeights;