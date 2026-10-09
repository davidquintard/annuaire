const Footer = () => {
  return (
    <footer className="bg-coffee text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-4 text-gold">
              Café de Paris
            </h3>
            <p className="text-cream/80 mb-4">
              Bistrot traditionnel au cœur de La Loupe, 
              nous vous accueillons dans une ambiance chaleureuse 
              pour partager les saveurs authentiques de la France.
            </p>
          </div>
          
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4 text-gold">
              Informations
            </h4>
            <ul className="space-y-2 text-cream/80">
              <li>2 Place de l'Hôtel de Ville</li>
              <li>28240 La Loupe</li>
              <li>Tél: 02 37 81 XX XX</li>
              <li>contact@cafedeparis-laloupe.fr</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4 text-gold">
              Horaires
            </h4>
            <ul className="space-y-2 text-cream/80">
              <li>Lun-Ven: 7h00 - 19h00</li>
              <li>Samedi: 8h00 - 19h00</li>
              <li>Dimanche: 8h30 - 17h00</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-coffee-light/30 mt-8 pt-8 text-center">
          <p className="text-cream/60">
            © 2024 Café de Paris - La Loupe. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;