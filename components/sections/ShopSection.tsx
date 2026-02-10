import { FadeIn } from '../animation/FadeIn';
import { ShoppingCart, Heart, ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Horloge d\'échecs digitale',
    price: 450,
    image: 'https://images.unsplash.com/photo-1586165368502-1bad197a6461?w=400&h=400&fit=crop',
    category: 'Équipement',
    supportClub: true,
  },
  {
    id: 2,
    name: 'Échiquier en bois premium',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1586165368502-1bad197a6461?w=400&h=400&fit=crop',
    category: 'Équipement',
    supportClub: true,
  },
  {
    id: 3,
    name: 'T-shirt AJBGE',
    price: 250,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    category: 'Vêtements',
    supportClub: true,
  },
  {
    id: 4,
    name: 'Mug Club AJBGE',
    price: 120,
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&fit=crop',
    category: 'Accessoires',
    supportClub: true,
  },
];

export function ShopSection() {
  return (
    <section id="boutique" className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
              Boutique Officielle
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
              Boutique du Club
            </h2>
            <p className="text-gray-600 mt-2 max-w-lg">
              Équipement professionnel et articles exclusifs pour les passionnés d&apos;échecs.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 mt-4 md:mt-0 text-emerald-600 font-semibold hover:gap-3 transition-all transform hover:translate-x-1"
          >
            Voir tous les produits
            <ArrowRight className="w-5 h-5" />
          </a>
        </FadeIn>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <FadeIn key={product.id} delay={index * 0.1}>
              <div
                className="group bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Support Club Badge */}
                  {product.supportClub && (
                    <span className="absolute top-3 left-3 px-2 py-1 bg-emerald-600 text-white text-xs font-medium rounded-md">
                      Soutenez le club
                    </span>
                  )}
                  {/* Wishlist Button */}
                  <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-50">
                    <Heart className="w-4 h-4 text-gray-600" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-4">
                  <span className="text-xs text-gray-500 uppercase tracking-wider">
                    {product.category}
                  </span>
                  <h3 className="font-semibold text-gray-900 mt-1 mb-2 group-hover:text-emerald-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-emerald-600">
                      {product.price} DH
                    </span>
                    <button
                      className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all hover:scale-105 active:scale-95"
                    >
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Support Message */}
        <FadeIn delay={0.5} className="mt-12">
          <div className="bg-emerald-50 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">♟️</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Chaque achat compte</h4>
                <p className="text-sm text-gray-600">
                  Les bénéfices de la boutique soutiennent directement les activités du club.
                </p>
              </div>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors"
            >
              En savoir plus
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
