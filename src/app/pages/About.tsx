import { GlassCard } from '../components/GlassCard';
import { Mail, Linkedin } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import erblinImg from '../images/erblin.jpg';
import kavisanImg from '../images/kavisan.jpg';

export function About() {
  const founders = [
    {
      name: 'Erblin Guri',
      role: 'Fullstack Developer & CEO',
      image: erblinImg,
      description:
          'Mit Fokus auf Frontend-Entwicklung und UI/UX-Design gestalte ich Websites, die technisch zuverlässig und zugleich benutzerfreundlich sind. Kreativität und Liebe zum Detail treiben mich an, moderne und responsive Interfaces zu entwickeln, die Freude beim Nutzer erzeugen.',
      email: 'erblin.guri@ek-webservice.com',
      linkedin: 'https://linkedin.com/in/erblin-guri-6592813b5',
    },
    {
      name: 'Kavisan Krishnamoorthy',
      role: 'Fullstack Developer & CEO',
      image: kavisanImg,
      description:
          'Als Fullstack Developer und Applikationsentwickler im 2. Lehrjahr arbeite ich sowohl im Frontend als auch im Backend. Ich kombiniere technisches Know-how mit Kreativität, um moderne Websites zu entwickeln, die sowohl performant als auch optisch ansprechend sind',
      email: 'kavisan.krishnamoorthy@ek-webservice.com',
      linkedin: 'https://linkedin.com/in/kavisan-krishnamoorthy-43827b3b5',
    },
  ];

  return (
      <div className="pt-24 min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          {/* Header */}
          <div className="text-center mb-12 md:mb-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent font-bold">
              Über Uns
            </h1>
            <p className="text-lg md:text-xl text-black/70 max-w-3xl mx-auto px-2">
              Wir sind ein junges, dynamisches Team aus leidenschaftlichen Entwicklern,
              die es lieben, innovative und hochwertige Weblösungen zu kreieren.
            </p>
          </div>

          {/* Mission Statement */}
          <GlassCard className="p-6 md:p-12 mb-16 md:mb-20 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl mb-4 md:mb-6 text-center bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent font-bold">
              Unsere Mission
            </h2>
            <p className="text-base md:text-lg text-black/80 text-center leading-relaxed">
              Bei EK-Webservice verbinden wir technische Exzellenz mit kreativem Design.
              Unser Ziel ist es, Unternehmen jeder Größe dabei zu helfen, ihre digitale
              Präsenz zu optimieren und online erfolgreich zu sein. Wir glauben daran,
              dass eine großartige Website mehr ist als nur Code – sie ist das digitale
              Gesicht Ihres Unternehmens.
            </p>
          </GlassCard>

          {/* Team Members */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 mb-16 md:mb-20">
            {founders.map((founder, index) => (
                <GlassCard key={index} className="overflow-hidden flex flex-col" hover>
                  <div className="aspect-square md:aspect-[4/3] relative overflow-hidden">
                    <ImageWithFallback
                        src={founder.image}
                        alt={founder.name}
                        className={`w-full h-full object-cover transition-transform duration-300 ${
                            founder.name === 'Erblin Guri'
                                ? 'object-[center_10%] scale-[1]'
                                : 'object-[center_35%] scale-[1]'
                        }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
                  </div>
                  <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold mb-2">{founder.name}</h3>
                      <p className="text-blue-600 font-medium mb-4">{founder.role}</p>
                      <p className="text-black/70 mb-6 leading-relaxed text-sm md:text-base">{founder.description}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-4">
                      <a
                          href={`mailto:${founder.email}`}
                          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        <Mail className="w-5 h-5"/>
                        <span className="text-sm break-all">{founder.email}</span>
                      </a>
                      <a
                          href={founder.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        <Linkedin className="w-5 h-5"/>
                      </a>
                    </div>
                  </div>
                </GlassCard>
            ))}
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
                <GlassCard key={index} className="p-6 md:p-8 text-center h-full" hover>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 mx-auto mb-4" />
                  <h3 className="text-lg md:text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-black/70 text-sm md:text-base">{value.description}</p>
                </GlassCard>
            ))}
          </div>
        </div>
      </div>
  );
}