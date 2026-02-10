import { FadeIn } from '../animation/FadeIn';
import { Quote, Landmark, Star, Handshake } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="club" className="py-24 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* President's Image - Spans 5 columns */}
          <div className="lg:col-span-5 relative">
            <FadeIn direction="left">
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden shadow-xl border-8 border-white">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=1000&fit=crop"
                  alt="Président Mohammed Alami"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              {/* Name Plate */}
              <div className="absolute -bottom-6 right-6 bg-white px-8 py-4 shadow-lg border-l-4 border-emerald-600">
                <p className="text-xl font-bold text-gray-900 font-serif">Mohammed Alami</p>
                <p className="text-sm text-gray-500 uppercase tracking-widest mt-1">Président</p>
              </div>
            </FadeIn>
          </div>

          {/* Official Letter Content - Spans 7 columns */}
          <div className="lg:col-span-7 lg:pl-8">
            <FadeIn direction="right" delay={0.2}>
              <div className="space-y-8">
                {/* Header */}
                <div className="border-b-2 border-gray-200 pb-6 mb-8">
                  <span className="text-emerald-700 font-bold text-xs uppercase tracking-[0.2em] mb-2 block">
                    Association Jeunesse Ben Guerir Échecs
                  </span>
                  <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 leading-tight">
                    Le Mot du Président
                  </h2>
                </div>
                
                {/* Letter Body */}
                <div className="prose prose-lg text-gray-600 leading-relaxed font-serif">
                  <p>
                    <span className="text-6xl float-left mr-3 mt-[-10px] text-emerald-600 font-serif">C</span>
                    hers passionnés, chers membres,
                  </p>
                  <p>
                    Depuis sa fondation en 2010, l&apos;Association Jeunesse Ben Guerir Échecs (AJBGE) 
                    s&apos;est donnée pour mission de cultiver l&apos;excellence intellectuelle au sein de notre communauté. 
                    Plus qu&apos;un simple jeu, les échecs sont pour nous une école de rigueur, de patience et de respect.
                  </p>
                  <p>
                    Notre vision a toujours été claire : faire de Ben Guerir un pôle d&apos;excellence échiquéenne 
                    au niveau national. Grâce à l&apos;engagement de nos éducateurs et à la passion de nos jeunes, 
                    nous avons transformé ce rêve en réalité.
                  </p>
                  
<div className="relative pl-8 border-l-2 border-emerald-600 my-10 italic text-gray-800 bg-white p-6 shadow-sm rounded-r-lg">
                    &quot;Les échecs sont la pierre de touche de l&apos;intelligence.&quot;
                    <footer className="text-sm text-emerald-600 mt-2 not-italic font-sans uppercase tracking-wider">
                      — Johann Wolfgang von Goethe
                    </footer>
                  </div>

                  <p>
                    Je vous invite à nous rejoindre dans cette noble aventure. Ensemble, continuons à 
                    développer les esprits de demain.
                  </p>
                </div>

                {/* Signature */}
                <div className="pt-8 mt-8 border-t border-gray-100">
                  <p className="font-serif text-2xl text-emerald-800 italic">
                    Mohammed Alami
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Values - More subtle integration */}
        <div className="grid md:grid-cols-3 gap-8 mt-24 border-t border-gray-200 pt-16">
          {[
            {
              title: 'Héritage',
              description: 'Depuis 2010, l\'AJBGE forme l\'élite échiquéenne de demain.',
              Icon: Landmark,
            },
            {
              title: 'Excellence',
              description: 'Une pédagogie rigoureuse pour des résultats nationaux.',
              Icon: Star,
            },
            {
              title: 'Engagement',
              description: 'Un dévouement total envers la jeunesse de notre région.',
              Icon: Handshake,
            },
          ].map((value, index) => (
            <FadeIn key={value.title} delay={0.4 + (index * 0.1)}>
              <div className="text-center md:text-left group">
                <div className="w-12 h-12 mb-4 mx-auto md:mx-0 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                  <value.Icon className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 uppercase tracking-wider font-sans">{value.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto md:mx-0 font-serif">
                  {value.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
