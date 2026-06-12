/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";

const SITE = "https://abdelhamid.noira.net";

export const metadata: Metadata = {
    title: "Microsoft Power Platform : Automatiser 80% de vos Processus Métier",
    description:
        "Retour d'expérience concret sur un projet d'automatisation helpdesk avec Microsoft Power Platform. 80% de gains de productivité, 98% de taux de résolution. Guide pratique pour les entreprises marocaines.",
    alternates: { canonical: `${SITE}/blog/power-platform-automatisation/` },
    openGraph: {
        title: "Power Platform : 80% de Gains de Productivité | Abdelhamid NOIRA",
        description:
            "Retour d'expérience : comment Power Automate + AI Builder ont transformé un helpdesk IT en automatisant 80% des tickets. Guide pour entreprises marocaines.",
        url: `${SITE}/blog/power-platform-automatisation/`,
        type: "article",
        images: [{ url: "/imgs/profile.png", width: 1200, height: 630 }],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE}/blog/power-platform-automatisation/#article`,
    url: `${SITE}/blog/power-platform-automatisation/`,
    headline: "Microsoft Power Platform : Automatiser 80% de vos Processus Métier",
    description:
        "Retour d'expérience sur un projet d'automatisation helpdesk avec Power Platform. 80% de gains de productivité, 98% de taux de résolution.",
    author: { "@id": `${SITE}/#person` },
    publisher: { "@id": `${SITE}/#person` },
    datePublished: "2026-05-10",
    dateModified: "2026-05-30",
    inLanguage: "fr",
    isPartOf: { "@id": `${SITE}/blog/#blog` },
    keywords: "Power Platform Maroc, automatisation processus, Power Automate, AI Builder, productivité entreprise Maroc",
    breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE },
            { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog/` },
            { "@type": "ListItem", position: 3, name: "Power Platform Automatisation", item: `${SITE}/blog/power-platform-automatisation/` },
        ],
    },
};

export default function Article2() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <article className="space-y-8 prose prose-slate max-w-none">
                <header className="not-prose space-y-4">
                    <Link href="/blog" className="text-sm text-purple-700 hover:underline">
                        ← Retour au blog
                    </Link>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                        <time dateTime="2026-05-10">10 mai 2026</time>
                        <span>·</span>
                        <span>9 min de lecture</span>
                        <span>·</span>
                        <span className="rounded-full bg-purple-100 px-2 py-0.5 font-medium text-purple-700">FR</span>
                    </div>
                    <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 lg:text-4xl">
                        Microsoft Power Platform :<br />
                        Automatiser 80% de vos Processus Métier
                    </h1>
                    <p className="text-lg leading-relaxed text-slate-600">
                        Retour d'expérience sur un projet d'automatisation d'un helpdesk IT en entreprise.
                        Comment Power Automate, AI Builder, et quelques connecteurs bien choisis ont permis
                        d'atteindre 80% de gains de productivité et 98% de taux de résolution automatique des tickets.
                    </p>
                    <div className="not-prose grid gap-3 sm:grid-cols-3">
                        {[
                            { metric: "80%", label: "Gains de productivité" },
                            { metric: "98%", label: "Taux de résolution" },
                            { metric: "3 sem.", label: "Délai d'implémentation" },
                        ].map((item) => (
                            <div key={item.metric} className="rounded-xl bg-purple-50 p-4 text-center">
                                <div className="text-2xl font-extrabold text-purple-700">{item.metric}</div>
                                <div className="text-xs text-slate-500 mt-1">{item.label}</div>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                        {["Power Platform", "Power Automate", "AI Builder", "Automatisation", "Helpdesk", "Enterprise"].map((tag) => (
                            <span key={tag} className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
                                {tag}
                            </span>
                        ))}
                    </div>
                </header>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900">Le contexte : un helpdesk débordé</h2>
                    <p className="leading-relaxed text-slate-600">
                        L'organisation cliente avait un problème classique mais douloureux : une équipe IT de
                        3 personnes recevait plus de 200 tickets par semaine via email et Teams. Chaque ticket
                        nécessitait une lecture manuelle, une catégorisation, une recherche dans la base de
                        connaissances, une réponse rédigée, et un suivi. L'équipe passait 70% de son temps
                        sur des demandes répétitives et à faible valeur ajoutée.
                    </p>
                    <p className="leading-relaxed text-slate-600">
                        Les demandes récurrentes représentaient 80% du volume total : réinitialisation de mots
                        de passe, accès aux applications, problèmes de connexion VPN, configuration Outlook,
                        demandes d'équipement. Des problèmes totalement standardisables — mais qui mobilisaient
                        une équipe humaine à plein temps.
                    </p>
                    <p className="leading-relaxed text-slate-600">
                        L'objectif était clair : automatiser le traitement de ces cas répétitifs pour libérer
                        l'équipe IT sur les incidents complexes et les projets d'infrastructure. Budget :
                        Microsoft 365 existant. Timeline : 3 semaines. Résultat attendu : 50% de réduction
                        du temps manuel. Résultat obtenu : 80%.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900">L'architecture de la solution</h2>
                    <p className="leading-relaxed text-slate-600">
                        La solution s'appuie entièrement sur l'écosystème Microsoft — ce qui garantissait
                        une intégration native avec les outils déjà utilisés par le client (Outlook, Teams,
                        SharePoint, Azure AD) et éliminait les coûts d'infrastructure supplémentaires.
                    </p>
                    <h3 className="text-xl font-bold text-slate-800">Couche 1 : Collecte et Analyse (AI Builder)</h3>
                    <p className="leading-relaxed text-slate-600">
                        Chaque email arrivant sur la boîte support est intercepté par un flux Power Automate.
                        AI Builder (le module IA de Power Platform) analyse le contenu du message avec un
                        modèle de classification entraîné sur l'historique des 2 ans de tickets précédents.
                        Le modèle catégorise le ticket en moins de 2 secondes avec un niveau de confiance
                        associé, et extrait les entités clés : utilisateur demandeur, application concernée,
                        type de problème.
                    </p>
                    <h3 className="text-xl font-bold text-slate-800">Couche 2 : Routage et Résolution Automatique (Power Automate)</h3>
                    <p className="leading-relaxed text-slate-600">
                        Selon la catégorie détectée et le niveau de confiance du modèle, trois chemins sont
                        possibles. Pour les cas à haute confiance sur des catégories automatisables (reset mot
                        de passe, accès application standard), la résolution est entièrement automatique :
                        le flow Power Automate appelle l'API Microsoft Graph pour réinitialiser le compte,
                        attribue les permissions dans Azure AD, et envoie une réponse personnalisée à
                        l'utilisateur — sans intervention humaine.
                    </p>
                    <p className="leading-relaxed text-slate-600">
                        Pour les cas à confiance moyenne, un brouillon de réponse est généré automatiquement
                        et soumis à validation humaine dans une interface Power Apps. L'agent IT valide ou
                        ajuste en un clic. Pour les cas complexes ou à faible confiance, le ticket est
                        assigné directement à l'agent le plus disponible avec toutes les informations
                        pré-analysées.
                    </p>
                    <h3 className="text-xl font-bold text-slate-800">Couche 3 : Suivi et Analytics (Power BI)</h3>
                    <p className="leading-relaxed text-slate-600">
                        Un tableau de bord Power BI temps réel affiche les métriques opérationnelles :
                        volume de tickets par catégorie, taux de résolution automatique, temps moyen de
                        résolution, satisfaction utilisateur (collectée automatiquement par email post-résolution),
                        et les top 10 problèmes récurrents. Ce dashboard a transformé la posture de l'équipe
                        IT — d'un mode réactif à un mode proactif basé sur les données.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900">Les résultats mesurés</h2>
                    <div className="not-prose grid gap-4 sm:grid-cols-2">
                        {[
                            { label: "Tickets traités automatiquement", before: "0%", after: "80%" },
                            { label: "Temps de résolution moyen", before: "4h", after: "8 min" },
                            { label: "Satisfaction utilisateurs", before: "62%", after: "94%" },
                            { label: "Charge manuelle équipe IT", before: "70% du temps", after: "15% du temps" },
                        ].map((item) => (
                            <div key={item.label} className="rounded-xl bg-slate-50 p-4">
                                <div className="text-sm font-semibold text-slate-700 mb-2">{item.label}</div>
                                <div className="flex items-center gap-3">
                                    <div className="text-center">
                                        <div className="text-lg font-bold text-slate-400">{item.before}</div>
                                        <div className="text-xs text-slate-400">Avant</div>
                                    </div>
                                    <div className="text-slate-300">→</div>
                                    <div className="text-center">
                                        <div className="text-lg font-bold text-purple-700">{item.after}</div>
                                        <div className="text-xs text-purple-500">Après</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900">Ce que cette expérience enseigne</h2>
                    <p className="leading-relaxed text-slate-600">
                        La première leçon : Power Platform est sous-estimé dans les organisations marocaines
                        qui disposent déjà de Microsoft 365. La plupart des entreprises paient la licence mais
                        n'utilisent qu'une infime fraction des capacités d'automatisation disponibles. C'est
                        littéralement de la valeur non captée.
                    </p>
                    <p className="leading-relaxed text-slate-600">
                        La deuxième leçon : l'IA n'a pas besoin d'être complexe pour être impactante. Le modèle
                        AI Builder que nous avons utilisé a été entraîné en une journée sur des données historiques
                        internes — sans une seule ligne de code Python ou un seul modèle custom. La valeur venait
                        de la bonne intégration dans le processus métier, pas de la sophistication algorithmique.
                    </p>
                    <p className="leading-relaxed text-slate-600">
                        La troisième leçon : mesurez tout dès le début. Avant de démarrer le projet, nous avons
                        établi des baselines précises pour chaque KPI. Sans cela, il était impossible de
                        démontrer les 80% de gains avec des chiffres solides. Les données pré-projet sont
                        aussi importantes que les données post-déploiement.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900">
                        Power Platform est-il adapté à votre organisation ?
                    </h2>
                    <p className="leading-relaxed text-slate-600">
                        La solution Power Platform est particulièrement adaptée si votre organisation répond
                        à ces critères :
                    </p>
                    <div className="not-prose space-y-2">
                        {[
                            "Vous utilisez déjà Microsoft 365 (Outlook, Teams, SharePoint)",
                            "Vous avez des processus répétitifs à volume élevé (RH, IT, Finance, Achats)",
                            "Vous manquez de ressources pour du développement custom",
                            "Vous avez besoin de résultats mesurables rapidement (< 1 mois)",
                            "Vos équipes ne sont pas fortement techniques mais peuvent utiliser des interfaces simples",
                        ].map((item) => (
                            <div key={item} className="flex items-start gap-2 text-sm text-slate-600">
                                <span className="mt-0.5 text-purple-500">✓</span>
                                {item}
                            </div>
                        ))}
                    </div>
                    <p className="leading-relaxed text-slate-600 mt-4">
                        Si vous cochez au moins 3 de ces cases, vous êtes un candidat idéal pour un projet
                        Power Platform. Le ROI est généralement visible dès le premier mois.
                    </p>
                </section>

                <footer className="not-prose space-y-4 border-t border-slate-100 pt-6">
                    <div>
                        <div className="font-semibold text-slate-900">Abdelhamid NOIRA</div>
                        <div className="text-sm text-slate-500">DevOps Engineer · AI Automation · Power Platform Specialist · Casablanca, Morocco</div>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <Link href="/hire-me" className="text-sm font-medium text-purple-700 hover:underline">
                            Démarrer un projet →
                        </Link>
                        <Link href="/skills" className="text-sm font-medium text-purple-700 hover:underline">
                            Voir les compétences →
                        </Link>
                        <Link href="/blog" className="text-sm font-medium text-purple-700 hover:underline">
                            Autres articles →
                        </Link>
                    </div>
                </footer>
            </article>
        </>
    );
}
