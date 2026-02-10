import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';

const footerLinks = {
  'Le Club': [
    { label: 'À Propos', href: '#club' },
    { label: 'Notre Histoire', href: '#' },
    { label: 'L\'Équipe', href: '#' },
    { label: 'Nos Valeurs', href: '#' },
  ],
  'Services': [
    { label: 'Adhésion', href: '#adhesion' },
    { label: 'Cours d\'échecs', href: '#' },
    { label: 'Tournois', href: '#' },
    { label: 'Boutique', href: '#boutique' },
  ],
  'Ressources': [
    { label: 'Actualités', href: '#medias' },
    { label: 'Galerie Photos', href: '#' },
    { label: 'Règles du Jeu', href: '#' },
    { label: 'FAQ', href: '#' },
  ],
};

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                  <path d="M19 22H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3zM12 4a8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8 8 8 0 0 0-8-8zm0 2a6 6 0 0 1 6 6 6 6 0 0 1-6 6 6 6 0 0 1-6-6 6 6 0 0 1 6-6zm0 2a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4z"/>
                </svg>
              </div>
              <div>
                <span className="font-bold text-lg">AJBGE</span>
                <span className="block text-xs text-gray-400">Association Jeunesse Ben Guerir Échecs</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Promouvoir l&apos;excellence échiquéenne et développer l&apos;intelligence 
              stratégique à travers la communauté de Ben Guerir.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-emerald-500" />
                <span>Centre Culturel, Ben Guerir, Maroc</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-emerald-500" />
                <span>+212 5XX XXX XXX</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-emerald-500" />
                <span>contact@ajbge.ma</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-emerald-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 AJBGE - Association Jeunesse Ben Guerir Échecs. Tous droits réservés.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-emerald-600 hover:text-white transition-all hover:scale-110 active:scale-95"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-emerald-600 hover:text-white transition-all hover:scale-110 active:scale-95"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-emerald-600 hover:text-white transition-all hover:scale-110 active:scale-95"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
