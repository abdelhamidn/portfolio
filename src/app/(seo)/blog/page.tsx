/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";

const SITE = "https://abdelhamid.noira.net";

export const metadata: Metadata = {
    title: "Blog — DevOps, Cloud Infrastructure & AI Automation",
    description:
        "Technical articles by Abdelhamid NOIRA on DevOps engineering, cloud infrastructure, Kubernetes, Terraform, Microsoft Power Platform, and AI automation in Morocco.",
    alternates: { canonical: `${SITE}/blog/` },
    openGraph: {
        title: "Blog | Abdelhamid NOIRA — DevOps, Cloud & AI Automation",
        description:
            "Technical articles on DevOps, Kubernetes, Terraform, Power Platform, and AI automation by a DevOps Engineer in Casablanca, Morocco.",
        url: `${SITE}/blog/`,
        images: [{ url: "/imgs/profile.png", width: 1200, height: 630 }],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE}/blog/#blog`,
    url: `${SITE}/blog/`,
    name: "Abdelhamid NOIRA — DevOps & Cloud Engineering Blog",
    description:
        "Technical articles on DevOps engineering, cloud infrastructure, AI automation, and technology in Morocco.",
    author: { "@id": `${SITE}/#person` },
    publisher: { "@id": `${SITE}/#person` },
    inLanguage: ["fr", "en"],
    breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE },
            { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog/` },
        ],
    },
};

const posts = [
    {
        slug: "devops-maroc-2026",
        title: "L'Ingénierie DevOps au Maroc en 2026 : État de l'Art et Opportunités",
        summary:
            "Comment le Maroc s'impose comme hub DevOps en Afrique : adoption du cloud, Kubernetes, CI/CD, et les compétences les plus recherchées par les entreprises marocaines.",
        date: "2026-05-20",
        readTime: "7 min",
        tags: ["DevOps", "Morocco", "Cloud", "Kubernetes"],
        lang: "FR",
    },
    {
        slug: "power-platform-automatisation",
        title: "Microsoft Power Platform : Automatiser 80% de vos Processus Métier",
        summary:
            "Retour d'expérience sur un projet d'automatisation helpdesk avec Power Automate et AI Builder ayant atteint 80% de gains de productivité et 98% de taux de résolution.",
        date: "2026-05-10",
        readTime: "9 min",
        tags: ["Power Platform", "AI Automation", "Power Automate", "Enterprise"],
        lang: "FR",
    },
    {
        slug: "cloud-infrastructure-maroc",
        title: "Infrastructure Cloud au Maroc : Retour d'Expérience avec GCP, Terraform et Kubernetes",
        summary:
            "Guide pratique pour migrer vers une infrastructure cloud-native avec Google Cloud Platform, Terraform pour l'IaC, et Kubernetes pour l'orchestration — contexte marocain.",
        date: "2026-04-28",
        readTime: "11 min",
        tags: ["GCP", "Terraform", "Kubernetes", "Cloud Infrastructure"],
        lang: "FR",
    },
];

export default function BlogPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="space-y-12">
                <header className="space-y-4">
                    <div className="text-sm font-medium uppercase tracking-widest text-purple-700">
                        Technical Blog
                    </div>
                    <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900">
                        DevOps, Cloud & AI Automation
                    </h1>
                    <p className="max-w-xl text-lg leading-relaxed text-slate-600">
                        Articles techniques sur le DevOps, l'infrastructure cloud, et l'automatisation
                        IA — par <strong>Abdelhamid NOIRA</strong>, ingénieur DevOps basé à Casablanca, Maroc.
                    </p>
                </header>

                <div className="space-y-6">
                    {posts.map((post) => (
                        <article key={post.slug} className="group rounded-xl border border-slate-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                            <Link href={`/blog/${post.slug}`} className="block space-y-3">
                                <div className="flex items-center gap-2 text-xs text-slate-500">
                                    <time dateTime={post.date}>
                                        {new Date(post.date).toLocaleDateString("fr-FR", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}
                                    </time>
                                    <span>·</span>
                                    <span>{post.readTime} de lecture</span>
                                    <span className="ml-auto rounded-full bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-700">
                                        {post.lang}
                                    </span>
                                </div>
                                <h2 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-purple-700">
                                    {post.title}
                                </h2>
                                <p className="text-sm leading-relaxed text-slate-600">{post.summary}</p>
                                <div className="flex flex-wrap gap-1.5 pt-1">
                                    {post.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>

                <section className="rounded-xl bg-purple-50 p-6 text-center">
                    <p className="text-slate-600">
                        Vous souhaitez travailler avec un ingénieur DevOps passionné par le partage de connaissances ?
                    </p>
                    <Link
                        href="/hire-me"
                        className="mt-3 inline-block font-semibold text-purple-700 hover:underline"
                    >
                        Voir les services disponibles →
                    </Link>
                </section>
            </div>
        </>
    );
}
