import { FaLinkedin, FaFacebook, FaInstagram, FaGooglePlusG } from 'react-icons/fa';

 export default function Footer() {
  return (
    <footer className="bg-[#eaf4fc] text-[#2a9df4] py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Kurumsal */}
        <div>
          <h3 className="text-xl font-bold mb-4">Kurumsal</h3>
          <ul className="space-y-2 text-gray-700">
            <li>Hakkımızda</li>
            <li>Ar-Ge</li>
            <li>İnsan Kaynakları</li>
            <li>Sertifikalar</li>
          </ul>
        </div>

        {/* Ürünler */}
        <div>
          <h3 className="text-xl font-bold mb-4">Ürünler</h3>
          <ul className="space-y-2 text-gray-700">
            <li>Cilt Bakım</li>
            <li>Vücut Bakım</li>
            <li>Saç Bakım</li>
            <li>Kişisel Bakım</li>
            <li>Tıbbi Cihaz ve OTC</li>
          </ul>
        </div>

        {/* İletişim */}
        <div>
          <h3 className="text-xl font-bold mb-4">Bizimle İletişime Geçin</h3>
          <ul className="space-y-2 text-gray-700">
            <li><strong>Telefon:</strong> (0212) 485 25 37</li>
            <li><strong>Fax:</strong> (0212) 485 25 39</li>
            <li><strong>Mail:</strong> info@nurkkozmetik.com</li>
          </ul>

          {/* Social icons */}
          <div className="flex justify-center md:justify-start gap-4 mt-4 text-2xl text-[#2a9df4]">
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaGooglePlusG /></a>
            </div>
        </div>

      </div>
    </footer>
  );
}
