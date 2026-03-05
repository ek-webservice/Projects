import { Link } from 'react-router-dom';
import { GlassCard } from '../components/GlassCard';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

export function Pricing() {
  const pricingPlans = [
    {
      name: 'Starter',
      price: '1.499€',
      description: 'Perfekt für kleine Unternehmen und Startups',
      features: [
        'Bis zu 5 Seiten',
        'Responsive Design',
        'Basis SEO-Optimierung',
        'Kontaktformular',
        '3 Monate Support',
        'Google Analytics Integration',
      ],
      popular: false,
    },
    {
      name: 'Business',
      price: '2.999€',
      description: 'Ideal für wachsende Unternehmen',
      features: [
        'Bis zu 15 Seiten',
        'Premium Design',
        'Erweiterte SEO-Optimierung',
        'Content Management System',
        '6 Monate Support',
        'Google Analytics Integration',
        'Social Media Integration',
        'Newsletter-Funktion',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '5.999€',
      description: 'Für umfangreiche Projekte und E-Commerce',
      features: [
        'Unbegrenzte Seiten',
        'Custom Design & Features',
        'Vollständige SEO-Suite',
        'E-Commerce Funktionen',
        '12 Monate Support',
        'Alle Integrationen',
        'Mehrsprachigkeit',
        'Performance-Optimierung',
        'Schulung & Dokumentation',
      ],
      popular: false,
    },
    {
      name: 'Wartung',
      price: 'ab 99€',
      description: 'Monatliche Wartung & Updates',
      features: [
        'Regelmäßige Updates',
        'Sicherheits-Monitoring',
        'Performance-Checks',
        'Content-Aktualisierung',
        'Backup-Service',
        'Prioritäts-Support',
      ],
      popular: false,
      priceNote: 'pro Monat',
    },
  ];

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Transparente Preise
          </h1>
          <p className="text-xl text-black/70 max-w-3xl mx-auto">
            Faire und übersichtliche Preisgestaltung für Ihr Projekt.
            Alle Preise sind Startpreise und werden individuell an Ihre Anforderungen angepasst.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {pricingPlans.map((plan, index) => (
            <GlassCard
              key={index}
              className={`p-8 relative ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}
              hover
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full text-sm shadow-lg">
                    <Sparkles className="w-4 h-4" />
                    Beliebt
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  {plan.priceNote && (
                    <span className="text-black/60 text-sm">{plan.priceNote}</span>
                  )}
                </div>
                <p className="text-black/70 text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-black/80 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`block text-center px-6 py-3 rounded-full transition-all group ${
                  plan.popular
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl hover:shadow-blue-500/50'
                    : 'bg-white/80 hover:bg-white text-blue-600 border border-blue-200'
                }`}
              >
                <span className="flex items-center justify-center gap-2">
                  Kontaktieren
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </GlassCard>
          ))}
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <GlassCard className="p-6 text-center" hover>
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 mx-auto mb-4 flex items-center justify-center">
              <Check className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg mb-2">Keine versteckten Kosten</h3>
            <p className="text-black/70 text-sm">
              Alle Kosten werden transparent im Angebot aufgeführt
            </p>
          </GlassCard>

          <GlassCard className="p-6 text-center" hover>
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 mx-auto mb-4 flex items-center justify-center">
              <Check className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg mb-2">Flexible Zahlungsmodelle</h3>
            <p className="text-black/70 text-sm">
              Zahlung in Raten nach Projektfortschritt möglich
            </p>
          </GlassCard>

          <GlassCard className="p-6 text-center" hover>
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 mx-auto mb-4 flex items-center justify-center">
              <Check className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg mb-2">Individuelle Angebote</h3>
            <p className="text-black/70 text-sm">
              Maßgeschneiderte Pakete für Ihre spezifischen Anforderungen
            </p>
          </GlassCard>
        </div>

        {/* CTA Section */}
        <GlassCard className="p-12 text-center">
          <h2 className="text-3xl mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Nicht sicher, welches Paket passt?
          </h2>
          <p className="text-xl text-black/70 mb-8 max-w-2xl mx-auto">
            Kontaktieren Sie uns für eine kostenlose Beratung.
            Wir finden gemeinsam die perfekte Lösung für Ihr Projekt.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg transition-all shadow-lg hover:shadow-xl hover:shadow-blue-500/50 group"
          >
            Kostenlose Beratung anfordern
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </GlassCard>
      </div>
    </div>
  );
}
