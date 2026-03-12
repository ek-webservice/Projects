import { Link } from 'react-router-dom';
import { GlassCard } from '../components/GlassCard';
import { Users, Briefcase, DollarSign, Mail, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Home() {
  const navigationCards = [
    {
      icon: Users,
      title: 'Über Uns',
      description: 'Lernen Sie unser Team kennen und erfahren Sie mehr über unsere Vision',
      link: '/about',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      icon: Briefcase,
      title: 'Dienstleistungen',
      description: 'Entdecken Sie unsere umfassenden Web-Entwicklungs-Services',
      link: '/services',
      gradient: 'from-blue-600 to-blue-700',
    },
    {
      icon: DollarSign,
      title: 'Preise',
      description: 'Transparente Preise für Ihre individuellen Anforderungen',
      link: '/pricing',
      gradient: 'from-blue-700 to-blue-800',
    },
    {
      icon: Mail,
      title: 'Kontakt',
      description: 'Nehmen Sie Kontakt mit uns auf - wir freuen uns auf Ihr Projekt',
      link: '/contact',
      gradient: 'from-blue-800 to-blue-900',
    },
  ];

  return (
      <div>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <ImageWithFallback
                src="https://images.unsplash.com/photo-1763568258535-fa1066506571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzI2NTA2Njh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Web Development Workspace"
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-blue-500/20 to-black/40" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-32 text-center mt-16 md:mt-0">
            <GlassCard className="p-6 md:p-12 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-7xl mb-6 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 bg-clip-text text-transparent font-bold">
                Professionelle Websites für dein Business
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-black/80 mb-8 max-w-2xl mx-auto">
                Wir entwickeln moderne, performante, benutzerfreundliche und günstige Websites,
                die Ihr Unternehmen digital erfolgreich machen.
              </p>
              <Link
                  to="/services"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg transition-all shadow-lg hover:shadow-xl hover:shadow-blue-500/50 group"
              >
                Unsere Dienstleistungen
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </GlassCard>
          </div>

          {/* Scroll Indicator - Hidden on very small screens to save space */}
          <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-white/50 rounded-full" />
            </div>
          </div>
        </section>

        {/* Service Navigation Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent font-bold">
                Entdecken Sie unsere Welt
              </h2>
              <p className="text-lg md:text-xl text-black/70 max-w-2xl mx-auto">
                Erfahren Sie mehr über EK-Webservice und wie wir Ihnen helfen können
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {navigationCards.map((card, index) => {
                const Icon = card.icon;
                return (
                    <Link key={index} to={card.link}>
                      <GlassCard hover className="p-6 md:p-8 h-full flex flex-col">
                        <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-6`}>
                          <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                        <p className="text-black/70 mb-4 flex-grow">{card.description}</p>
                        <div className="flex items-center gap-2 text-blue-600 group">
                          <span className="text-sm font-medium">Mehr erfahren</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </GlassCard>
                    </Link>
                );
              })}
            </div>
          </div>
        </section>
      </div>
  );
}