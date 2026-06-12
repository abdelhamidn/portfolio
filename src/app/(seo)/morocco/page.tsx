/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";

const SITE = "https://abdelhamid.noira.net";

export const metadata: Metadata = {
    title: "DevOps Engineer Morocco — Cloud Infrastructure & AI Automation",
    description:
        "Abdelhamid NOIRA, DevOps Engineer in Morocco. Cloud infrastructure (AWS, Azure, GCP), Kubernetes, Terraform, CI/CD, Microsoft Power Platform, and AI automation. Available for projects across Morocco and remotely.",
    alternates: { canonical: `${SITE}/morocco/` },
    openGraph: {
        title: "DevOps Engineer Morocco | Abdelhamid NOIRA — Cloud & AI Automation",
        description:
            "Top DevOps Engineer in Morocco. Kubernetes, Terraform, AWS/Azure/GCP, CI/CD, Power Platform. 80% productivity gains. Available nationwide and internationally.",
        url: `${SITE}/morocco/`,
        images: [{ url: "/imgs/profile.png", width: 1200, height: 630 }],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "@id": `${SITE}/morocco/#webpage`,
            url: `${SITE}/morocco/`,
            name: "DevOps Engineer Morocco — Abdelhamid NOIRA",
            description:
                "Landing page for DevOps engineering services in Morocco by Abdelhamid NOIRA.",
            isPartOf: { "@id": `${SITE}/#website` },
            about: { "@id": `${SITE}/#person` },
            breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: SITE },
                    { "@type": "ListItem", position: 2, name: "Morocco", item: `${SITE}/morocco/` },
                ],
            },
        },
        {
            "@type": "Article",
            headline: "The State of DevOps Engineering in Morocco 2026",
            author: { "@id": `${SITE}/#person` },
            publisher: { "@id": `${SITE}/#person` },
            datePublished: "2026-05-30",
            dateModified: "2026-05-30",
            description:
                "An overview of DevOps engineering opportunities, cloud adoption, and technology trends in Morocco in 2026.",
            url: `${SITE}/morocco/`,
        },
    ],
};

const techStack = [
    "Kubernetes", "Docker", "Terraform", "Ansible", "Helm", "ArgoCD",
    "AWS", "Azure", "GCP", "GitLab CI", "GitHub Actions", "Jenkins",
    "Prometheus", "Grafana", "Python", "Java", "TypeScript",
    "Power Platform", "PostgreSQL", "Redis", "Kafka", "Linux",
];

const sectors = [
    { icon: "🏦", name: "Finance & Fintech", desc: "Secure cloud infrastructure, compliance automation, and real-time data pipelines for Moroccan financial institutions." },
    { icon: "🏥", name: "Healthcare", desc: "HIPAA-aligned cloud architectures, medical platform deployment, and healthcare data security for clinics and hospitals." },
    { icon: "📚", name: "Education & EdTech", desc: "Scalable learning management systems, video streaming infrastructure, and student data platforms for universities." },
    { icon: "🏭", name: "Industry & Manufacturing", desc: "IoT platform backend infrastructure, ERP integration (SAP, Odoo), and operational automation." },
    { icon: "🛒", name: "E-commerce & Retail", desc: "High-availability e-commerce infrastructure, CDN optimization, inventory APIs, and payment gateway integration." },
    { icon: "📡", name: "Telecom & Media", desc: "Large-scale microservices, streaming platform infrastructure, and API gateway management for media companies." },
];

export default function MoroccoPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="space-y-16">
                <header className="space-y-5">
                    <div className="text-sm font-medium uppercase tracking-widest text-purple-700">
                        DevOps · Morocco
                    </div>
                    <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 lg:text-5xl">
                        DevOps Engineer<br />
                        <span className="text-purple-700">in Morocco</span>
                    </h1>
                    <p className="max-w-2xl text-lg leading-relaxed text-slate-600">
                        <strong>Abdelhamid NOIRA</strong> is a DevOps Engineer, AI Automation
                        Specialist, and R&D Project Manager based in Morocco. He builds
                        cloud-native infrastructure, automates business processes, and delivers
                        scalable software products for Moroccan and international companies.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <Link
                            href="/hire-me"
                            className="rounded-lg bg-purple-700 px-5 py-2.5 font-semibold text-white transition-colors hover:bg-purple-800"
                        >
                            Get in touch
                        </Link>
                        <Link
                            href="/skills"
                            className="rounded-lg border border-slate-200 px-5 py-2.5 font-semibold text-slate-700 transition-colors hover:border-purple-400 hover:text-purple-700"
                        >
                            View all skills
                        </Link>
                    </div>
                </header>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-slate-900">
                        Technology stack
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        {techStack.map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-slate-900">
                        DevOps in Morocco: Context & Opportunities
                    </h2>
                    <div className="space-y-4 text-slate-600">
                        <p className="leading-relaxed">
                            Morocco is rapidly emerging as a leading technology hub in Africa and
                            the Maghreb region. Casablanca Finance City, Technopark, and
                            CasaShore have attracted global companies establishing regional
                            technology centers, driving significant demand for skilled DevOps
                            engineers, cloud architects, and automation specialists.
                        </p>
                        <p className="leading-relaxed">
                            Moroccan enterprises across finance, telecom, healthcare, and
                            e-commerce are accelerating their cloud migration journeys, adopting
                            Kubernetes and containerization, and implementing modern CI/CD
                            practices. This digital transformation wave requires experienced
                            professionals who combine deep technical skills with business acumen
                            and understanding of the local regulatory environment.
                        </p>
                        <p className="leading-relaxed">
                            Abdelhamid NOIRA operates at this intersection — a technically
                            rigorous DevOps engineer with strong project management skills and
                            experience delivering complex technology projects in the Moroccan
                            context. He has worked across multiple sectors, built products used
                            by thousands of Moroccan users, and mentored emerging engineers in
                            modern DevOps and cloud practices.
                        </p>
                        <p className="leading-relaxed">
                            Beyond infrastructure, his work on AI automation — particularly the
                            Microsoft Power Platform helpdesk project achieving 80% productivity
                            gains — demonstrates how AI and low-code technologies can transform
                            Moroccan enterprise operations without requiring custom software
                            development from scratch.
                        </p>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-slate-900">
                        Industry Sectors Served in Morocco
                    </h2>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {sectors.map((s) => (
                            <div key={s.name} className="rounded-xl border border-slate-100 bg-slate-50 p-5">
                                <div className="mb-2 text-2xl">{s.icon}</div>
                                <h3 className="mb-2 font-bold text-slate-900">{s.name}</h3>
                                <p className="text-sm leading-relaxed text-slate-600">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-slate-900">
                        Key metrics
                    </h2>
                    <div className="grid gap-4 sm:grid-cols-3">
                        {[
                            { metric: "3+", label: "Years of professional DevOps experience" },
                            { metric: "13+", label: "Products and platforms shipped" },
                            { metric: "6", label: "Languages spoken on this portfolio" },
                        ].map((item) => (
                            <div key={item.metric} className="rounded-xl bg-purple-50 p-6 text-center">
                                <div className="text-3xl font-extrabold text-purple-700">{item.metric}</div>
                                <div className="mt-2 text-sm text-slate-600">{item.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-slate-900">
                        Why hire a DevOps engineer in Morocco?
                    </h2>
                    <div className="space-y-3 text-slate-600">
                        <p className="leading-relaxed">
                            <strong className="text-slate-800">Competitive advantage.</strong>{" "}
                            Morocco offers a rare combination: highly educated engineers trained
                            in European-standard institutions, GMT+1 timezone compatibility with
                            European markets, trilingual professionals (French, Arabic, English),
                            and significantly competitive rates versus Western European equivalents.
                        </p>
                        <p className="leading-relaxed">
                            <strong className="text-slate-800">Quality without compromise.</strong>{" "}
                            Abdelhamid NOIRA graduated from Université Mundiapolis — a
                            French-Moroccan university with rigorous engineering programs — and has
                            maintained international standards throughout his career. He follows the
                            same methodologies, tools, and quality standards as top DevOps
                            engineers anywhere in the world.
                        </p>
                        <p className="leading-relaxed">
                            <strong className="text-slate-800">Local and global reach.</strong>{" "}
                            Available for on-site engagements anywhere in Morocco and fully remote
                            for international clients. His cloud-native toolset (async communication,
                            GitOps, CI/CD, documentation-first culture) is optimized for distributed
                            team collaboration.
                        </p>
                    </div>
                </section>

                <section className="rounded-xl bg-purple-700 p-8 text-center text-white">
                    <h2 className="mb-3 text-xl font-bold">
                        Looking for a DevOps Engineer in Morocco?
                    </h2>
                    <p className="mb-6 text-purple-100">
                        Let's discuss your cloud infrastructure, DevOps, or AI automation project.
                        Available for consulting, full-time, and remote engagements.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        <Link
                            href="/hire-me"
                            className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-purple-700 transition-colors hover:bg-purple-50"
                        >
                            Hire Abdelhamid →
                        </Link>
                        <Link
                            href="/"
                            className="inline-block rounded-lg border border-purple-400 px-6 py-3 font-semibold text-white transition-colors hover:bg-purple-600"
                        >
                            View portfolio
                        </Link>
                    </div>
                </section>

                <section aria-label="Related pages" className="border-t border-slate-100 pt-8">
                    <h2 className="mb-4 text-lg font-bold text-slate-900">Related pages</h2>
                    <div className="flex flex-wrap gap-3">
                        <Link href="/casablanca" className="text-sm font-medium text-purple-700 hover:underline">
                            DevOps Engineer Casablanca →
                        </Link>
                        <Link href="/skills" className="text-sm font-medium text-purple-700 hover:underline">
                            Technical Skills →
                        </Link>
                        <Link href="/blog" className="text-sm font-medium text-purple-700 hover:underline">
                            Technical Blog →
                        </Link>
                        <Link href="/hire-me" className="text-sm font-medium text-purple-700 hover:underline">
                            Hire Me →
                        </Link>
                    </div>
                </section>
            </div>
        </>
    );
}
