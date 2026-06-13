const TextSizes = () => {
    const sizes = [
    "text-xs",
    "text-sm",
    "text-base",
    "text-lg",
    "text-xl",
    "text-2xl",
    "text-3xl",
    "text-4xl",
    "text-5xl",
    "text-6xl",
    "text-7xl",
    "text-8xl",
    "text-9xl",
  ];
  return (
    <div className='space-y-6'>
      <h2 className="text-4xl font-bold">Text sizes</h2>
      {sizes.map((size) => (
        <div key={size} className="border-b pb-4">
          <p className="mb-2 font-mono text-sm text-gray-500">{size}</p>
          <p className={size}>The quick brown fox jumps over the lazy dog</p>
        </div>
      ))}
    </div>
  )
}

export default TextSizes