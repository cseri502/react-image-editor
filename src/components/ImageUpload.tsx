import { ChangeEvent } from "react";
import { Upload } from "lucide-react";

interface ImageUploadProps {
  darkMode: boolean;
  onImageUpload: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function ImageUpload({ darkMode, onImageUpload }: ImageUploadProps) {
  return (
    <div className="mb-8">
      <label
        className={`flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer transition-colors ${
          darkMode
            ? "border-[#32b09a] bg-gray-800 hover:bg-gray-700"
            : "border-[#32b09a] bg-white hover:bg-[#f3f3fb]"
        }`}
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <Upload className="w-10 h-10 mb-3 text-[#32b09a]" />
          <p
            className={`mb-2 text-sm ${
              darkMode ? "text-gray-300" : "text-[#434454]"
            }`}
          >
            <span className="font-semibold">Click to upload</span> an image
          </p>
        </div>
        <input
          type="file"
          className="hidden"
          accept="image/*"
          onChange={onImageUpload}
        />
      </label>
    </div>
  );
}
