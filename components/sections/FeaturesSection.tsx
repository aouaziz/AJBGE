import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { FadeIn } from '../animation/FadeIn';

const features = [
  {
    title: 'Accept every way customers want to pay',
    description: 'From credit cards to mobile wallets, give your customers the flexibility to pay their way. Get deposits as fast as the next business day.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    points: [
      'Accept all major credit and debit cards',
      'Contactless payments including Apple Pay and Google Pay',
      'Next-business-day deposits',
      'No long-term contracts or hidden fees',
    ],
    cta: 'Explore payments',
    reverse: false,
  },
  {
    title: 'Run your business from one place',
    description: 'Manage inventory, track sales, and understand your customers—all from your Square Dashboard. Make smarter decisions with real-time insights.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    points: [
      'Real-time sales analytics and reporting',
      'Inventory management across all channels',
      'Customer directory with purchase history',
      'Staff management and permissions',
    ],
    cta: 'See all features',
    reverse: true,
  },
  {
    title: 'Sell online, in-store, and on the go',
    description: 'Reach customers wherever they are. Build a free online store, sell on social media, and take payments anywhere with the Square app.',
    image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&h=600&fit=crop',
    points: [
      'Free eCommerce website with Square Online',
      'Sell on Instagram, Facebook, and more',
      'Mobile point of sale for on-the-go sales',
      'Sync inventory across all channels',
    ],
    cta: 'Start selling online',
    reverse: false,
  },
];

export function FeaturesSection() {
  return (
    <section id="products" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
            Powerful tools to run your business
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to sell, manage, and grow—integrated seamlessly.
          </p>
        </FadeIn>

        <div className="space-y-24 md:space-y-32">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                feature.reverse ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <FadeIn
                direction={feature.reverse ? 'right' : 'left'}
                className={feature.reverse ? 'lg:order-2' : ''}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
              </FadeIn>

              {/* Content */}
              <FadeIn
                direction={feature.reverse ? 'left' : 'right'}
                delay={0.2}
                className={feature.reverse ? 'lg:order-1' : ''}
              >
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-gray-600">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.points.map((point, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.3 + i * 0.1,
                          duration: 0.4,
                          ease: [0.25, 0.1, 0.25, 1] as const,
                        }}
                        className="flex items-start gap-3"
                      >
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#006AFF]/10 flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-[#006AFF]" />
                        </div>
                        <span className="text-gray-700">{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <motion.a
                    href="#"
                    className="inline-flex items-center gap-2 text-[#006AFF] font-medium hover:gap-3 transition-all duration-200"
                    whileHover={{ x: 4 }}
                  >
                    {feature.cta}
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
