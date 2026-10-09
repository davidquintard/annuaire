import { MapPin, Phone, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-coccinelle-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-coccinelle-red rounded-full flex items-center justify-center">
                <span className="text-2xl">🐞</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Coccinelle</h3>
                <p className="text-white/70">Supérette</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed max-w-md">
              Votre supérette de proximité au cœur de La Loupe depuis plus de 15 ans. 
              Produits frais, service personnalisé et convivialité au quotidien.
            </p>
          </div>

          {/* Quick Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact rapide</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white/80">
                <Phone className="h-4 w-4" />
                <span className="text-sm">02 37 81 XX XX</span>
              </div>
              <div className="flex items-start gap-2 text-white/80">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  11 place de l'hôtel de ville<br />
                  28240 La Loupe
                </span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Clock className="h-4 w-4" />
                <span className="text-sm">Lun-Sam: 8h-19h30</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <div className="space-y-2">
              <a href="#accueil" className="block text-white/80 hover:text-white transition-smooth text-sm">
                Accueil
              </a>
              <a href="#about" className="block text-white/80 hover:text-white transition-smooth text-sm">
                À propos
              </a>
              <a href="#produits" className="block text-white/80 hover:text-white transition-smooth text-sm">
                Nos produits
              </a>
              <a href="#horaires" className="block text-white/80 hover:text-white transition-smooth text-sm">
                Horaires
              </a>
              <a href="#contact" className="block text-white/80 hover:text-white transition-smooth text-sm">
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2024 Supérette Coccinelle - La Loupe. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <span className="text-white/60">
                Fait avec ❤️ pour La Loupe
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;