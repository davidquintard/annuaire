import { MapPin, Phone, Clock, Coffee } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Coffee className="h-8 w-8 text-warm-gold" />
              <h3 className="text-2xl font-bold">Le Commerce</h3>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Votre bar tabac de proximité au cœur de La Loupe. 
              Depuis des années, nous vous accueillons dans une ambiance 
              chaleureuse et authentique.
            </p>
            <div className="text-sm text-primary-foreground/60">
              Bar • Tabac • Presse • Jeux • Services
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-warm-gold">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-warm-gold mt-0.5 flex-shrink-0" />
                <div className="text-sm text-primary-foreground/80">
                  <div>2 rue de Châteaudun</div>
                  <div>28240 La Loupe</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-warm-gold flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">02 37 81 XX XX</span>
              </div>
            </div>
          </div>

          {/* Horaires */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-warm-gold">Horaires</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-warm-gold flex-shrink-0" />
                <div>
                  <div>Lun-Sam: 7h-20h</div>
                  <div>Dim: 8h-13h</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/60">
              © 2024 Le Commerce - Bar Tabac La Loupe. Tous droits réservés.
            </div>
            <div className="flex space-x-6 text-sm text-primary-foreground/60">
              <span>Situé au cœur de La Loupe (28240)</span>
              <span>•</span>
              <span>Commerce de proximité</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;