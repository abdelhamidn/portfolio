/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";

const SITE = "https://abdelhamid.noira.net";

export const metadata: Metadata = {
    title: "Hire Me — DevOps Engineer & AI Automation, Casablanca Morocco",
    description:
        "Hire Abdelhamid NOIRA as your DevOps Engineer or AI Automation Specialist. Available for cloud infrastructure, Kubernetes, Terraform, Power Platform, CI/CD, and project management. Casablanca, Morocco — remote worldwide.",
    alternates: { canonical: `${SITE}/hire-me/` },
    openGraph: {
        title: "Hire Abdelhamid NOIRA — DevOps Engineer & AI Automation | Morocco",
        description:
            "Available for DevOps, cloud infrastructure, AI automation, and project management. 80% productivity gains. $100K GCP. Remote and on-site in Casablanca, Morocco.",
        url: `${SITE}/hire-me/`,
        images: [{ url: "/imgs/profile.png", width: 1200, height: 630 }],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE}/hire-me/#webpage`,
    url: `${SITE}/hire-me/`,
    name: "Hire Me — Abdelhamid NOIRA, DevOps Engineer & AI Automation Specialist",
    description:
        "Contact page for hiring Abdelhamid NOIRA for DevOps, cloud, and AI automation projects.",
    isPartOf: { "@id": `${SITE}/#website` },
    about: { "@id": `${SITE}/#person` },
    breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE },
            { "@type": "ListItem", position: 2, name: "Hire Me", item: `${SITE}/hire-me/` },
        ],
    },
};

const engagements = [
    {
        type: "Consulting",
        icon: "💡",
        desc: "Short-to-medium term advisory and implementation engagements. Architecture reviews, infrastructure audits, migration roadmaps, and specific feature delivery.",
        duration: "Days → Months",
    },
    {
        type: "Freelance Contract",
        icon: "📋",
        desc: "Fixed-scope or time-and-materials contracts for defined deliverables: cloud setup, CI/CD pipeline, automation project, or full product deployment.",
        duration: "Weeks → Months",
    },
    {
        type: "Full-time / Long-term",
        icon: "🤝",
        desc: "Embedded as a key DevOps or platform engineering team member. Available for full-time positions and long-term retainer arrangements.",
        duration: "Ongoing",
    },
    {
        type: "Remote",
        icon: "🌍",
        desc: "Available for fully remote work with international clients across Europe, the Middle East, and beyond. Async-first, documentation-driven, overlap-friendly timezone.",
        duration: "Any",
    },
];

const services = [
    {
        title: "Cloud Infrastructure Architecture",
        items: [
            "Multi-cloud strategy (AWS, Azure, GCP)",
            "VPC design, networking, and security groups",
            "Kubernetes cluster setup and management",
            "Database infrastructure (RDS, CloudSQL, managed NoSQL)",
            "Cost optimization and FinOps",
        ],
    },
    {
        title: "DevOps & CI/CD",
        items: [
            "CI/CD pipeline design and implementation",
            "GitLab CI, GitHub Actions, Jenkins",
            "GitOps with ArgoCD",
            "Infrastructure as Code (Terraform, Ansible)",
            "Docker containerization and registry management",
        ],
    },
    {
        title: "AI Automation & Power Platform",
        items: [
            "Microsoft Power Platform solutions (Apps, Automate, BI)",
            "Enterprise process automation",
            "AI-powered helpdesk and workflows",
            "OpenAI API integration",
            "Low-code/no-code transformation consulting",
        ],
    },
    {
        title: "Security & Observability",
        items: [
            "DevSecOps pipeline integration",
            "HashiCorp Vault secrets management",
            "Prometheus + Grafana monitoring stack",
            "OWASP security audits",
            "Container security (Trivy, Falco, OPA)",
        ],
    },
    {
        title: "Project & Product Management",
        items: [
            "Agile/Scrum team leadership",
            "Technical roadmap and sprint planning",
            "Stakeholder reporting and OKR tracking",
            "R&D project management",
            "Cross-functional team coordination",
        ],
    },
    {
        title: "Full-Stack Development",
        items: [
            "React / Next.js applications",
            "Spring Boot microservices (Java)",
            "Python backend services and scripts",
            "REST API design and documentation",
            "Database design (PostgreSQL, MongoDB, Redis)",
        ],
    },
];

const testimonials = [
    {
        quote: "Delivered a complete Kubernetes platform that transformed how our team deploys services. Excellent technical depth and communication throughout.",
        name: "CTO, Moroccan SaaS Company",
    },
    {
        quote: "The Power Platform automation project reduced our helpdesk workload by 80% in the first month. Exceptional ROI and execution speed.",
        name: "IT Director, Enterprise Client",
    },
    {
        quote: "Deep AWS and Terraform knowledge. Set up our entire infrastructure as code from scratch. Now our team can deploy confidently.",
        name: "Engineering Lead, Startup",
    },
];

export default function HireMePage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="space-y-16">
                <header className="space-y-5">
                    <div className="text-sm font-medium uppercase tracking-widest text-purple-700">
                        Available for hire
                    </div>
                    <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 lg:text-5xl">
                        Work with<br />
                        <span className="text-purple-700">Abdelhamid NOIRA</span>
                    </h1>
                    <p className="max-w-2xl text-lg leading-relaxed text-slate-600">
                        DevOps Engineer, AI Automation Specialist & R&D Project Manager —
                        Casablanca, Morocco. Available for consulting, contracts, and
                        full-time positions, remote and on-site.
                    </p>

                    <div className="grid gap-3 sm:grid-cols-3">
                        {[
                            { metric: "80%", label: "Productivity gain via AI automation" },
                            { metric: "$100K", label: "GCP Cloud Program secured" },
                            { metric: "3+", label: "Years of cloud & DevOps expertise" },
                        ].map((item) => (
                            <div key={item.metric} className="rounded-xl bg-purple-50 p-4 text-center">
                                <div className="text-2xl font-extrabold text-purple-700">{item.metric}</div>
                                <div className="mt-1 text-xs text-slate-600">{item.label}</div>
                            </div>
                        ))}
                    </div>
                </header>

                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-slate-900">Engagement types</h2>
                    <div className="grid gap-4 sm:grid-cols-2">
                        {engagements.map((e) => (
                            <div key={e.type} className="rounded-xl border border-slate-100 bg-slate-50 p-5">
                                <div className="mb-2 flex items-center gap-2">
                                    <span className="text-xl">{e.icon}</span>
                                    <span className="font-bold text-slate-900">{e.type}</span>
                                    <span className="ml-auto rounded-full bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-700">
                                        {e.duration}
                                    </span>
                                </div>
                                <p className="text-sm leading-relaxed text-slate-600">{e.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-slate-900">Services offered</h2>
                    <div className="grid gap-6 sm:grid-cols-2">
                        {services.map((s) => (
                            <div key={s.title} className="space-y-3">
                                <h3 className="font-bold text-slate-900">{s.title}</h3>
                                <ul className="space-y-1">
                                    {s.items.map((item) => (
                                        <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                                            <span className="mt-0.5 text-purple-500">✓</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-slate-900">What clients say</h2>
                    <div className="space-y-4">
                        {testimonials.map((t) => (
                            <blockquote key={t.name} className="rounded-xl border-l-4 border-purple-400 bg-slate-50 p-5">
                                <p className="text-slate-700 italic">"{t.quote}"</p>
                                <footer className="mt-2 text-sm font-medium text-slate-500">— {t.name}</footer>
                            </blockquote>
                        ))}
                    </div>
                </section>

                <section className="space-y-6 rounded-xl bg-purple-700 p-8 text-white">
                    <h2 className="text-2xl font-bold">Ready to work together?</h2>
                    <p className="text-purple-100 leading-relaxed">
                        Describe your project and I'll get back to you within 24 hours.
                        Whether it's a quick cloud audit, a full infrastructure migration,
                        or a long-term engineering partnership — let's talk.
                    </p>
                    <div className="space-y-3">
                        <div className="flex items-center gap-3 text-purple-100">
                            <span className="text-lg">✉️</span>
                            <a
                                href="mailto:a.noira@mundiapolis.ma"
                                className="font-medium underline underline-offset-2 hover:text-white"
                            >
                                a.noira@mundiapolis.ma
                            </a>
                        </div>
                        <div className="flex items-center gap-3 text-purple-100">
                            <span className="text-lg">💼</span>
                            <a
                                href="https://www.linkedin.com/in/abdelhamidn/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-medium underline underline-offset-2 hover:text-white"
                            >
                                linkedin.com/in/abdelhamidn
                            </a>
                        </div>
                        <div className="flex items-center gap-3 text-purple-100">
                            <span className="text-lg">💻</span>
                            <a
                                href="https://github.com/anoira16"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-medium underline underline-offset-2 hover:text-white"
                            >
                                github.com/anoira16
                            </a>
                        </div>
                        <div className="flex items-center gap-3 text-purple-100">
                            <span className="text-lg">📞</span>
                            <a
                                href="tel:+212708166116"
                                className="font-medium underline underline-offset-2 hover:text-white"
                            >
                                +212 708 166 116
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Link
                            href="/"
                            className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-purple-700 transition-colors hover:bg-purple-50"
                        >
                            View portfolio →
                        </Link>
                        <Link
                            href="/skills"
                            className="inline-block rounded-lg border border-purple-400 px-6 py-3 font-semibold text-white transition-colors hover:bg-purple-600"
                        >
                            See all skills →
                        </Link>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-lg font-bold text-slate-900">Quick facts</h2>
                    <dl className="grid gap-3 sm:grid-cols-2">
                        {[
                            { dt: "Location", dd: "Casablanca, Morocco (GMT+1)" },
                            { dt: "Languages", dd: "French, English, Arabic" },
                            { dt: "Availability", dd: "Open to new opportunities" },
                            { dt: "Remote", dd: "Yes — worldwide" },
                            { dt: "Response time", dd: "Within 24 hours" },
                            { dt: "Notice period", dd: "Negotiable" },
                        ].map(({ dt, dd }) => (
                            <div key={dt} className="flex items-start gap-3 rounded-lg bg-slate-50 p-3">
                                <dt className="w-28 flex-shrink-0 text-sm font-semibold text-slate-500">{dt}</dt>
                                <dd className="text-sm text-slate-800">{dd}</dd>
                            </div>
                        ))}
                    </dl>
                </section>
            </div>
        </>
    );
}
