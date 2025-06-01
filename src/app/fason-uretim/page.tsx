'use client';
import "../../styles/wordings.css"; // Özel CSS dosyası
const FasonUretim = () => {
    return (
        <div className="w-full bg-[#f0f4ff] text-[#333] p-8">
            <div className="container">
                <h1 className="title">Private Label ve Fason Üretim</h1>
                <a href="/private-label-urunler" className="link">
                    Private Label Ürünler Sayfasına Git →
                </a>

                <section className="section">
                    <h2 className="subtitle">Fason Üretim Faaliyetlerimiz</h2>
                    <p>
                        Firmamız Tıbbi Cihaz Bölümü ve Kozmetik bölümünde Private-Label (fason) üretim yapmaktadır. Sektörde uzun yıllar var olmanın getirdiği
                        bilgi ve tecrübe birikimi ile müşterilerimize en iyi kalite ve fiyatta ürünler üretmekteyiz.
                        Uzman ekibimizle birlikte her müşterimize özel proje, ürün ve formül geliştirme, ambalaj,
                        üretim ve yasalara uygunluk konusunda hizmet vermekteyiz.
                    </p>
                    <br />
                    <p>
                        Şirketimiz GMP, ISO 9001:2008, ISO 13485:2003 kalite sistemlerine uygun olarak üretim yapmaktadır.
                        Hammaddelerin üretime alınmasından ürünün tüketiciye sunulmasına kadar geçen süreç takip edilmekte bütün
                        test ve analizleri yapılarak yüksek kalitede ürün ve hizmet sunulmaktadır. Üretim yaptığımız firmalara ürün
                        bildirim işlemlerinde yardımcı olup, Ürün Bildirim Dosyası, Ürün Güvenlik Bilgi Formu hazırlanmasında destek veriyoruz.        </p>
                </section>

                <section className="section">
                    <h2 className="subtitle">Fason Üretim Hizmetlerimiz</h2>
                    <div className="service-list">
                        {[
                            { title: 'Market Araştırması', description: 'Ürünleriniz için pazar araştırması yapıyor, rakip ürünleri ve pazar paylarını raporluyoruz.' },
                            { title: 'Belirlenen Konsept Geliştirilmesi', description: 'Ürün konsepti geliştiriyor ve formülasyon çalışmaları yapıyoruz.' },
                            { title: 'Ürün Bildirim Dosyasının Hazırlanması', description: 'Gerekli yasal bildirim dosyalarını hazırlayıp takip ediyoruz.' },
                            { title: 'Ambalaj Tasarımı', description: 'Ambalaj ve etiket tasarımı hizmeti sunuyoruz.' },
                            { title: 'Ürün Testleri & Bakanlık Bildirimleri', description: 'Ürünler için test, analiz ve resmi bildirim süreçlerini yürütüyoruz.' },
                            { title: 'Üretim ve Sevkiyat', description: 'Ürünler GMP ve ISO kalite standartlarına uygun şekilde üretilip sevk edilir.' },
                        ].map((service, index) => (
                            <div key={index} className="service-item">
                                <h4>{service.title}</h4>
                                <p>{service.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="section">
                    <h2 className="subtitle">Fason Yapılan Ürünler</h2>
                    <div className="product-grid">
                        {[
                            "Şampuan", "Saç Kremi ve Maskeleri", "Saç Serumu", "Saç Spreyi", "Saç Boyası", "Saç Köpüğü",
                            "Sabun", "Banyo Köpüğü", "Banyo Tuzu", "Diş Jeli", "Cilt Krem ve Losyonları",
                            "Ayak Bakım Ürünleri", "Vücut Bakım Ürünleri", "Bebek Bakım Ürünleri", "El Dezenfektanı",
                            "Traş Köpüğü", "Traş Jeli", "Traş Balsamı", "Parfüm", "Oda Kokusu", "Maske",
                            "Losyonlar", "Oda Spreyi", "Deo Roll on", "Ayak Kokusuna Karşı Ürünler",
                            "Antibakteriyel Ürünler", "Çeşitli Saç Ürünleri", "Soğutucu Jeller"
                        ].map((product, index) => (
                            <div key={index} className="product-item">
                                {product}
                            </div>
                        ))}
                    </div>
                </section>
            </div>
           
        </div>
    );
};

export default FasonUretim;
