const Footer = () => {
  return (
    <footer className="bg-rich-brown text-warm-cream py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-bold text-italian-red mb-4">Pizza Napoli</h3>
            <p className="text-warm-cream/80 leading-relaxed">
              L'authenticité napolitaine au cœur de La Loupe depuis 2015. 
              Venez découvrir nos pizzas artisanales cuites au feu de bois.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-italian-red">Contact</h4>
            <div className="space-y-2 text-warm-cream/80">
              <p>11 rue du château</p>
              <p>28240 La Loupe</p>
              <p>02 37 81 XX XX</p>
              <p>contact@pizzanapoli-laloupe.fr</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-italian-red">Horaires</h4>
            <div className="space-y-2 text-warm-cream/80">
              <p>Mardi - Samedi: 18h - 22h</p>
              <p>Dimanche: 18h - 21h30</p>
              <p>Lundi: Fermé</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-warm-cream/20 mt-8 pt-8 text-center">
          <p className="text-warm-cream/60">
            © 2024 Pizza Napoli La Loupe. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;