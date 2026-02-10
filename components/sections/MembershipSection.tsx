"use client";

import { useState } from 'react';
import { FadeIn } from '../animation/FadeIn';
import { Check, User, FileText, CreditCard, Package, Upload, ChevronRight } from 'lucide-react';

const steps = [
  { id: 1, label: 'Informations', icon: User },
  { id: 2, label: 'Documents', icon: FileText },
  { id: 3, label: 'Formule', icon: Package },
  { id: 4, label: 'Paiement', icon: CreditCard },
];

const plans = [
  {
    id: 'junior',
    name: 'Junior',
    price: '200',
    period: '/an',
    description: 'Pour les joueurs de 6 à 18 ans',
    features: [
      'Accès à tous les cours hebdomadaires',
      'Participation aux tournois internes',
      'Matériel de jeu fourni',
      'Certificat de participation',
    ],
    highlighted: false,
  },
  {
    id: 'adulte',
    name: 'Adulte',
    price: '300',
    period: '/an',
    description: 'Pour les joueurs adultes',
    features: [
      'Accès illimité au club',
      'Participation à tous les tournois',
      'Cours de perfectionnement',
      'Accès à la bibliothèque échiquéenne',
    ],
    highlighted: true,
  },
  {
    id: 'famille',
    name: 'Famille',
    price: '500',
    period: '/an',
    description: 'Pour les familles (jusqu\'à 4 membres)',
    features: [
      'Tous les avantages Adulte',
      'Réduction spéciale famille',
      'Événements exclusifs',
      'Coaching personnalisé',
    ],
    highlighted: false,
  },
];

export function MembershipSection() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  return (
    <section id="adhesion" className="py-24 bg-gradient-to-b from-emerald-50/50 to-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
            Rejoignez-nous
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Adhésion Digitalisée
          </h2>
<p className="text-gray-600 max-w-2xl mx-auto">
             Rejoignez le club en quelques minutes. Notre processus d&apos;adhésion 
             entièrement digital vous permet de vous inscrire rapidement et facilement.
           </p>
        </FadeIn>

        {/* Step Indicator */}
        <FadeIn delay={0.2} className="mb-12">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 ${
                        currentStep >= step.id
                          ? 'bg-emerald-600 text-white'
                          : 'bg-gray-200 text-gray-500'
                      }`}
                    >
                      {currentStep > step.id ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        <step.icon className="w-5 h-5" />
                      )}
                    </div>
                    <span className={`text-xs mt-2 font-medium ${
                      currentStep >= step.id ? 'text-emerald-600' : 'text-gray-400'
                    }`}>
                      {step.label}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-16 md:w-24 h-1 mx-2 transition-colors duration-300 ${
                      currentStep > step.id ? 'bg-emerald-600' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Wizard Content */}
        <FadeIn delay={0.3}>
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-card p-8 md:p-12">
            {currentStep === 1 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Informations Personnelles</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Prénom</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                      placeholder="+212 6XX XXX XXX"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date de naissance</label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Documents Requis</h3>
                <div className="space-y-6">
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-emerald-500 transition-colors cursor-pointer">
                    <Upload className="w-10 h-10 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-700 font-medium mb-2">Carte Nationale d&apos;Identité (CIN)</p>
                    <p className="text-sm text-gray-500">Glissez-déposez ou cliquez pour télécharger</p>
                    <p className="text-xs text-gray-400 mt-2">PDF, JPG ou PNG (max 5MB)</p>
                  </div>
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-emerald-500 transition-colors cursor-pointer">
                    <Upload className="w-10 h-10 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-700 font-medium mb-2">Photo d&apos;identité</p>
                    <p className="text-sm text-gray-500">Glissez-déposez ou cliquez pour télécharger</p>
                    <p className="text-xs text-gray-400 mt-2">JPG ou PNG (max 2MB)</p>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Choisissez Votre Formule</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {plans.map((plan) => (
                    <div
                      key={plan.id}
                      onClick={() => setSelectedPlan(plan.id)}
                      className={`relative border-2 rounded-xl p-6 cursor-pointer transition-all hover:translate-y-1 ${
                        selectedPlan === plan.id
                          ? 'border-emerald-600 bg-emerald-50'
                          : 'border-gray-200 hover:border-emerald-300'
                      } ${plan.highlighted ? 'ring-2 ring-emerald-500 ring-offset-2' : ''}`}
                    >
                      {plan.highlighted && (
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-emerald-600 text-white text-xs font-semibold rounded-full">
                          Populaire
                        </span>
                      )}
                      <h4 className="text-lg font-bold text-gray-900">{plan.name}</h4>
                      <p className="text-sm text-gray-500 mt-1">{plan.description}</p>
                      <div className="mt-4 mb-6">
                        <span className="text-3xl font-bold text-emerald-600">{plan.price}</span>
                        <span className="text-gray-500">{plan.period}</span>
                      </div>
                      <ul className="space-y-2">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Paiement Sécurisé</h3>
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Récapitulatif</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Formule sélectionnée</span>
                      <span className="font-medium">{selectedPlan ? plans.find(p => p.id === selectedPlan)?.name : 'Adulte'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Montant</span>
                      <span className="font-medium">{selectedPlan ? plans.find(p => p.id === selectedPlan)?.price : '300'} DH</span>
                    </div>
                    <div className="border-t border-gray-200 pt-2 mt-2">
                      <div className="flex justify-between font-semibold text-lg">
                        <span>Total</span>
                        <span className="text-emerald-600">{selectedPlan ? plans.find(p => p.id === selectedPlan)?.price : '300'} DH</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-sm text-gray-600">Choisissez votre mode de paiement :</p>
                  <div className="grid grid-cols-2 gap-4">
                    <button className="p-4 border-2 border-gray-200 rounded-xl hover:border-emerald-500 transition-colors text-center">
                      <span className="block font-medium text-gray-900">Carte Bancaire</span>
                    </button>
                    <button className="p-4 border-2 border-gray-200 rounded-xl hover:border-emerald-500 transition-colors text-center">
                      <span className="block font-medium text-gray-900">PayPal</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
              <button
                onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                disabled={currentStep === 1}
                className="px-6 py-3 text-gray-600 font-medium hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Retour
              </button>
              <button
                onClick={() => setCurrentStep(Math.min(4, currentStep + 1))}
                className="inline-flex items-center gap-2 px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors"
              >
                {currentStep === 4 ? 'Confirmer le Paiement' : 'Continuer'}
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
