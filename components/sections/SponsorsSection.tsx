import { FadeIn } from '../animation/FadeIn';

const sponsors = [
  { name: 'OCP', initials: 'OCP' },
  { name: 'Ministère de la Jeunesse', initials: 'MJ' },
  { name: 'Commune Ben Guerir', initials: 'CBG' },
  { name: 'Fédération Marocaine', initials: 'FME' },
  { name: 'Royal Air Maroc', initials: 'RAM' },
];

export function SponsorsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-10">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
            Ils nous font confiance
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.name}
                className="flex items-center gap-3 group cursor-pointer transition-all duration-300 hover:scale-105 opacity-80 hover:opacity-100"
              >
                <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                  <span className="text-sm font-bold text-gray-500 group-hover:text-emerald-600 transition-colors">
                    {sponsor.initials}
                  </span>
                </div>
                <span className="text-gray-400 font-medium group-hover:text-gray-700 transition-colors hidden sm:block">
                  {sponsor.name}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
