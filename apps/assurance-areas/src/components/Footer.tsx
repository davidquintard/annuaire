import { MapPin, Phone, Mail, Clock, Facebook, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-xl">A</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">AREAS</h3>
                <p className="text-primary-foreground/80">Assurance & Conseils</p>
              </div>
            </div>
            
            <p className="text-primary-foreground/90 mb-6 leading-relaxed">
              Votre agence d'assurance de confiance à La Loupe. Nous vous accompagnons 
              depuis plus de 15 ans dans la protection de vos biens les plus précieux.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0" />
                <span>11 rue du Château, 28240 La Loupe</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <span>02 37 81 XX XX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <span>contact@areas-assurance.fr</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Nos Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Assurance Auto
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Assurance Habitation
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Assurance Santé
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Assurance Pro
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Gestion Sinistres
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Horaires & Liens</h4>
            
            <div className="mb-6">
              <div className="flex items-start space-x-3 mb-3">
                <Clock className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div className="text-sm text-primary-foreground/80">
                  <p>Lun - Ven: 9h - 12h30 / 14h - 18h</p>
                  <p>Sam: 9h - 12h</p>
                  <p>Dim: Fermé</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <a href="#" className="block text-primary-foreground/80 hover:text-secondary transition-colors">
                Mentions légales
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-secondary transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-secondary transition-colors">
                CGV
              </a>
            </div>

            {/* Social Media */}
            <div className="flex items-center space-x-4 mt-6">
              <a href="#" className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/80 text-sm">
              © 2024 AREAS Assurance. Tous droits réservés.
            </p>
            <p className="text-primary-foreground/60 text-xs mt-2 md:mt-0">
              ORIAS n° XXXXXXXX • Membre de la FFA • Contrôlé par l'ACPR
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;