import type { Metadata } from "next";
import Link from "next/link";

const SITE = "https://abdelhamid.noira.net";

export const metadata: Metadata = {
    title: "Sitemap — Abdelhamid NOIRA Portfolio",
    description:
        "Sitemap of Abdelhamid NOIRA's portfolio website. Navigate all pages: portfolio, products, blog, skills, hire-me, and location pages.",
    alternates: { canonical: `${SITE}/sitemap/` },
    robots: { index: true, follow: true },
};

const sections = [
    {
        title: "Main Portfolio",
        links: [
            { href: "/", label: "Home — Portfolio", desc: "Main portfolio page with all sections" },
        ],
    },
    {
        title: "Products & Projects",
        links: [
            { href: "/products/anom", label: "ANØM — AI Platform", desc: "AI-powered platform" },
            { href: "/products/notehub", label: "NoteHub — Social Network", desc: "Social networking platform" },
            { href: "/products/mtech", label: "MTech Platform", desc: "Tech platform" },
            { href: "/products/modezoe", label: "ModeZoe", desc: "Fashion platform" },
            { href: "/products/mncloud", label: "MNCloud", desc: "Cloud services platform" },
            { href: "/products/dqplugin", label: "DQ-Plugin", desc: "Data quality plugin" },
            { href: "/products/sysmed", label: "SysMed — Medical Platform", desc: "Medical information system" },
            { href: "/products/secdojo", label: "SecDojo", desc: "Cybersecurity training platform" },
            { href: "/products/homesense", label: "HomeSense — Smart Home", desc: "IoT smart home system" },
            { href: "/products/frmje", label: "FRMJE Platform", desc: "Platform for youth entrepreneurship" },
            { href: "/products/bbcr", label: "BBCR Call Center", desc: "Call center management system" },
            { href: "/products/kenzmedia", label: "KenzMedia Platform", desc: "Media platform" },
            { href: "/products/viadis", label: "Viadis Platform", desc: "Platform solution" },
        ],
    },
    {
        title: "About & Expertise",
        links: [
            { href: "/skills", label: "Skills & Technologies", desc: "Complete skills taxonomy with descriptions" },
            { href: "/hire-me", label: "Hire Me", desc: "Work with Abdelhamid — services & contact" },
        ],
    },
    {
        title: "Location Pages",
        links: [
            { href: "/casablanca", label: "DevOps Engineer Casablanca", desc: "DevOps services in Casablanca, Morocco (FR)" },
            { href: "/morocco", label: "DevOps Engineer Morocco", desc: "DevOps engineering across Morocco (EN)" },
        ],
    },
    {
        title: "Blog",
        links: [
            { href: "/blog", label: "Blog Index", desc: "All technical articles" },
            { href: "/blog/devops-maroc-2026", label: "L'Ingénierie DevOps au Maroc en 2026", desc: "State of DevOps in Morocco (FR)" },
            { href: "/blog/power-platform-automatisation", label: "Power Platform : Automatiser 80% des Processus", desc: "AI automation with Power Platform (FR)" },
            { href: "/blog/cloud-infrastructure-maroc", label: "Infrastructure Cloud au Maroc : GCP, Terraform, K8s", desc: "Cloud-native infrastructure guide (FR)" },
        ],
    },
    {
        title: "Site",
        links: [
            { href: "/sitemap", label: "Sitemap", desc: "This page — all site pages" },
        ],
    },
];

export default function SitemapPage() {
    return (
        <div className="space-y-10">
            <header className="space-y-3">
                <div className="text-sm font-medium uppercase tracking-widest text-purple-700">
                    Navigation
                </div>
                <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
                    Site Map
                </h1>
                <p className="text-slate-600">
                    All pages on <strong>abdelhamid.noira.net</strong> — the portfolio of Abdelhamid NOIRA,
                    DevOps Engineer & AI Automation Specialist based in Casablanca, Morocco.
                </p>
            </header>

            {sections.map((section) => (
                <section key={section.title} className="space-y-3">
                    <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
                        {section.title}
                    </h2>
                    <ul className="space-y-2">
                        {section.links.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="group flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-slate-50"
                                >
                                    <span className="mt-0.5 text-purple-400 text-sm">→</span>
                                    <div>
                                        <span className="font-medium text-purple-700 group-hover:underline">
                                            {link.label}
                                        </span>
                                        <span className="block text-sm text-slate-500">{link.desc}</span>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
            ))}

            <section className="rounded-xl bg-slate-50 p-6 text-sm text-slate-500">
                <p>
                    Machine-readable sitemap:{" "}
                    <a
                        href="/sitemap.xml"
                        className="font-medium text-purple-700 hover:underline"
                    >
                        /sitemap.xml
                    </a>
                </p>
                <p className="mt-1">
                    Last updated: <time dateTime="2026-05-30">May 30, 2026</time>
                </p>
            </section>
        </div>
    );
}
