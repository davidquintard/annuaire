const Footer = () => {
  return (
    <footer className="bg-elegant-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-gold rounded-full"></div>
              <span className="text-xl font-bold text-gradient-gold">Coiffure Mixte</span>
            </div>
            <p className="text-elegant-white/70 leading-relaxed">
              Votre salon de coiffure de confiance à La Loupe. 
              Excellence, style et créativité depuis de nombreuses années.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-elegant-white mb-4">Contact</h4>
            <div className="space-y-2 text-elegant-white/70">
              <p>14 place de l'Hôtel de Ville</p>
              <p>28240 La Loupe</p>
              <p>Tél : 02 37 81 XX XX</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-elegant-white mb-4">Horaires</h4>
            <div className="space-y-2 text-elegant-white/70">
              <p>Mar - Ven : 9h00 - 18h00</p>
              <p>Samedi : 8h30 - 17h00</p>
              <p>Dim - Lun : Fermé</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-elegant-white/10 mt-8 pt-8 text-center">
          <p className="text-elegant-white/60">
            © 2024 Coiffure Mixte - Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;