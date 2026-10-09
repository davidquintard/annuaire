import { MapPin, Phone, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-hero text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-red mb-4">Samsoum Coiff</h3>
            <p className="text-gray-300 leading-relaxed">
              L'art de la coiffure masculine dans un cadre d'exception. 
              Découvrez l'élégance et le savoir-faire français au cœur de La Loupe.
            </p>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-red">Informations</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 text-red mr-3 flex-shrink-0" />
                <span>3 rue Paul Éluard, 28240 La Loupe</span>
              </div>
              
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 text-red mr-3 flex-shrink-0" />
                <a href="tel:0237810000" className="hover:text-red transition-colors">
                  02 37 81 00 00
                </a>
              </div>
              
              <div className="flex items-center text-gray-300">
                <Clock className="w-5 h-5 text-red mr-3 flex-shrink-0" />
                <span>Lun-Ven: 9h-19h, Sam: 9h-18h</span>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-red">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• Coupe Classique</li>
              <li>• Taille de Barbe</li>
              <li>• Forfait Premium</li>
              <li>• Soins du Visage</li>
              <li>• Conseils Styling</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-red/20 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Samsoum Coiff. Tous droits réservés. | 
            <span className="text-red"> Barbier traditionnel à La Loupe</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;