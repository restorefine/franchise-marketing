function unsplash(id: string, params = "auto=format&fit=crop&q=80") {
  return `https://images.unsplash.com/photo-${id}?${params}`;
}

export const images = {
  heroStorefront: unsplash("1481437156560-3205f6a55735", "auto=format&fit=crop&q=80&w=1200"),
  categoryBeauty: unsplash("1583209814683-c023dd293cc6", "auto=format&fit=crop&q=80&w=900"),
  categoryHome: unsplash("1493663284031-b7e3aefcae8e", "auto=format&fit=crop&q=80&w=900"),
  categoryAccessories: unsplash("1483985988355-763728e1935b", "auto=format&fit=crop&q=80&w=900"),
  storeInterior: unsplash("1567401893414-76b7b1e5a7a5", "auto=format&fit=crop&q=80&w=900"),
  checkoutMoment: unsplash("1556742049-0cfed4f6a45d", "auto=format&fit=crop&q=80&w=900"),
  partnershipHandshake: unsplash("1521791136064-7986c2920216", "auto=format&fit=crop&q=80&w=1200"),
};
