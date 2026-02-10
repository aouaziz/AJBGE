// Brand logos as text representations (in production, these would be SVG files)
const brands = [
  'MILWAUKEE',
  'LIVE BY THE SWORD',
  'SOFI STADIUM',
  'SHAKE SHACK',
  'H MART',
  'MALIN+GOETZ',
  "BEN & JERRY'S",
  'A24',
  'CHANEL',
  'COFFEE SHOP',
];

export function LogoTicker() {
  // Duplicate the brands array for seamless loop
  const allBrands = [...brands, ...brands];

  return (
    <div className="logo-ticker relative overflow-hidden py-8 bg-gradient-to-t from-black/60 to-transparent">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black/40 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black/40 to-transparent z-10 pointer-events-none" />

      <div className="logo-ticker-content flex animate-scroll">
        {allBrands.map((brand, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-8 md:px-12"
          >
            <span className="text-white/60 text-sm md:text-base font-semibold tracking-wider whitespace-nowrap">
              {brand}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
