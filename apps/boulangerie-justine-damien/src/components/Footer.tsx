import { Heart, MapPin, Clock, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-warm-brown text-cream py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Boulangerie Info */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-golden-light">
              Boulangerie Justine & Damien
            </h3>
            <p className="text-cream/80">
              Artisans boulangers passionnés depuis 2015, nous mettons notre savoir-faire 
              au service de produits authentiques et savoureux.
            </p>
            <div className="flex items-center gap-2">
              <Heart className="h-4 w-4 text-golden" />
              <span className="text-sm text-cream/70">Fait avec amour à La Loupe</span>
            </div>
          </div>

          {/* Contact rapide */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-golden-light">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-golden mt-1" />
                <div className="text-sm text-cream/80">
                  <p>3 rue de Chateaudun</p>
                  <p>28240 La Loupe</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-golden" />
                <span className="text-sm text-cream/80">02 37 XX XX XX</span>
              </div>
            </div>
          </div>

          {/* Horaires */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-golden-light">Horaires</h4>
            <div className="space-y-2 text-sm text-cream/80">
              <div className="flex justify-between">
                <span>Mar - Ven</span>
                <span>6h30 - 19h30</span>
              </div>
              <div className="flex justify-between">
                <span>Samedi</span>
                <span>6h30 - 19h30</span>
              </div>
              <div className="flex justify-between">
                <span>Dimanche</span>
                <span>7h00 - 13h00</span>
              </div>
              <div className="flex justify-between text-golden">
                <span>Lundi</span>
                <span>Fermé</span>
              </div>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-cream/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-cream/60">
              © 2024 Boulangerie Justine & Damien. Tous droits réservés.
            </p>
            <div className="flex items-center gap-4 text-sm text-cream/60">
              <span>Artisans depuis 2015</span>
              <span>•</span>
              <span>Produits frais quotidiens</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;