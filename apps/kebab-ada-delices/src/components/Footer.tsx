const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Ada Délices
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Votre restaurant de kebab authentique au cœur de La Loupe. 
              Des saveurs orientales traditionnelles préparées avec passion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens Rapides</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#accueil" className="hover:text-secondary transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-secondary transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#a-propos" className="hover:text-secondary transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-secondary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>📍 3 rue du Château</p>
              <p>28240 La Loupe</p>
              <p>📞 02 37 XX XX XX</p>
              <p>🕒 Lun-Sam: 11h30-14h30, 17h30-22h30</p>
              <p>Dimanche: 18h00-22h00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Ada Délices. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;