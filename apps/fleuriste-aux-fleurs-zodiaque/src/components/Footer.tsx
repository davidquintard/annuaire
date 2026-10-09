import { Heart, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-zodiac bg-clip-text text-transparent mb-4">
              Aux Fleurs du Zodiaque
            </h3>
            <p className="text-primary-foreground/80 mb-4">
              Votre artisan fleuriste à La Loupe depuis plus de 15 ans. 
              Créations florales uniques inspirées par la beauté de la nature et l'harmonie des astres.
            </p>
            <div className="flex items-center gap-2 text-accent">
              <Heart className="w-4 h-4" />
              <span className="text-sm">Fait avec passion à La Loupe</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-accent" />
                <span>1 rue du château, 28240 La Loupe</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent" />
                <span>02 37 81 XX XX</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent" />
                <span>contact@auxfleursduzodiaque.fr</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nos Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>• Mariages & Événements</li>
              <li>• Bouquets personnalisés</li>
              <li>• Décoration intérieure</li>
              <li>• Abonnements floraux</li>
              <li>• Ateliers créatifs</li>
              <li>• Événements corporate</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Aux Fleurs du Zodiaque. Tous droits réservés. 
            <span className="mx-2">•</span>
            Artisan fleuriste à La Loupe, Eure-et-Loir
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;