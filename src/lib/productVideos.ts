export type ProductVideo = {
  src: string;
  poster: string;
  alt: string;
};

function video(name: string, alt: string): ProductVideo {
  return {
    src: `/videos/products/${name}.mp4`,
    poster: `/videos/products/posters/${name}.jpg`,
    alt,
  };
}

export const productVideos: Record<"beauty" | "home" | "accessories", ProductVideo[]> = {
  beauty: [
    video("beauty-exfoliating-serum", "AHA exfoliating serum in use"),
    video("beauty-eye-care", "Eye care series product demo"),
    video("beauty-fruit-extract-toner", "Fruit extract skin-refining toner"),
    video("beauty-golden-essence-serum", "Golden essence serum demo"),
    video("beauty-microneedling-patch", "Microneedling patch application"),
    video("beauty-lip-oil", "Sweet heart lip oil swatch"),
  ],
  home: [video("home-toilet-cleaning-wipes", "Toilet cleaning wipes in use")],
  accessories: [
    video("accessories-capybara-notebook-1", "Capybara notebook and gel pen charm"),
    video("accessories-capybara-notebook-2", "Capybara notebook and gel pen charm, detail"),
  ],
};

export const storyVideos = {
  storeInterior: video("beauty-clay-mask", "Collagen brightening clay mask"),
  checkoutMoment: video("beauty-kids-perfume", "Sweet Dream kids perfume"),
};
