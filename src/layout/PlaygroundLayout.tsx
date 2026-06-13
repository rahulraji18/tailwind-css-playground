import { useState } from "react";
import TextSizes from "../topics/Typography/TextSizes";
import FontWeights from "../topics/Typography/FontWeights";

const menuItems = [
  {
    id: "text-size",
    label: "Text Sizes",
  },
  {
    id: "font-weight",
    label: "Font Weights",
  },
];

export default function PlaygroundLayout() {
  const [activeTopic, setActiveTopic] = useState("text-size");

  const renderContent = () => {
    switch (activeTopic) {
      case "text-size":
        return <TextSizes />;

      case "font-weight":
        return <FontWeights />;

      default:
        return <TextSizes />;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-72 border-r bg-slate-900 text-white">
        <div className="border-b p-5">
          <h1 className="text-2xl font-bold">
            Tailwind Playground
          </h1>
        </div>

        <ul className="p-4">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveTopic(item.id)}
                className={`mb-2 w-full rounded-md px-4 py-3 text-left transition
                  ${
                    activeTopic === item.id
                      ? "bg-blue-500"
                      : "hover:bg-slate-800"
                  }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Content */}
      <main className="flex-1 overflow-y-auto p-8">
        {renderContent()}
      </main>
    </div>
  );
}