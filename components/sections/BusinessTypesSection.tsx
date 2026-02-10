import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from '../animation/FadeIn';
import {
  StaggerContainer,
  StaggerItem,
} from '../animation/StaggerContainer';

const businessTypes = [
  {
    title: 'Food & Beverage',
    description: 'From food trucks to fine dining, serve up success with tools built for your industry.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop',
    href: '#',
  },
  {
    title: 'Retail',
    description: 'Sell in-store, online, or anywhere your customers are with integrated inventory management.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
    href: '#',
  },
  {
    title: 'Beauty & Wellness',
    description: 'Keep your business looking as good as your clients with appointment scheduling and payments.',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=400&fit=crop',
    href: '#',
  },
  {
    title: 'Services',
    description: 'Book appointments, manage staff, and get paid—all from one powerful platform.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
    href: '#',
  },
  {
    title: 'Home & Repair',
    description: 'From quote to completion, run your business better with field service management tools.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop',
    href: '#',
  },
  {
    title: 'Professional Services',
    description: 'Invoices, contracts, and payments made simple for consultants and agencies.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop',
    href: '#',
  },
];

export function BusinessTypesSection() {
  return (
    <section id="business" className="py-20 md:py-32 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 max-w-4xl mx-auto leading-tight">
            Whatever your flavor of business, build and grow on your terms.
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessTypes.map((business) => (
            <StaggerItem key={business.title}>
              <motion.a
                href={business.href}
                className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={business.image}
                    alt={business.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {business.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {business.description}
                  </p>
                  <span className="inline-flex items-center text-[#006AFF] font-medium group-hover:gap-2 transition-all duration-200">
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </div>
              </motion.a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
