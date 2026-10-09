import { MapPin, Phone, Clock, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Les Halles de La Loupe</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Votre maraîcher de confiance au cœur de La Loupe. 
              Fruits et légumes frais, produits locaux et de saison.
            </p>
            <div className="flex items-center gap-2 text-accent">
              <Heart className="w-4 h-4" />
              <span className="text-sm">Depuis plus de 20 ans à votre service</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-sm">6 rue de Chateaudun<br />28240 La Loupe</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-sm">02 37 81 27 42</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-sm">contact@hallesloupe.fr</span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold mb-4">Horaires</h4>
            <div className="space-y-2 text-primary-foreground/80 text-sm">
              <div className="flex justify-between">
                <span>Mar - Sam</span>
                <span>8h - 19h</span>
              </div>
              <div className="flex justify-between">
                <span>Dimanche</span>
                <span>8h - 12h30</span>
              </div>
              <div className="flex justify-between">
                <span>Lundi</span>
                <span className="text-accent">Fermé</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Les Halles de La Loupe. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;