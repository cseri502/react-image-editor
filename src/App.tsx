import { useState, useRef, ChangeEvent, useEffect } from "react";
import { Header } from "./components/Header";
import { ImageUpload } from "./components/ImageUpload";
import { ImagePreview } from "./components/ImagePreview";
import { FilterControls } from "./components/FilterControls";
import { TransformControls } from "./components/TransformControls";
import { DownloadButton } from "./components/DownloadButton";
import {
  ImageFilters,
  ImageTransforms,
  defaultFilters,
  defaultTransforms,
} from "./types";

function App() {
  const [image, setImage] = useState<string>("");
  const [filters, setFilters] = useState<ImageFilters>(defaultFilters);
  const [transforms, setTransforms] =
    useState<ImageTransforms>(defaultTransforms);
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => setDarkMode(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
        setFilters(defaultFilters);
        setTransforms(defaultTransforms);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFilterChange = (filter: keyof ImageFilters, value: number) => {
    setFilters((prev) => ({ ...prev, [filter]: value }));
  };

  const handleRotate = (direction: "left" | "right") => {
    setTransforms((prev) => ({
      ...prev,
      rotation: (prev.rotation + (direction === "right" ? 90 : -90)) % 360,
    }));
  };

  const handleFlip = (axis: "X" | "Y") => {
    setTransforms((prev) => ({
      ...prev,
      [`flip${axis}`]:
        !prev[`flip${axis}` as keyof Pick<ImageTransforms, "flipX" | "flipY">],
    }));
  };

  const resetSettings = () => {
    setFilters(defaultFilters);
    setTransforms(defaultTransforms);
  };

  const downloadImage = () => {
    if (!imageRef.current) return;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imageRef.current;
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;

    ctx.filter = `brightness(${filters.brightness}%) 
                  grayscale(${filters.grayscale}%) 
                  saturate(${filters.saturation}%) 
                  sepia(${filters.sepia}%)
                  blur(${filters.blur}px)`;

    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate((transforms.rotation * Math.PI) / 180);
    ctx.scale(transforms.flipX ? -1 : 1, transforms.flipY ? -1 : 1);
    ctx.drawImage(img, -canvas.width / 2, -canvas.height / 2);

    const link = document.createElement("a");
    link.download = "edited-image.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  const filterStyle = {
    filter: `brightness(${filters.brightness}%) 
            grayscale(${filters.grayscale}%) 
            saturate(${filters.saturation}%) 
            sepia(${filters.sepia}%)
            blur(${filters.blur}px)`,
    transform: `rotate(${transforms.rotation}deg) 
                scaleX(${transforms.flipX ? -1 : 1}) 
                scaleY(${transforms.flipY ? -1 : 1})`,
  };

  return (
    <div
      className={`min-h-screen p-4 sm:p-8 transition-colors font-inter ${
        darkMode ? "bg-gray-900" : "bg-[#f3f3fb]"
      }`}
    >
      <div
        className={`max-w-4xl mx-auto ${
          darkMode ? "bg-gray-800" : "bg-white"
        } rounded-xl shadow-lg p-4 sm:p-6`}
      >
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <ImageUpload darkMode={darkMode} onImageUpload={handleImageUpload} />

        {image && (
          <div className="space-y-6">
            <ImagePreview
              image={image}
              imageRef={imageRef}
              filterStyle={filterStyle}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <FilterControls
                darkMode={darkMode}
                filters={filters}
                onFilterChange={handleFilterChange}
                onReset={resetSettings}
              />
              <TransformControls
                darkMode={darkMode}
                onRotate={handleRotate}
                onFlip={handleFlip}
              />
            </div>

            <DownloadButton onClick={downloadImage} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
