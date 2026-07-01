function unsplash(id: string, params = "auto=format&fit=crop&q=80") {
  return `https://images.unsplash.com/photo-${id}?${params}`;
}

export const images = {
  partnershipHandshake: unsplash("1521791136064-7986c2920216", "auto=format&fit=crop&q=80&w=1200"),
};
