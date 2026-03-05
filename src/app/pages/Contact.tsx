import { GlassCard } from '../components/GlassCard';
import { Mail, Clock, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Vielen Dank für Ihre Nachricht! Wir melden uns in Kürze bei Ihnen.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
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
      content: 'info@ek-webservice.de',
      link: 'mailto:info@ek-webservice.de',
    },
    {
      icon: Phone,
      title: 'Telefon',
      content: '+49 (0) 123 456789',
      link: 'tel:+491234567890',
    },
    {
      icon: Clock,
      title: 'Öffnungszeiten',
      content: 'Mo-Fr: 9:00 - 18:00 Uhr',
      link: null,
    },
    {
      icon: MapPin,
      title: 'Standort',
      content: 'Berlin, Deutschland',
      link: null,
    },
  ];

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Kontakt
          </h1>
          <p className="text-xl text-black/70 max-w-3xl mx-auto">
            Haben Sie ein Projekt im Kopf? Wir freuen uns darauf, von Ihnen zu hören!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const content = info.link ? (
                <a
                  href={info.link}
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  {info.content}
                </a>
              ) : (
                <p className="text-black/80">{info.content}</p>
              );

              return (
                <GlassCard key={index} className="p-6" hover>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="mb-1">{info.title}</h3>
                      {content}
                    </div>
                  </div>
                </GlassCard>
              );
            })}

            <GlassCard className="p-6">
              <h3 className="mb-4">Folgen Sie uns</h3>
              <p className="text-black/70 text-sm mb-4">
                Bleiben Sie auf dem Laufenden über unsere neuesten Projekte und Technologien.
              </p>
              <div className="flex gap-3">
                {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-lg bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-white transition-colors"
                  >
                    {social[0].toUpperCase()}
                  </a>
                ))}
              </div>
            </GlassCard>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <GlassCard className="p-8">
              <h2 className="text-3xl mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Senden Sie uns eine Nachricht
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/60 border border-white/80 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                      placeholder="Ihr Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/60 border border-white/80 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                      placeholder="ihre@email.de"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block mb-2 text-sm">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/60 border border-white/80 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                      placeholder="+49 123 456789"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block mb-2 text-sm">
                      Betreff *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
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
                  <label htmlFor="message" className="block mb-2 text-sm">
                    Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl bg-white/60 border border-white/80 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                    placeholder="Erzählen Sie uns von Ihrem Projekt..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all shadow-lg hover:shadow-xl hover:shadow-blue-500/50 flex items-center justify-center gap-2 group"
                >
                  Nachricht senden
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </GlassCard>
          </div>
        </div>

        {/* Map Placeholder */}
        <GlassCard className="overflow-hidden">
          <div className="aspect-[21/9] bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <p className="text-xl text-black/70">Berlin, Deutschland</p>
              <p className="text-black/60 text-sm mt-2">Kartenintegration hier</p>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
