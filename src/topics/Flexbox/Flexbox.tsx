import { useState } from 'react';

const Flexbox = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>('light');

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Flexbox Layout</h2>

      <p className="mb-8 text-slate-600">
        Flexbox makes it easy to align items. Use <code>justify-*</code> for the
        main axis and <code>items-*</code> for the cross axis.
      </p>

      {/* Main Container */}
      <div className="h-64 w-full bg-slate-100 border-2 border-dashed border-slate-400 flex justify-center items-center gap-4">
        <div className="w-16 h-16 bg-blue-500 rounded flex items-center justify-center text-white font-bold">
          1
        </div>
        <div className="w-16 h-16 bg-blue-500 rounded flex items-center justify-center text-white font-bold">
          2
        </div>
        <div className="w-16 h-16 bg-blue-500 rounded flex items-center justify-center text-white font-bold">
          3
        </div>
      </div>

      <div className="mt-6 p-4 bg-slate-800 text-white rounded font-mono text-sm">
        <p>Container classes used:</p>
        <code className="text-emerald-400">
          flex justify-center items-center gap-4
        </code>
      </div>

      {/* Example  for site...*/}
      <div className={`${theme} w-full mt-5 min-h-screen`}>
        {/* Navbar */}
        <div className="flex items-center justify-between text-slate-900 dark:bg-background dark:text-primary p-4">
          <div className="font-bold">Logo</div>
          {/* Desktop Nav */}
          <div className="hidden sm:flex gap-2">
            <span>Home</span>
            <span>About</span>
            <span>Logout</span>
                        <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="cursor-pointer rounded-md bg-slate-700 px-3 py-1 text-sm text-white hover:bg-slate-600"
            >
              {theme === 'light' ? '☀️' : '🌙'}
            </button>
          </div>
          {/* Mobile Menu Icon */}
          <button
            className="text-xl cursor-pointer sm:hidden"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
        {/* Mobile Nav */}
        {open && (
          <div className="flex flex-col items-center gap-2 text-slate-900 dark:bg-background dark:text-primary p-4 sm:hidden">
            <span>Home</span>
            <span>About</span>
            <span>Logout</span>
            <button
              className="text-xl cursor-pointer sm:hidden"
              onClick={() => setOpen(!open)}
            >
              ☰
            </button>
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="cursor-pointer rounded-md bg-slate-700 px-3 py-1 text-sm text-white hover:bg-slate-600"
            >
              {theme === 'light' ? '☀️' : '🌙'}
            </button>
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-white  dark:bg-background dark:text-primary  p-6 gap-6 text-center font-semibold sm:text-sm">
          <div className="bg-slate-500 p-4 rounded hover:bg-slate-600 hover:scale-100 cursor-pointer transition-all duration-500">
            Feature one
          </div>
          <div className="bg-slate-500 p-4 rounded hover:bg-slate-600 hover:scale-100 cursor-pointer transition-all duration-500">
            Feature tow
          </div>
          <div className="bg-slate-500 p-4 rounded hover:bg-slate-600 hover:scale-100 cursor-pointer transition-all duration-500">
            Feature three
          </div>
          <div className="bg-slate-500 p-4 rounded hover:bg-slate-600 hover:scale-100 cursor-pointer transition-all duration-500">
            Feature four
          </div>
          <div className="bg-slate-500 p-4 rounded hover:bg-slate-600 hover:scale-100 cursor-pointer transition-all duration-500">
            Feature five
          </div>
          <div className="bg-slate-500 p-4 rounded hover:bg-slate-600 hover:scale-100 cursor-pointer transition-all duration-500">
            Feature six
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flexbox;
