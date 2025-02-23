import { Download } from "lucide-react";

interface DownloadButtonProps {
  onClick: () => void;
}

export function DownloadButton({ onClick }: DownloadButtonProps) {
  return (
    <div className="flex justify-center mt-6">
      <button
        onClick={onClick}
        className="flex items-center gap-2 px-6 py-3 bg-[#32b09a] text-white rounded-lg hover:bg-[#2a9583] transition-colors"
      >
        <Download className="w-5 h-5" />
        Download Edited Image
      </button>
    </div>
  );
}
