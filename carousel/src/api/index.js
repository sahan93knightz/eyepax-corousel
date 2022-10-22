export const fetchImages = async (slides) => {
  const response = await fetch(`http://localhost:3600/api/carousel?slides=${slides}`);
  return await response.json();
};
