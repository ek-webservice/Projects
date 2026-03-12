import { Link } from 'react-router-dom';
import { GlassCard } from '../components/GlassCard';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

export function Pricing() {
  const pricingPlans = [
    {
      name: 'Starter', price: '449 CHF*', description: 'Perfekt für kleine Unternehmen und Startups', popular: false,
      features: ['Bis zu 5 Seiten', 'Responsive Design', 'Basic Design', 'Basis SEO-Optimierung', 'Kontaktformular', '3 Monate Support'],
    },
    {
      name: 'Business', price: '999 CHF*', description: 'Ideal für wachsende Unternehmen', popular: true,
      features: ['Bis zu 10 Seiten', 'Premium Design', 'Erweiterte SEO-Optimierung', 'Responsive Design', '6 Monate Support', 'Social Media Integration', 'Mehrsprachigkeit'],
    },
    {
      name: 'Individuell', price: 'ab 120 CHF*', description: 'Für kleine und grosse Wunschideen', popular: false,
      features: ['Landing Pages', 'Design Anpassungen', 'Neue Website', 'Kleine Updates', 'Individuelle Funktionen', 'Wunschanforderugnen'],
    },
    {
      name: 'Wartung', price: 'ab 79 CHF', description: 'Monatliche Wartung & Updates', popular: false, priceNote: 'pro Monat',
      features: ['Sicherheitsupdates', 'Ladezeit Optimierung', 'Performance-Checks', 'Kleine Wunschänderungen', 'Prioritäts-Support'],
    },
  ];

  return (
      <div className="pt-24 min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          {/* Header */}
          <div className="text-center mb-12 md:mb-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent font-bold">
              Transparente Preise
            </h1>
            <p className="text-lg md:text-xl text-black/70 max-w-3xl mx-auto">
              Faire und übersichtliche Preisgestaltung für Ihr Projekt.
              Alle Preise sind Startpreise und werden individuell an Ihre Anforderungen angepasst.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-20">
            {pricingPlans.map((plan, index) => (
                <GlassCard key={index}
                           className={`p-6 md:p-8 relative flex flex-col h-full ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}
                           hover>
                  {plan.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <div
                            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-1.5 rounded-full text-xs md:text-sm shadow-lg whitespace-nowrap">
                          <Sparkles className="w-3 h-3 md:w-4 md:h-4"/>
                          Beliebt
                        </div>
                      </div>
                  )}

                  {/* Price & Description */}
                  <div className="mb-6">
                    <h3 className="text-xl md:text-2xl font-semibold mb-2">{plan.name}</h3>

                    <div className="flex items-baseline gap-2 mb-2 flex-wrap">
                  <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                      {plan.priceNote && (
                          <span className="text-black/60 text-xs md:text-sm whitespace-nowrap">{plan.priceNote}</span>
                      )}
                    </div>

                    <p className="text-black/70 text-sm">{plan.description}</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="w-4 h-4 md:w-5 md:h-5 text-blue-600 flex-shrink-0 mt-0.5"/>
                          <span className="text-black/80 text-sm">{feature}</span>
                        </li>
                    ))}
                  </ul>

                  {/* Contact Button */}
                  <Link
                      to="/contact"
                      className={`block w-full text-center px-6 py-3 rounded-full transition-all group mt-auto ${
                          plan.popular
                              ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl hover:shadow-blue-500/50'
                              : 'bg-white/80 hover:bg-white text-blue-600 border border-blue-200'
                      }`}
                  >
                <span className="flex items-center justify-center gap-2 text-sm md:text-base font-medium">
                  Kontaktieren
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
                </span>
                  </Link>
                </GlassCard>
            ))}
          </div>

          {/* Hinweis zwischen Additional Info und CTA */}
          <div className="text-left mb-8">
  <span className="text-base md:text-lg text-gray-500 font-medium">
    *: Exklusive Hosting-Kosten
  </span>
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            <GlassCard className="p-6 text-center h-full" hover>
              <div
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 mx-auto mb-4 flex items-center justify-center">
                <Check className="w-5 h-5 md:w-6 md:h-6 text-white"/>
              </div>
              <h3 className="text-base md:text-lg font-semibold mb-2">Keine versteckten Kosten</h3>
              <p className="text-black/70 text-sm">Alle Kosten werden transparent im Angebot aufgeführt</p>
            </GlassCard>
            <GlassCard className="p-6 text-center h-full" hover>
              <div
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 mx-auto mb-4 flex items-center justify-center">
                <Check className="w-5 h-5 md:w-6 md:h-6 text-white"/>
              </div>
              <h3 className="text-base md:text-lg font-semibold mb-2">Flexible Zahlungsmodelle</h3>
              <p className="text-black/70 text-sm">Zahlung in Raten nach Projektfortschritt möglich</p>
            </GlassCard>
            <GlassCard className="p-6 text-center h-full sm:col-span-2 md:col-span-1" hover>
              <div
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 mx-auto mb-4 flex items-center justify-center">
                <Check className="w-5 h-5 md:w-6 md:h-6 text-white"/>
              </div>
              <h3 className="text-base md:text-lg font-semibold mb-2">Individuelle Angebote</h3>
              <p className="text-black/70 text-sm">Maßgeschneiderte Pakete für Ihre spezifischen Anforderungen</p>
            </GlassCard>
          </div>

          {/* CTA Section */}
          <GlassCard className="p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent font-bold">
              Nicht sicher, welches Paket passt?
            </h2>
            <p className="text-base md:text-xl text-black/70 mb-6 md:mb-8 max-w-2xl mx-auto">
              Kontaktieren Sie uns für eine kostenlose Beratung.
              Wir finden gemeinsam die perfekte Lösung für Ihr Projekt.
            </p>
            <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg transition-all shadow-lg hover:shadow-xl hover:shadow-blue-500/50 group w-full sm:w-auto"
            >
              Kostenlose Beratung anfordern
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
            </Link>
          </GlassCard>
        </div>
      </div>
  );
}