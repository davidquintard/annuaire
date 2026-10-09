import { Car, MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                <Car className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Auto-École Loupéenne</span>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              Votre partenaire de confiance pour l'apprentissage de la conduite depuis 1985. 
              Formation de qualité et accompagnement personnalisé à La Loupe.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-background/80">8 rue de Châteaudun, 28240 La Loupe</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-background/80">02 37 XX XX XX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-background/80">contact@auto-ecole-loupeenne.fr</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nos Services</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>Permis B traditionnel</li>
              <li>Conduite accompagnée (AAC)</li>
              <li>Code de la route</li>
              <li>Perfectionnement conduite</li>
              <li>Cours particuliers</li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Horaires</h3>
            <div className="space-y-2 text-sm text-background/80">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent" />
                <span>Lun - Ven : 8h - 19h</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent" />
                <span>Samedi : 8h - 12h</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent" />
                <span>Dimanche : Fermé</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/60">
            © {currentYear} Auto-École Loupéenne. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm text-background/60">
            <a href="#" className="hover:text-accent transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-accent transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-accent transition-colors">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;