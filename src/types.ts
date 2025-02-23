export interface ImageFilters {
  brightness: number;
  grayscale: number;
  saturation: number;
  sepia: number;
  blur: number;
}

export interface ImageTransforms {
  flipX: boolean;
  flipY: boolean;
  rotation: number;
}

export const defaultFilters: ImageFilters = {
  brightness: 100,
  grayscale: 0,
  saturation: 100,
  sepia: 0,
  blur: 0,
};

export const defaultTransforms: ImageTransforms = {
  flipX: false,
  flipY: false,
  rotation: 0,
};
