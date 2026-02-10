import { FadeIn } from '../animation/FadeIn';
import { Calendar, ArrowRight, Trophy } from 'lucide-react';

const news = [
  {
    id: 1,
    title: 'Tournoi Inter-Écoles : L\'AJBGE remporte la coupe!',
    excerpt: 'Nos jeunes joueurs ont brillé lors du tournoi inter-écoles de la région, décrochant la première place.',
    date: '15 Janvier 2026',
    image: 'https://images.unsplash.com/photo-1586165368502-1bad197a6461?w=600&h=400&fit=crop',
    category: 'Tournoi',
  },
  {
    id: 2,
    title: 'Nouveau partenariat avec l\'OCP',
    excerpt: 'L\'AJBGE est fière d\'annoncer un partenariat stratégique avec l\'OCP pour le développement des échecs.',
    date: '10 Janvier 2026',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop',
    category: 'Partenariat',
  },
  {
    id: 3,
    title: 'Stage d\'été 2026 : Inscriptions ouvertes',
    excerpt: 'Rejoignez notre stage d\'été intensif pour perfectionner votre jeu avec nos meilleurs entraîneurs.',
    date: '5 Janvier 2026',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop',
    category: 'Événement',
  },
];

export function NewsSection() {
  return (
    <section id="medias" className="py-24 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
              Restez Informés
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
              Actualités & Événements
            </h2>
            <p className="text-gray-600 mt-2 max-w-lg">
              Découvrez les dernières nouvelles du club et les événements à venir.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 mt-4 md:mt-0 text-emerald-600 font-semibold hover:gap-3 transition-all transform hover:translate-x-1"
          >
            Toutes les actualités
            <ArrowRight className="w-5 h-5" />
          </a>
        </FadeIn>

        {/* News Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.1}>
              <article
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-emerald-700 text-xs font-semibold rounded-full">
                    {item.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    {item.date}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                    {item.excerpt}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-emerald-600 font-medium text-sm hover:gap-3 transition-all"
                  >
                    Lire la suite
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        {/* Upcoming Event Banner */}
        <FadeIn delay={0.4} className="mt-12">
          <div className="bg-emerald-600 rounded-2xl p-8 md:p-12 text-white">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Trophy className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-emerald-100 text-sm font-medium uppercase tracking-wider">
                    Prochain Événement
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold mt-1">
                    Championnat Régional 2026
                  </h3>
                  <p className="text-emerald-100 mt-2">
                    25-27 Février 2026 • Centre Culturel de Ben Guerir
                  </p>
                </div>
              </div>
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-600 font-semibold rounded-xl hover:bg-gray-100 transition-all hover:scale-105 active:scale-95"
              >
                S&apos;inscrire au tournoi
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
