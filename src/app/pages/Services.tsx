import { Link } from 'react-router-dom';
import { GlassCard } from '../components/GlassCard';
import { Globe, RefreshCw, Settings, TrendingUp, ArrowRight, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Services() {
  const services = [
    {
      icon: Globe, title: 'Website Erstellung',
      description: 'Wir entwickeln maßgeschneiderte Websites von Grund auf - modern, responsiv und perfekt auf Ihre Bedürfnisse zugeschnitten. Von einfachen Landing Pages bis zu komplexen Web-Anwendungen.',
      features: ['Responsive Design', 'SEO-Optimierung', 'Content Management System', 'Mobile-First Ansatz'],
    },
    {
      icon: RefreshCw, title: 'Website Redesign',
      description: 'Ihre Website sieht veraltet aus oder erfüllt nicht mehr Ihre Anforderungen? Wir hauchen Ihrer bestehenden Website neues Leben ein mit modernem Design und verbesserter Funktionalität.',
      features: ['Moderne UI/UX', 'Performance-Optimierung', 'Conversion-Optimierung', 'Barrierefreiheit'],
    },
    {
      icon: Settings, title: 'Wartung & Updates',
      description: 'Technologie entwickelt sich ständig weiter. Wir sorgen dafür, dass Ihre Website immer auf dem neuesten Stand bleibt - sicher, schnell und zuverlässig.',
      features: ['Regelmäßige Updates', 'Sicherheits-Checks', 'Performance-Monitoring', 'Content-Pflege'],
    },
    {
      icon: TrendingUp, title: 'SEO Grundlagen',
      description: 'Damit Ihre Website auch gefunden wird, implementieren wir grundlegende SEO-Optimierungen. Von technischen Aspekten bis zu Content-Optimierung.',
      features: ['On-Page SEO', 'Meta-Tags Optimierung', 'Ladezeiten-Optimierung', 'Mobile Optimierung'],
    },
  ];
  const portfolioProjects = [
    {
      title: 'EK-Garage',
      description: 'Ein moderner Webauftritt für die EK-Garage mit Fokus auf ansprechendes Design und einfache Bedienung für Kunden.',
      tags: ['Modernes Design', 'Responsive Layout', 'Benutzerfreundlich'],
      image: '/ek_garage.png',
      link: 'https://garage.ek-webservice.com' // Deine neue Subdomain
    },
    {
      title: 'EK Coiffeur',
      description: 'Webseite für EK Coiffeur – stilvoll, modern und mobilfreundlich. Ideal, um Services, Öffnungszeiten und Kontaktmöglichkeiten einfach zu präsentieren.',
      tags: ['Modernes Design', 'Responsive Layout', 'Einfach zu navigieren'],
      image: '/ek_coiffeur.png',
      link: 'https://coiffeur.ek-webservice.com'
    },
  ];

  return (
      <div className="pt-24 min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          {/* Header */}
          <div className="text-center mb-12 md:mb-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent font-bold">
              Unsere Dienstleistungen
            </h1>
            <p className="text-lg md:text-xl text-black/70 max-w-3xl mx-auto">
              Von der Konzeption bis zur Wartung - wir bieten umfassende Webentwicklungs-Services
              für Ihr digitales Projekt.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                  <GlassCard key={index} className="p-6 md:p-8 flex flex-col h-full" hover>
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mb-4 md:mb-6">
                      <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">{service.title}</h3>
                    <p className="text-black/70 mb-4 md:mb-6 leading-relaxed flex-grow text-sm md:text-base">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-black/70 text-sm md:text-base">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                            {feature}
                          </li>
                      ))}
                    </ul>
                    <Link
                        to="/pricing"
                        className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 md:px-6 py-2.5 md:py-3 rounded-full transition-all group w-full sm:w-max mt-auto"
                    >
                      <span className="font-medium text-sm md:text-base">Preise ansehen</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </GlassCard>
              );
            })}
          </div>

          {/* Portfolio Section */}
          <div className="mb-16 md:mb-20">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl mb-3 md:mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent font-bold">
                Portfolio & Beispiele
              </h2>
              <p className="text-lg md:text-xl text-black/70">
                Einige unserer erfolgreichen Projekte
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {portfolioProjects.map((project, index) => (
                  <a
                      key={index}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full no-underline"
                  >
                    <GlassCard className="overflow-hidden group h-full flex flex-col cursor-pointer" hover>
                      <div className="aspect-video relative overflow-hidden">
                        <ImageWithFallback
                            src={project.image} alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <ExternalLink className="w-6 h-6 md:w-8 md:h-8 text-white" />
                        </div>
                      </div>
                      <div className="p-5 md:p-6 flex-grow flex flex-col">
                        <h3 className="text-lg md:text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-black/70 mb-4 text-sm md:text-base flex-grow">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, idx) => (
                              <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs md:text-sm font-medium">
                          {tag}
                        </span>
                          ))}
                        </div>
                      </div>
                    </GlassCard>
                  </a>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <GlassCard className="p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent font-bold">
              Bereit für Ihr Projekt?
            </h2>
            <p className="text-base md:text-xl text-black/70 mb-6 md:mb-8 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam Ihre Vision verwirklichen.
              Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch.
            </p>
            <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg transition-all shadow-lg hover:shadow-xl hover:shadow-blue-500/50 group w-full sm:w-auto"
            >
              Jetzt Kontakt aufnehmen
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </GlassCard>
        </div>
      </div>
  );
}