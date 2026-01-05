import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Printer, FileText, Image, Palette, Clock, MapPin, Phone, Mail } from 'lucide-react';

const Home = () => {
  const logoUrl = 'https://customer-assets.emergentagent.com/job_print-solutions-67/artifacts/v98et4rd_logo%20percetakan%202025.png';
  
  const services = [
    {
      icon: <Printer className="w-12 h-12" />,
      title: 'Cetak Banner & Spanduk',
      description: 'Banner & spanduk berkualitas tinggi dengan warna cerah dan tahan lama untuk promosi bisnis Anda'
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: 'Cetak Undangan',
      description: 'Undangan elegan dan mewah untuk berbagai acara spesial Anda dengan desain yang dapat disesuaikan'
    },
    {
      icon: <Image className="w-12 h-12" />,
      title: 'Cetak Dokumen',
      description: 'Layanan cetak dokumen cepat dan profesional untuk kebutuhan kantor, sekolah, dan bisnis'
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: 'Desain Grafis',
      description: 'Jasa desain grafis profesional untuk logo, brosur, poster, dan kebutuhan branding Anda'
    }
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400',
    'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400',
    'https://images.unsplash.com/photo-1612178537253-bccd437b730e?w=400',
    'https://images.unsplash.com/photo-1626785774625-0b1c2c4eab67?w=400',
    'https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?w=400'
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = '6282129960218';
    const message = 'Halo, saya ingin pesan cetak untuk...';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <img src={logoUrl} alt="Inkcause Digital Printing" className="h-12 w-auto" />
          <Button 
            onClick={handleWhatsAppClick}
            className="bg-cyan-600 hover:bg-cyan-700 transition-all duration-300"
          >
            <Phone className="w-4 h-4 mr-2" />
            Hubungi Kami
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto text-center">
          <img 
            src={logoUrl} 
            alt="Inkcause Digital Printing" 
            className="h-32 w-auto mx-auto mb-8 animate-fadeIn"
          />
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
            Solusi Cetak Berkualitas & Terpercaya
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto">
            Wujudkan kebutuhan percetakan Anda dengan hasil berkualitas tinggi, 
            layanan profesional, dan harga yang kompetitif
          </p>
          <Button 
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-cyan-600 hover:bg-cyan-700 text-lg px-8 py-6 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Phone className="w-5 h-5 mr-2" />
            Pesan via WhatsApp
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-6 text-slate-900">Tentang Kami</h2>
          <div className="h-1 w-24 bg-cyan-600 mx-auto mb-10"></div>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            <strong>Inkcause Digital Printing</strong> adalah mitra terpercaya Anda dalam solusi percetakan digital berkualitas tinggi. 
            Dengan pengalaman dan dedikasi dalam industri percetakan, kami berkomitmen menghadirkan hasil cetak 
            yang memukau untuk setiap kebutuhan bisnis dan personal Anda.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Kami menggunakan teknologi cetak terkini dan material berkualitas premium untuk memastikan setiap 
            produk yang kami hasilkan memiliki warna yang tajam, detail yang presisi, dan ketahanan yang optimal. 
            Tim profesional kami siap membantu mewujudkan visi kreatif Anda menjadi kenyataan.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Kepuasan pelanggan adalah prioritas utama kami. Kami menjamin ketepatan waktu pengerjaan, 
            konsultasi gratis, dan pelayanan ramah yang membuat pengalaman mencetak Anda menjadi mudah dan menyenangkan.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6 text-slate-900">Layanan Kami</h2>
          <div className="h-1 w-24 bg-magenta-600 mx-auto mb-16"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="border-2 border-slate-200 hover:border-cyan-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-white"
              >
                <CardHeader>
                  <div className="text-cyan-600 mb-4 flex justify-center">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-center text-slate-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-slate-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6 text-slate-900">Galeri Hasil Cetak</h2>
          <div className="h-1 w-24 bg-yellow-500 mx-auto mb-16"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
              >
                <img 
                  src={image} 
                  alt={`Hasil cetak ${index + 1}`} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-semibold">
                    Lihat Detail
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours & Location Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Operating Hours */}
            <div>
              <div className="flex items-center mb-6">
                <Clock className="w-8 h-8 text-cyan-600 mr-3" />
                <h3 className="text-3xl font-bold text-slate-900">Jam Operasional</h3>
              </div>
              <Card className="border-2 border-slate-200">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-slate-700">Setiap Hari</span>
                      <span className="text-lg text-cyan-600 font-bold">09.00 - 21.00 WIB</span>
                    </div>
                    <div className="pt-4 border-t border-slate-200">
                      <p className="text-slate-600">
                        Kami buka setiap hari untuk melayani kebutuhan cetak Anda dengan konsultasi gratis
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Location */}
            <div>
              <div className="flex items-center mb-6">
                <MapPin className="w-8 h-8 text-cyan-600 mr-3" />
                <h3 className="text-3xl font-bold text-slate-900">Lokasi Kami</h3>
              </div>
              <Card className="border-2 border-slate-200">
                <CardContent className="pt-6">
                  <p className="text-lg text-slate-700 mb-4">
                    Dusun Manis No.28, RT.20/RW.06, Sangkanhurip,<br />
                    Kec. Cigandamekar, Kabupaten Kuningan,<br />
                    Jawa Barat 45556
                  </p>
                  <a 
                    href="https://maps.app.goo.gl/nEYxn8wFcsmuhffu5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button variant="outline" className="border-cyan-600 text-cyan-600 hover:bg-cyan-50">
                      <MapPin className="w-4 h-4 mr-2" />
                      Buka Google Maps
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map Embed */}
          <div className="mt-12 rounded-lg overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.123456789!2d108.4567!3d-6.9876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTknMTUuNCJTIDEwOMKwMjcnMjQuMSJF!5e0!3m2!1sid!2sid!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Inkcause Digital Printing"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-cyan-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Siap Mewujudkan Kebutuhan Cetak Anda?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Hubungi kami sekarang untuk konsultasi gratis dan dapatkan penawaran terbaik untuk proyek Anda
          </p>
          <Button 
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-white text-cyan-600 hover:bg-slate-100 text-lg px-10 py-6 transition-all duration-300 hover:scale-105 shadow-xl"
          >
            <Phone className="w-5 h-5 mr-2" />
            Konsultasi & Order Sekarang
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img src={logoUrl} alt="Inkcause" className="h-16 w-auto mb-4 brightness-0 invert" />
              <p className="text-slate-400">
                Solusi percetakan digital profesional untuk kebutuhan bisnis dan personal Anda
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Kontak</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-cyan-400" />
                  <span className="text-slate-300">0821-2996-0218</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-2 text-cyan-400 mt-1" />
                  <span className="text-slate-300">
                    Dusun Manis No.28, Sangkanhurip,<br />
                    Kec. Cigandamekar, Kab. Kuningan,<br />
                    Jawa Barat 45556
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Jam Operasional</h4>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-cyan-400" />
                <div>
                  <p className="text-slate-300">Setiap Hari</p>
                  <p className="text-cyan-400 font-semibold">09.00 - 21.00 WIB</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-6 text-center">
            <p className="text-slate-400">
              &copy; {new Date().getFullYear()} Inkcause Digital Printing. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 z-50 animate-bounce"
        aria-label="WhatsApp"
      >
        <Phone className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Home;