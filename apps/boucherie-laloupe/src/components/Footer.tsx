import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Facebook, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-butcher-brown text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-butcher-brown">B</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Boucherie Charcuterie</h3>
                <p className="text-primary-foreground/80">La Loupe</p>
              </div>
            </div>
            
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Depuis 1958, nous perpétuons l'art de la boucherie traditionnelle française 
              avec passion et savoir-faire, au service des gourmets de La Loupe et ses environs.
            </p>

            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-primary-foreground/80 hover:text-butcher-gold hover:bg-primary-foreground/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground/80 hover:text-butcher-gold hover:bg-primary-foreground/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground/80 hover:text-butcher-gold hover:bg-primary-foreground/10">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Informations pratiques */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-butcher-gold">Informations</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-butcher-gold mt-0.5 flex-shrink-0" />
                <address className="not-italic text-primary-foreground/80">
                  5 rue de Chateaudun<br />
                  28240 La Loupe
                </address>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-butcher-gold flex-shrink-0" />
                <a href="tel:+33237810000" className="text-primary-foreground/80 hover:text-butcher-gold transition-colors">
                  02 37 81 XX XX
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-butcher-gold mt-0.5 flex-shrink-0" />
                <div className="text-primary-foreground/80">
                  <div>Mar-Sam : 8h-12h30 | 15h-19h</div>
                  <div className="text-sm">Fermé dimanche et lundi</div>
                </div>
              </div>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-butcher-gold">Nos Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-butcher-gold transition-colors">
                  Viandes fraîches
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-butcher-gold transition-colors">
                  Charcuterie artisanale
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-butcher-gold transition-colors">
                  Plats préparés
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-butcher-gold transition-colors">
                  Commandes spéciales
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-butcher-gold transition-colors">
                  Livraison locale
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Boucherie Charcuterie La Loupe. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-primary-foreground/60 hover:text-butcher-gold text-sm transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-butcher-gold text-sm transition-colors">
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;