'use client';
import { useState } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import "../../styles/wordings.css"; // Özel CSS dosyası

const center = {
  lat: 40.712776,
  lng: -74.005974,
};

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Formu gönderme işlemi (mail gönderme)
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Mesajınız başarıyla gönderildi!');
    } else {
      alert('Mesaj gönderilirken bir hata oluştu.');
    }
  };

  return (
    <div className="w-full bg-[#f0f4ff] text-[#333] p-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 ">
        {/* Google Maps Haritası */}
        <div style={{ width: '100%', height: '400px' }}>
          {isLoaded && (
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={15}
            >
              <Marker position={center} />
            </GoogleMap>
          )}
        </div>

        {/* İletişim Bilgileri ve Form */}
        <div className="flex justify-between mt-8">
          {/* Sol Taraf: İletişim Bilgileri */}
          <div className="w-full md:w-1/2">
            <h2 className="subtitle">İletişim Bilgileri</h2>
            <p className="mt-2">
              <strong className="headline">Adres:</strong> Örnek Cadde No:123, İstanbul, Türkiye
            </p>
            <p>
              <strong className="headline">Telefon:</strong> +90 123 456 7890
            </p>
            <p>
              <strong className="headline">E-posta:</strong> info@company.com
            </p>
          </div>

          {/* Sağ Taraf: Form */}
          <div className="w-full md:w-1/2">
            <h2 className="subtitle">Bize Ulaşın</h2>
            <form onSubmit={handleSubmit} className="mt-4">
              <div className="mb-4">
                <label htmlFor="name" className="headline">
                  Adınız
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="headline">
                  E-posta
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="headline">
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  rows={4}
                />
              </div>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
