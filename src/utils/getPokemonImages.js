// A function to process the modules returned by import.meta.glob
const fetchImages = (modules) => {
  const images = {};

  for (const path in modules) {
    // Get the filename from the path (e.g., "../assets/pokemons/shiny/1.png" -> "1.png")
    const filename = path.split("/").pop();
    
    // Get the Pokémon ID from the filename (e.g., "1.png" -> "1")
    const key = filename.split(".")[0];
    
    // The module's default export contains the image URL
    images[key] = modules[path].default;
  }

  return images;
};

// Use import.meta.glob with the 'eager: true' option to import all images at once.
// This is the Vite equivalent of require.context.

const shinyModules = import.meta.glob(
  "../assets/pokemons/shiny/*.{png,jpg,jpeg,svg}",
  { eager: true }
);

const defaultModules = import.meta.glob(
  "../assets/pokemons/default/*.{png,jpg,jpeg,svg}",
  { eager: true }
);

export const images = fetchImages(shinyModules);
export const defaultImages = fetchImages(defaultModules);