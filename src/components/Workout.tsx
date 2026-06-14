import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

const initialCode = `
() => (
  <div className="p-6">
    <h1 className="text-4xl font-bold text-blue-500 min-h-screen">
      Hello Tailwind
    </h1>
  </div>
)
`;

export default function Workout() {
  return (
    <LiveProvider code={initialCode}>
      <div className="grid min-h-[600px] gap-4 lg:grid-cols-2">
        {/* Editor */}
        <div className="overflow-hidden rounded-lg border">
          <div className="border-b bg-slate-100 p-3 font-semibold">
            React Code
          </div>

          <LiveEditor className="min-h-[550px] font-mono text-sm" />
        </div>

        {/* Preview */}
        <div className="overflow-hidden rounded-lg border">
          <div className="border-b bg-slate-100 p-3 font-semibold">
            Live Preview
          </div>

          <div className="p-6">
            <LivePreview />
          </div>

          <LiveError className="border-t bg-red-50 p-4 text-red-600" />
        </div>
      </div>
    </LiveProvider>
  );
}
