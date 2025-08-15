const fetchImages = (modules) => {
  const images = {};

  Object.entries(modules).forEach(([path, module]) => {
    // Extract just the file name without extension
    const fileName = path.split('/').pop().replace(/\.(png|jpe?g|svg)$/, '');
    images[fileName] = module;
  });

  return images;
};

// Glob imports all matching files eagerly
const shinyModules = import.meta.glob('../assets/pokemons/shiny/*.{png,jpg,jpeg,svg}', {
  eager: true,
  import: 'default'
});

const defaultModules = import.meta.glob('../assets/pokemons/default/*.{png,jpg,jpeg,svg}', {
  eager: true,
  import: 'default'
});

export const images = fetchImages(shinyModules);
export const defaultImages = fetchImages(defaultModules);
