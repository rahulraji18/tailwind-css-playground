import { useState } from "react";
import TextSizes from "../topics/Typography/TextSizes";
import FontWeights from "../topics/Typography/FontWeights";
import Workout from "../components/Workout";
import TextColors from "../topics/Typography/TextColors";
import Spacing from "../topics/Spacing/Spacing";
import Position from "../topics/Position/Position";
import Flexbox from "../topics/Flexbox/Flexbox";
import Grid from "../topics/Grid/Grid";
import Borders from "../topics/Borders/Borders";
import Shadows from "../topics/Shadows/Shadows";
import Transform from "../topics/Transform/Transform";
import Responsive from "../topics/Responsive/Responsive";
import Animation from "../topics/Animation/Animation";

const menuItems = [
  { id: "text-size", label: "Text Sizes" },
  { id: "font-weight", label: "Font Weights" },
  { id: "text-colors", label: "Text Colors" },
  { id: "spacing", label: "Spacing" },
  { id: "position", label: "Position" },
  { id: "flexbox", label: "Flexbox" },
  { id: "grid", label: "Grid" },
  { id: "borders", label: "Borders" },
  { id: "shadows", label: "Shadows" },
  { id: "transform", label: "Transform" },
  { id: "animation", label: "Animation" },
  { id: "responsive", label: "Responsive" },
  { id: "workout", label: "Workout" },
];

export default function PlaygroundLayout() {
  const [activeTopic, setActiveTopic] = useState<string>("text-size");
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

const renderContent = () => {
    switch (activeTopic) {
      case "text-size": return <TextSizes />;
      case "font-weight": return <FontWeights />;
      case "text-colors": return <TextColors />;
      case "spacing": return <Spacing />;
      case "position": return <Position />;
      case "flexbox": return <Flexbox />;
      case "grid": return <Grid />;
      case "borders": return <Borders />;
      case "shadows": return <Shadows />;
      case "transform": return <Transform />;
      case "animation": return <Animation />;
      case "responsive": return <Responsive />;
      case "workout": return <Workout />;
      default: return <TextSizes />;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
<aside
  className={`border-r bg-slate-900 text-white transition-all duration-300 ${
    isSidebarOpen ? "w-72" : "w-20"
  }`}
>
  <div className="flex items-center justify-between border-b p-5">
    {isSidebarOpen && (
      <h1 className="text-xl font-bold">
        Tailwind Playground
      </h1>
    )}

    <button
      onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      className="rounded p-2 hover:bg-slate-800"
    >
      {isSidebarOpen ? "◀" : "▶"}
    </button>
  </div>

  <ul className="p-4">
    {menuItems.map((item) => (
      <li key={item.id}>
        <button
          onClick={() => setActiveTopic(item.id)}
          className={`mb-2 w-full rounded-md px-4 py-3 text-left transition ${
            activeTopic === item.id
              ? "bg-blue-500"
              : "hover:bg-slate-800"
          }`}
        >
          {isSidebarOpen ? item.label : item.label.charAt(0)}
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