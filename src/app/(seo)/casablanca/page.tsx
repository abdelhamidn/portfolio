/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";

const SITE = "https://abdelhamid.noira.net";

export const metadata: Metadata = {
    title: "Ingénieur DevOps Casablanca — Cloud & Automatisation",
    description:
        "Abdelhamid NOIRA, ingénieur DevOps à Casablanca, Maroc. Spécialiste Kubernetes, Terraform, AWS, Azure, GCP, Microsoft Power Platform et automatisation IA. Disponible pour projets locaux et remote.",
    alternates: { canonical: `${SITE}/casablanca/` },
    openGraph: {
        title: "Ingénieur DevOps Casablanca, Maroc | Abdelhamid NOIRA",
        description:
            "DevOps Engineer basé à Casablanca, Maroc. Infrastructure cloud, CI/CD, Kubernetes, Terraform, Power Platform. Disponible pour missions à Casablanca et en remote.",
        url: `${SITE}/casablanca/`,
        images: [{ url: "/imgs/profile.png", width: 1200, height: 630 }],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "@id": `${SITE}/casablanca/#webpage`,
            url: `${SITE}/casablanca/`,
            name: "Ingénieur DevOps Casablanca — Abdelhamid NOIRA",
            description:
                "Page dédiée aux services DevOps, Cloud et AI Automation d'Abdelhamid NOIRA à Casablanca, Maroc.",
            isPartOf: { "@id": `${SITE}/#website` },
            about: { "@id": `${SITE}/#person` },
            breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: SITE },
                    { "@type": "ListItem", position: 2, name: "Casablanca", item: `${SITE}/casablanca/` },
                ],
            },
        },
        {
            "@type": "LocalBusiness",
            name: "Abdelhamid NOIRA — DevOps Consulting",
            description:
                "Services d'ingénierie DevOps, infrastructure cloud, et automatisation IA à Casablanca, Maroc.",
            url: SITE,
            image: `${SITE}/imgs/profile.png`,
            telephone: "+212708166116",
            email: "a.noira@mundiapolis.ma",
            address: {
                "@type": "PostalAddress",
                streetAddress: "Casablanca",
                addressLocality: "Casablanca",
                addressRegion: "Grand Casablanca-Settat",
                addressCountry: "MA",
            },
            geo: {
                "@type": "GeoCoordinates",
                latitude: "33.5883",
                longitude: "-7.6114",
            },
            areaServed: [
                { "@type": "City", name: "Casablanca" },
                { "@type": "Country", name: "Morocco" },
                { "@type": "Country", name: "France" },
                { "@type": "Continent", name: "Europe" },
            ],
            priceRange: "€€€",
            serviceType: [
                "DevOps Engineering",
                "Cloud Infrastructure",
                "Kubernetes",
                "Terraform",
                "CI/CD",
                "AI Automation",
                "Microsoft Power Platform",
                "Project Management",
            ],
            founder: { "@id": `${SITE}/#person` },
        },
    ],
};

const services = [
    {
        icon: "☁️",
        title: "Infrastructure Cloud",
        desc: "Architecture et déploiement d'environnements cloud sur AWS, Azure et GCP. VPC, load balancers, bases de données managées, stockage objet, IAM.",
    },
    {
        icon: "⚙️",
        title: "Kubernetes & Conteneurisation",
        desc: "Mise en place de clusters Kubernetes production (GKE, AKS, EKS), Helm charts, ArgoCD GitOps, monitoring Prometheus/Grafana.",
    },
    {
        icon: "🔄",
        title: "CI/CD & DevOps",
        desc: "Pipelines CI/CD complets avec GitLab CI, GitHub Actions, Jenkins. Tests automatisés, sécurité intégrée (DevSecOps), déploiements zero-downtime.",
    },
    {
        icon: "🤖",
        title: "Automatisation IA",
        desc: "Solutions d'automatisation intelligentes avec Microsoft Power Platform. Réduction des tâches manuelles de 80%, intégration OpenAI, Power Automate.",
    },
    {
        icon: "📊",
        title: "Gestion de Projet R&D",
        desc: "Direction de projets technologiques en méthodologie Agile/Scrum. Coordination d'équipes, roadmap produit, reporting stakeholders.",
    },
    {
        icon: "🔐",
        title: "Sécurité DevSecOps",
        desc: "Intégration de la sécurité dans le cycle de développement. OWASP, scanning CVE, secrets management (Vault), politiques de conformité.",
    },
];

const faqs = [
    {
        q: "Quels services DevOps sont disponibles à Casablanca ?",
        a: "Abdelhamid NOIRA propose des services complets d'ingénierie DevOps à Casablanca : architecture cloud (AWS, Azure, GCP), Kubernetes, CI/CD, Infrastructure as Code (Terraform), monitoring, et automatisation avec Microsoft Power Platform. Il intervient en mission sur site à Casablanca ou en remote.",
    },
    {
        q: "Est-il possible de travailler avec un ingénieur DevOps basé à Casablanca en remote ?",
        a: "Oui. Abdelhamid NOIRA travaille avec des clients à Casablanca, dans d'autres villes du Maroc et à l'international en full remote. Sa maîtrise des outils de collaboration (Jira, Confluence, Slack, Teams) et des pipelines CI/CD automatisés lui permet de livrer des résultats de qualité quelle que soit la localisation.",
    },
    {
        q: "Combien coûte un ingénieur DevOps à Casablanca ?",
        a: "Le tarif dépend de la complexité du projet, de la durée et du type d'engagement (mission, contrat, temps partiel). Contactez Abdelhamid NOIRA via a.noira@mundiapolis.ma pour un devis personnalisé adapté à votre budget et vos besoins.",
    },
    {
        q: "Quelle est l'expertise en Microsoft Power Platform disponible à Casablanca ?",
        a: "Abdelhamid NOIRA est l'un des rares ingénieurs à Casablanca combinant expertise DevOps et Microsoft Power Platform. Il a livré des projets d'automatisation atteignant 80% de gains de productivité dans des environnements entreprise marocains, utilisant Power Automate, Power Apps, et l'intégration IA.",
    },
];

export default function CasablancaPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="space-y-16">
                <header className="space-y-5">
                    <div className="text-sm font-medium uppercase tracking-widest text-purple-700">
                        DevOps · Casablanca, Maroc
                    </div>
                    <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 lg:text-5xl">
                        Ingénieur DevOps à<br />
                        <span className="text-purple-700">Casablanca, Maroc</span>
                    </h1>
                    <p className="max-w-2xl text-lg leading-relaxed text-slate-600">
                        <strong>Abdelhamid NOIRA</strong> est ingénieur DevOps, spécialiste en
                        automatisation IA et chef de projet R&D basé à{" "}
                        <strong>Casablanca, Maroc</strong>. Expert en infrastructure cloud,
                        Kubernetes, Terraform, Microsoft Power Platform et CI/CD — disponible
                        pour missions locales et remote.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <Link
                            href="/hire-me"
                            className="rounded-lg bg-purple-700 px-5 py-2.5 font-semibold text-white transition-colors hover:bg-purple-800"
                        >
                            Demander un devis
                        </Link>
                        <Link
                            href="/"
                            className="rounded-lg border border-slate-200 px-5 py-2.5 font-semibold text-slate-700 transition-colors hover:border-purple-400 hover:text-purple-700"
                        >
                            Voir le portfolio
                        </Link>
                    </div>
                </header>

                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-slate-900">
                        Services DevOps & Cloud à Casablanca
                    </h2>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {services.map((s) => (
                            <div key={s.title} className="rounded-xl border border-slate-100 bg-slate-50 p-5">
                                <div className="mb-3 text-2xl">{s.icon}</div>
                                <h3 className="mb-2 font-bold text-slate-900">{s.title}</h3>
                                <p className="text-sm leading-relaxed text-slate-600">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-slate-900">
                        Pourquoi choisir un ingénieur DevOps à Casablanca ?
                    </h2>
                    <div className="space-y-4 text-slate-600">
                        <p className="leading-relaxed">
                            Casablanca est le hub technologique du Maroc, abritant les sièges
                            régionaux de grandes entreprises multinationales et un écosystème
                            startup en pleine croissance. La demande en ingénieurs DevOps
                            qualifiés y est forte et croissante, portée par la digitalisation
                            accélérée du tissu économique marocain.
                        </p>
                        <p className="leading-relaxed">
                            Travailler avec un ingénieur DevOps basé à Casablanca présente des
                            avantages concrets : disponibilité sur le fuseau horaire marocain
                            (GMT+1), connaissance du contexte réglementaire local, capacité
                            d'intervention sur site rapide, et tarifs compétitifs par rapport
                            aux prestataires européens, sans compromis sur la qualité.
                        </p>
                        <p className="leading-relaxed">
                            Abdelhamid NOIRA a collaboré avec des organisations marocaines et
                            internationales, livrant des projets cloud complexes dans les secteurs
                            de la santé, de l'éducation, de la sécurité informatique, de la
                            fintech, et des médias. Sa maîtrise du français, de l'anglais et de
                            l'arabe facilite la communication dans tous les contextes professionnels
                            marocains.
                        </p>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-slate-900">
                        Résultats mesurables
                    </h2>
                    <div className="grid gap-4 sm:grid-cols-3">
                        {[
                            { metric: "80%", label: "Gains de productivité via automatisation helpdesk" },
                            { metric: "98%", label: "Taux de résolution des tickets IT" },
                            { metric: "100K$", label: "Financement obtenu via GCP Cloud Program" },
                        ].map((item) => (
                            <div key={item.metric} className="rounded-xl bg-purple-50 p-6 text-center">
                                <div className="text-3xl font-extrabold text-purple-700">{item.metric}</div>
                                <div className="mt-2 text-sm text-slate-600">{item.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-slate-900">Questions fréquentes</h2>
                    <div className="space-y-4">
                        {faqs.map((faq) => (
                            <details key={faq.q} className="group rounded-xl border border-slate-100 bg-slate-50 p-5">
                                <summary className="cursor-pointer font-semibold text-slate-800 group-open:text-purple-700">
                                    {faq.q}
                                </summary>
                                <p className="mt-3 text-sm leading-relaxed text-slate-600">{faq.a}</p>
                            </details>
                        ))}
                    </div>
                </section>

                <section className="rounded-xl bg-purple-700 p-8 text-center text-white">
                    <h2 className="mb-3 text-xl font-bold">
                        Vous cherchez un ingénieur DevOps à Casablanca ?
                    </h2>
                    <p className="mb-6 text-purple-100">
                        Contactez Abdelhamid NOIRA pour discuter de votre projet cloud,
                        DevOps, ou automatisation.
                    </p>
                    <Link
                        href="/hire-me"
                        className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-purple-700 transition-colors hover:bg-purple-50"
                    >
                        Me contacter →
                    </Link>
                </section>

                <section aria-label="Liens internes" className="border-t border-slate-100 pt-8">
                    <h2 className="mb-4 text-lg font-bold text-slate-900">
                        En savoir plus
                    </h2>
                    <div className="flex flex-wrap gap-3">
                        <Link href="/skills" className="text-sm font-medium text-purple-700 hover:underline">
                            Compétences techniques →
                        </Link>
                        <Link href="/morocco" className="text-sm font-medium text-purple-700 hover:underline">
                            DevOps au Maroc →
                        </Link>
                        <Link href="/blog" className="text-sm font-medium text-purple-700 hover:underline">
                            Articles techniques →
                        </Link>
                        <Link href="/" className="text-sm font-medium text-purple-700 hover:underline">
                            Portfolio →
                        </Link>
                    </div>
                </section>
            </div>
        </>
    );
}
