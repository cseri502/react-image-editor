import React from "react";

interface ImagePreviewProps {
  image: string;
  imageRef: React.RefObject<HTMLImageElement>;
  filterStyle: React.CSSProperties;
}

export function ImagePreview({
  image,
  imageRef,
  filterStyle,
}: ImagePreviewProps) {
  return (
    <div className="flex justify-center mb-6">
      <div className="relative w-full max-w-2xl">
        <img
          ref={imageRef}
          src={image}
          alt="Uploaded image"
          className="w-full h-auto rounded-lg"
          style={filterStyle}
        />
      </div>
    </div>
  );
}
