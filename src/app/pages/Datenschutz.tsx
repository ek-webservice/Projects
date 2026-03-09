import { GlassCard } from '../components/GlassCard';

export function Datenschutz() {
    return (
        <div className="pt-24 pb-12 min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">

                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent font-bold">
                        Datenschutz
                    </h1>
                </div>

                {/* Content */}
                <GlassCard className="p-8 md:p-12">
                    <div className="space-y-8 text-black/80 leading-relaxed">

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Datenschutz auf einen Blick</h2>
                            <p className="mb-2">
                                <strong>Allgemeine Hinweise</strong><br />
                                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Verantwortliche Stelle</h2>
                            <p>
                                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                            </p>
                            <p className="mt-2 bg-white/50 p-4 rounded-lg border border-white/80">
                                <strong>EK-Webservice</strong><br/>
                                Falkenstrasse 14<br/>
                                3714 Frutigen<br/>
                                Telefon: 076 687 40 79<br/>
                                E-Mail: info@ek-webservice.com
                            </p>
                            <br/>
                            <p className="mt-2 bg-white/50 p-4 rounded-lg border border-white/80">
                                <strong>EK-Webservice</strong><br/>
                                Bernstrasse 39<br/>
                                3052 Zollikofen<br/>
                                Telefon: 079 966 42 31<br/>
                                E-Mail: info@ek-webservice.com
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Datenerfassung auf dieser
                                Website</h2>
                            <h3 className="font-semibold mt-4 mb-2">Kontaktformular</h3>
                            <p>
                                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
                                Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Der Versand der E-Mails erfolgt über den Dienst EmailJS.
                            </p>

                            <h3 className="font-semibold mt-4 mb-2">Server-Log-Dateien</h3>
                            <p>
                                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind unter anderem: Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners und Uhrzeit der Serveranfrage.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Hosting</h2>
                            <p>
                                Unsere Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Wir nutzen folgenden Hoster:
                            </p>
                            <p className="mt-2">
                                <strong>United Domains</strong><br />
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Ihre Rechte</h2>
                            <p>
                                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, Einschränkung der Verarbeitung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
                            </p>
                        </section>

                    </div>
                </GlassCard>
            </div>
        </div>
    );
}