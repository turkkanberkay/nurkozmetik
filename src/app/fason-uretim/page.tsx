'use client';

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
            <style jsx>{`
        .container {
          background: #f0f4ff;
          color: #333;
          margin: auto;
          padding: 2rem;
        }
        .title {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
          color: #0056b3;

        }
        .link {
          display: inline-block;
          margin-bottom: 2rem;
          color: #0070f3;
          text-decoration: underline;
        }
        .section {
          margin-bottom: 3rem;
        }
        .subtitle {
          font-size: 1.8rem;
          margin-bottom: 1rem;
          color: #0056b3;
        }
        .service-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }
        .service-item h4 {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
        }
        .service-item p {
          font-size: 1rem;
          color: #666;
        }
        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1rem;
        }
        .product-item {
          background: #f8f8f8;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          text-align: center;
          font-size: 0.95rem;
        }
      `}</style>
        </div>
    );
};

export default FasonUretim;
