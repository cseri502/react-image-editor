import { RefreshCw } from "lucide-react";
import { ImageFilters } from "../types";

interface FilterControlsProps {
  darkMode: boolean;
  filters: ImageFilters;
  onFilterChange: (filter: keyof ImageFilters, value: number) => void;
  onReset: () => void;
}

export function FilterControls({
  darkMode,
  filters,
  onFilterChange,
  onReset,
}: FilterControlsProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2
          className={`text-xl font-semibold ${
            darkMode ? "text-white" : "text-[#434454]"
          }`}
        >
          Adjustments
        </h2>
        <button
          onClick={onReset}
          className={`flex items-center gap-2 px-3 py-1 rounded-lg transition-colors ${
            darkMode
              ? "text-[#32b09a] hover:bg-gray-700"
              : "text-[#32b09a] hover:bg-[#f3f3fb]"
          }`}
        >
          <RefreshCw className="w-4 h-4" />
          Reset All
        </button>
      </div>
      <div className="space-y-4">
        {Object.entries(filters).map(([key, value]) => (
          <div key={key}>
            <label
              className={`block text-sm font-medium mb-1 ${
                darkMode ? "text-gray-300" : "text-[#434454]"
              }`}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)} ({value}
              {key === "blur" ? "px" : "%"})
            </label>
            <input
              type="range"
              min="0"
              max={
                key === "blur"
                  ? "20"
                  : key === "brightness" || key === "saturation"
                  ? "200"
                  : "100"
              }
              value={value}
              onChange={(e) =>
                onFilterChange(
                  key as keyof ImageFilters,
                  Number(e.target.value)
                )
              }
              className="w-full accent-[#32b09a]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
