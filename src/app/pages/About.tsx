import { GlassCard } from '../components/GlassCard';
import { Mail, Linkedin } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function About() {
  const founders = [
    {
      name: 'Erik Müller',
      role: 'Frontend Developer & UI/UX Designer',
      image: 'https://images.unsplash.com/photo-1737575655055-e3967cbefd03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzI1ODc1Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description:
        'Mit über 8 Jahren Erfahrung im Bereich Frontend-Entwicklung und UI/UX-Design sorge ich dafür, dass Ihre Website nicht nur technisch einwandfrei, sondern auch visuell ansprechend und benutzerfreundlich ist. Meine Passion liegt in der Entwicklung moderner, responsiver Interfaces.',
      email: 'erik@ek-webservice.de',
    },
    {
      name: 'Katharina Schmidt',
      role: 'Backend Developer & Project Manager',
      image: 'https://images.unsplash.com/photo-1681887001651-a15c749c1ab0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzI2OTg2ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description:
        'Als Backend-Spezialistin und Projektmanagerin kümmere ich mich um die technische Infrastruktur und koordiniere alle Projektphasen. Mit 7 Jahren Erfahrung in der Webentwicklung stelle ich sicher, dass Ihre Website performant, sicher und skalierbar ist.',
      email: 'katharina@ek-webservice.de',
    },
  ];

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Über Uns
          </h1>
          <p className="text-xl text-black/70 max-w-3xl mx-auto">
            Wir sind ein junges, dynamisches Team aus leidenschaftlichen Entwicklern,
            die es lieben, innovative und hochwertige Weblösungen zu kreieren.
          </p>
        </div>

        {/* Mission Statement */}
        <GlassCard className="p-12 mb-20 max-w-4xl mx-auto">
          <h2 className="text-3xl mb-6 text-center bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
            Unsere Mission
          </h2>
          <p className="text-lg text-black/80 text-center leading-relaxed">
            Bei EK-Webservice verbinden wir technische Exzellenz mit kreativem Design.
            Unser Ziel ist es, Unternehmen jeder Größe dabei zu helfen, ihre digitale
            Präsenz zu optimieren und online erfolgreich zu sein. Wir glauben daran,
            dass eine großartige Website mehr ist als nur Code – sie ist das digitale
            Gesicht Ihres Unternehmens.
          </p>
        </GlassCard>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          {founders.map((founder, index) => (
            <GlassCard key={index} className="overflow-hidden" hover>
              <div className="aspect-[4/3] relative overflow-hidden">
                <ImageWithFallback
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl mb-2">{founder.name}</h3>
                <p className="text-blue-600 mb-4">{founder.role}</p>
                <p className="text-black/70 mb-6 leading-relaxed">{founder.description}</p>
                <div className="flex items-center gap-4">
                  <a
                    href={`mailto:${founder.email}`}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span className="text-sm">{founder.email}</span>
                  </a>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Qualität',
              description: 'Wir setzen auf höchste Qualitätsstandards in jedem Projekt',
            },
            {
              title: 'Innovation',
              description: 'Neueste Technologien und moderne Design-Trends',
            },
            {
              title: 'Partnerschaft',
              description: 'Langfristige, vertrauensvolle Kundenbeziehungen',
            },
          ].map((value, index) => (
            <GlassCard key={index} className="p-8 text-center" hover>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 mx-auto mb-4" />
              <h3 className="text-xl mb-3">{value.title}</h3>
              <p className="text-black/70">{value.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}
