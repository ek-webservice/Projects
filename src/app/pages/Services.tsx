import { Link } from 'react-router-dom';
import { GlassCard } from '../components/GlassCard';
import {
  Globe,
  RefreshCw,
  Settings,
  TrendingUp,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Services() {
  const services = [
    {
      icon: Globe,
      title: 'Website Erstellung',
      description:
        'Wir entwickeln maßgeschneiderte Websites von Grund auf - modern, responsiv und perfekt auf Ihre Bedürfnisse zugeschnitten. Von einfachen Landing Pages bis zu komplexen Web-Anwendungen.',
      features: ['Responsive Design', 'SEO-Optimierung', 'Content Management System', 'Mobile-First Ansatz'],
    },
    {
      icon: RefreshCw,
      title: 'Website Redesign',
      description:
        'Ihre Website sieht veraltet aus oder erfüllt nicht mehr Ihre Anforderungen? Wir hauchen Ihrer bestehenden Website neues Leben ein mit modernem Design und verbesserter Funktionalität.',
      features: ['Moderne UI/UX', 'Performance-Optimierung', 'Conversion-Optimierung', 'Barrierefreiheit'],
    },
    {
      icon: Settings,
      title: 'Wartung & Updates',
      description:
        'Technologie entwickelt sich ständig weiter. Wir sorgen dafür, dass Ihre Website immer auf dem neuesten Stand bleibt - sicher, schnell und zuverlässig.',
      features: ['Regelmäßige Updates', 'Sicherheits-Checks', 'Performance-Monitoring', 'Content-Pflege'],
    },
    {
      icon: TrendingUp,
      title: 'SEO Grundlagen',
      description:
        'Damit Ihre Website auch gefunden wird, implementieren wir grundlegende SEO-Optimierungen. Von technischen Aspekten bis zu Content-Optimierung.',
      features: ['On-Page SEO', 'Meta-Tags Optimierung', 'Ladezeiten-Optimierung', 'Mobile Optimierung'],
    },
  ];

  const portfolioProjects = [
    {
      title: 'Modern E-Commerce Platform',
      description: 'Eine vollständige E-Commerce-Lösung mit Warenkorb, Zahlungsintegration und Admin-Panel',
      image: 'https://images.unsplash.com/photo-1687524690542-2659f268cde8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZXhhbXBsZXxlbnwxfHx8fDE3NzI3MDMwMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'TypeScript', 'Tailwind CSS'],
    },
    {
      title: 'Corporate Business Website',
      description: 'Professionelle Unternehmenswebsite mit CMS, Blog und Kontaktformular',
      image: 'https://images.unsplash.com/photo-1772037441147-5301691c4b57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWduJTIwbW9ja3VwfGVufDF8fHx8MTc3MjYzMjc1Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Next.js', 'CMS', 'SEO'],
    },
  ];

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Unsere Dienstleistungen
          </h1>
          <p className="text-xl text-black/70 max-w-3xl mx-auto">
            Von der Konzeption bis zur Wartung - wir bieten umfassende Webentwicklungs-Services
            für Ihr digitales Projekt.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <GlassCard key={index} className="p-8" hover>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl mb-4">{service.title}</h3>
                <p className="text-black/70 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-black/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/pricing"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-all group"
                >
                  Preise ansehen
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </GlassCard>
            );
          })}
        </div>

        {/* Portfolio Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Portfolio & Beispiele
            </h2>
            <p className="text-xl text-black/70">
              Einige unserer erfolgreichen Projekte
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioProjects.map((project, index) => (
              <GlassCard key={index} className="overflow-hidden group" hover>
                <div className="aspect-video relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ExternalLink className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-2">{project.title}</h3>
                  <p className="text-black/70 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <GlassCard className="p-12 text-center">
          <h2 className="text-3xl mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Bereit für Ihr Projekt?
          </h2>
          <p className="text-xl text-black/70 mb-8 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam Ihre Vision verwirklichen.
            Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg transition-all shadow-lg hover:shadow-xl hover:shadow-blue-500/50 group"
          >
            Jetzt Kontakt aufnehmen
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </GlassCard>
      </div>
    </div>
  );
}
