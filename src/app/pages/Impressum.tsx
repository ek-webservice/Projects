import { GlassCard } from '../components/GlassCard';

export function Impressum() {
    return (
        <div className="pt-24 pb-12 min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">

                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl py-2 mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent font-bold leading-tight">
                        Impressum
                    </h1>
                </div>

                {/* Content */}
                <GlassCard className="p-8 md:p-12">
                    <div className="space-y-8 text-black/80 leading-relaxed">

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Angaben zum Unternehmen</h2>
                            <p>
                                <strong>EK-Webservice</strong><br/>
                                Falkenstrasse 14<br/>
                                3714 Frutigen<br/>
                                Schweiz
                            </p>
                            <br/>
                            <p>
                                <strong>EK-Webservice</strong><br/>
                                Bernstrasse 39<br/>
                                3052 Zollikofen<br/>
                                Schweiz
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">Kontakt</h2>
                            <p>
                                Telefon: 076 687 40 79<br/>
                                E-Mail: info@ek-webservice.com<br/>
                                Website: www.ek-webservice.com
                            </p>
                            <br/>
                            <p>
                                Telefon: 079 966 42 31<br/>
                                E-Mail: info@ek-webservice.com<br/>
                                Website: www.ek-webservice.com
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">Vertretungsberechtigte
                                Personen</h2>
                            <p>
                                Erblin Guri
                            </p>
                            <p>
                                Kavisan Krishnamoorthy
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">Haftungsausschluss</h2>
                            <p>
                                Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen. Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">Urheberrechte</h2>
                            <p>
                                Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf der Website gehören ausschliesslich <strong>EK-Webservice</strong> oder den speziell genannten Rechtsinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.
                            </p>
                        </section>

                    </div>
                </GlassCard>
            </div>
        </div>
    );
}