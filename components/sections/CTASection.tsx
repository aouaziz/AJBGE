import { FadeIn } from '../animation/FadeIn';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-emerald-600 to-emerald-800 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      
      {/* Chess pieces decoration */}
      <div className="absolute top-10 left-10 text-white/10 text-9xl select-none">♟</div>
      <div className="absolute bottom-10 right-10 text-white/10 text-9xl select-none">♜</div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Prêt à faire votre premier pas ?
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <p className="text-xl text-emerald-100 mb-10">
              Rejoignez plus de 250 passionnés d&apos;échecs à Ben Guerir. 
              Commencez votre voyage vers l&apos;excellence échiquéenne dès aujourd&apos;hui.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#adhesion"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-600 font-semibold rounded-xl hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-lg"
              >
                Adhérer Maintenant
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
              >
                Nous Contacter
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="mt-8 text-sm text-emerald-200">
              Pas de frais cachés. Annulation gratuite à tout moment.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
