import {
  RotateCw,
  RotateCcw,
  FlipHorizontal,
  FlipVertical,
} from "lucide-react";

interface TransformControlsProps {
  darkMode: boolean;
  onRotate: (direction: "left" | "right") => void;
  onFlip: (axis: "X" | "Y") => void;
}

export function TransformControls({
  darkMode,
  onRotate,
  onFlip,
}: TransformControlsProps) {
  const buttons = [
    { label: "Rotate Left", icon: RotateCcw, onClick: () => onRotate("left") },
    { label: "Rotate Right", icon: RotateCw, onClick: () => onRotate("right") },
    {
      label: "Flip Horizontal",
      icon: FlipHorizontal,
      onClick: () => onFlip("X"),
    },
    { label: "Flip Vertical", icon: FlipVertical, onClick: () => onFlip("Y") },
  ];

  return (
    <div className="space-y-4">
      <h2
        className={`text-xl font-semibold ${
          darkMode ? "text-white" : "text-[#434454]"
        }`}
      >
        Transforms
      </h2>
      <div className="flex flex-wrap gap-2">
        {buttons.map((button) => (
          <button
            key={button.label}
            onClick={button.onClick}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              darkMode
                ? "bg-gray-700 text-gray-300 hover:bg-[#32b09a] hover:text-white"
                : "bg-[#f3f3fb] text-[#434454] hover:bg-[#32b09a] hover:text-white"
            }`}
          >
            <button.icon className="w-5 h-5" />
            {button.label}
          </button>
        ))}
      </div>
    </div>
  );
}
