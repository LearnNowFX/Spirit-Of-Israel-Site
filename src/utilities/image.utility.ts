export const getImageLocation = (path: string) => {
  return `${import.meta.env.VITE_IMAGE_CONTAINER}${path}`;
};
