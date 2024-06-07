const navItems = [
  {
    partner: "Назва партнера 1",
    // src відсутній
  },
  {
    partner: "Назва партнера 2",
    src: "partner2-image.jpg",
  },
  // Додайте більше об'єктів за необхідності
];

const defaultImageSrc = "default-image-src.jpg";

const formattedNavItems = navItems.map(item => ({
  partner: item.partner,
  src: item.src || defaultImageSrc,
}));

export { formattedNavItems };