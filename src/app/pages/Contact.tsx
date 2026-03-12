import { GlassCard } from '../components/GlassCard';
import { Mail, Clock, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Instagram } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = 'service_5nxhlyg';
    const publicKey = '0yrB9Zydld6zWrsRY';

    const templateIDCustomer = 'template_6sjduph';
    const templateIDAdmin = 'template_b9h7qz8';

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      title: formData.subject,
      message: formData.message,
    };

    const sendToAdmin = emailjs.send(serviceID, templateIDAdmin, templateParams, publicKey);
    const sendToCustomer = emailjs.send(serviceID, templateIDCustomer, templateParams, publicKey);

    Promise.all([sendToAdmin, sendToCustomer])
        .then((responses) => {
          console.log('SUCCESS!', responses);
          alert('Vielen Dank! Wir haben Ihre Nachricht erhalten und Ihnen eine Bestätigung per E-Mail gesendet.');
          setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
          setIsSubmitting(false);
        })
        .catch((err) => {
          console.error('FAILED...', err);
          alert('Da ist etwas schiefgelaufen. Bitte senden Sie uns direkt eine Mail an info@ek-webservice.com');
          setIsSubmitting(false);
        });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'info@ek-webservice.com',
      link: 'mailto:info@ek-webservice.com',
    },
    {
      icon: Phone,
      title: 'Telefon',
      // Hier sind nun beide Nummern einzeln definiert
      phones: [
        { label: '+41 76 687 40 79', link: 'tel:+41766874079' },
        { label: '+41 79 966 42 31', link: 'tel:+41799664231' },
      ],
    },
    {
      icon: Clock,
      title: 'Öffnungszeiten',
      content: (
          <>
            Mo-Fr: 16:30 - 21:00 Uhr<br />
            Sa-So: 14:00 - 21:00 Uhr
          </>
          ),
      link: null,
    },
    {
      icon: MapPin,
      title: 'Standort',
      content: 'Bern, Schweiz',
      link: null,
    },
  ];

  return (
      <div className="pt-24 min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          <div className="text-center mb-12 md:mb-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent font-bold">
              Kontakt
            </h1>
            <p className="text-lg md:text-xl text-black/70 max-w-3xl mx-auto">
              Haben Sie ein Projekt im Kopf? Wir freuen uns darauf, von Ihnen zu hören!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-1 space-y-4 md:space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                    <GlassCard key={index} className="p-4 md:p-6" hover>
                      <div className="flex items-start gap-3 md:gap-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </div>
                        <div className="flex-1 overflow-hidden">
                          <h3 className="font-semibold mb-1">{info.title}</h3>
                          <div className="text-sm md:text-base flex flex-col">
                            {/* Logik für mehrere Telefonnummern */}
                            {info.phones ? (
                                info.phones.map((phone, pIndex) => (
                                    <a
                                        key={pIndex}
                                        href={phone.link}
                                        className="text-blue-600 hover:text-blue-700 transition-colors"
                                    >
                                      {phone.label}
                                    </a>
                                ))
                            ) : info.link ? (
                                <a href={info.link} className="text-blue-600 hover:text-blue-700 transition-colors break-words">
                                  {info.content}
                                </a>
                            ) : (
                                <p className="text-black/80">{info.content}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                );
              })}

              <GlassCard className="p-4 md:p-6">
                <h3 className="font-semibold mb-3">Folgen Sie uns</h3>
                <div className="flex gap-3">
                  <a href="#" className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-white transition-colors">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-white transition-colors">
                    <FaTiktok className="w-4 h-4" />
                  </a>
                </div>
              </GlassCard>
            </div>

            <div className="lg:col-span-2">
              <GlassCard className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent font-bold">
                  Senden Sie uns eine Nachricht
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label htmlFor="name" className="block mb-2 text-sm font-medium">Name *</label>
                      <input
                          type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                          className="w-full px-4 py-3 rounded-xl bg-white/60 border border-white/80 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                          placeholder="Ihr Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium">Email *</label>
                      <input
                          type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                          className="w-full px-4 py-3 rounded-xl bg-white/60 border border-white/80 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                          placeholder="ihre@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label htmlFor="phone" className="block mb-2 text-sm font-medium">Telefon</label>
                      <input
                          type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-white/60 border border-white/80 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                          placeholder="+41 70 123 45 67"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block mb-2 text-sm font-medium">Betreff *</label>
                      <select
                          id="subject" name="subject" value={formData.subject} onChange={handleChange} required
                          className="w-full px-4 py-3 rounded-xl bg-white/60 border border-white/80 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                      >
                        <option value="">Bitte wählen...</option>
                        <option value="website">Neue Website</option>
                        <option value="redesign">Website Redesign</option>
                        <option value="maintenance">Wartung & Support</option>
                        <option value="other">Sonstiges</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium">Nachricht *</label>
                    <textarea
                        id="message" name="message" value={formData.message} onChange={handleChange} required rows={5}
                        className="w-full px-4 py-3 rounded-xl bg-white/60 border border-white/80 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                        placeholder="Erzählen Sie uns von Ihrem Projekt..."
                    />
                  </div>

                  <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto px-8 py-3 md:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all shadow-lg hover:shadow-xl hover:shadow-blue-500/50 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
                    {!isSubmitting && <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                  </button>
                </form>
              </GlassCard>
            </div>
          </div>

          <div className="flex lg:justify-end mt-12">
            <GlassCard className="overflow-hidden w-full lg:w-full">
              <div className="w-full h-64 md:h-96 lg:h-[500px]">
                <iframe
                    title="EK-Webservice Standort"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43583.5658603681!2d7.404207914041007!3d46.94792222339599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e39c0d45f0967%3A0x180f68153403a45c!2sBern%2C%20Schweiz!5e0!3m2!1sde!2sde!4v1710000000000!5m2!1sde!2sde"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
  );
}