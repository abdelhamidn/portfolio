import "./globals.css";
import type { Metadata } from "next";

const SITE = "https://abdelhamid.noira.net";

export const metadata: Metadata = {
    metadataBase: new URL(SITE),
    title: {
        default: "Abdelhamid NOIRA | DevOps Engineer, AI Automation & PM — Casablanca, Morocco",
        template: "%s | Abdelhamid NOIRA",
    },
    description:
        "DevOps Engineer, AI Automation Specialist & R&D Project Manager in Casablanca, Morocco. Expert in Kubernetes, Terraform, AWS/Azure/GCP, CI/CD, and Microsoft Power Platform. Delivered 80% productivity gains via helpdesk automation. Secured $100K GCP Cloud Program. 3+ years building cloud infrastructure and software products.",
    keywords: [
        "DevOps Engineer Casablanca",
        "DevOps Morocco",
        "Ingénieur DevOps Maroc",
        "Ingénieur DevOps Casablanca",
        "Cloud Engineer Morocco",
        "Platform Engineer Morocco",
        "R&D Engineer Morocco",
        "Abdelhamid NOIRA",
        "DevOps Casablanca",
        "DevOps Maroc",
        "Cloud Architect Casablanca",
        "Kubernetes Engineer Morocco",
        "Terraform Morocco",
        "CI/CD Engineer Morocco",
        "SRE Morocco",
        "Site Reliability Engineer Casablanca",
        "Software Engineer Morocco",
        "Full Stack Developer Casablanca",
        "Cloud Infrastructure Morocco",
        "AI Automation Specialist Morocco",
        "Power Platform Morocco",
        "IT Project Manager Casablanca",
        "Tech Lead Morocco",
        "DevOps Project Manager Morocco",
        "Microsoft Power Platform Maroc",
        "automatisation processus Maroc",
        "ingénieur cloud Casablanca",
        "GCP Morocco",
        "Azure DevOps Morocco",
        "مهندس ديف أوبس المغرب",
        "مهندس سحابي الدار البيضاء",
        "portfolio développeur maroc",
        "ingénieur cloud maroc",
    ],
    authors: [{ name: "Abdelhamid NOIRA", url: SITE }],
    creator: "Abdelhamid NOIRA",
    publisher: "Abdelhamid NOIRA",
    category: "Technology",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    alternates: {
        canonical: SITE,
        languages: {
            fr: SITE,
            en: SITE,
            de: SITE,
            es: SITE,
            pt: SITE,
            he: SITE,
            "x-default": SITE,
        },
    },
    openGraph: {
        type: "profile",
        locale: "fr_FR",
        alternateLocale: ["en_US", "de_DE", "es_ES", "pt_BR", "he_IL"],
        url: SITE,
        siteName: "Abdelhamid NOIRA",
        title: "Abdelhamid NOIRA | DevOps Engineer & AI Automation — Casablanca, Morocco",
        description:
            "DevOps Engineer, AI Automation Specialist & PM, Casablanca Morocco. Kubernetes · Terraform · Power Platform · AWS · Azure · GCP · CI/CD. 80% productivity gains.",
        images: [
            {
                url: "/imgs/profile.png",
                width: 1200,
                height: 630,
                alt: "Abdelhamid NOIRA — DevOps Engineer & AI Automation Specialist, Casablanca Morocco",
                type: "image/png",
            },
        ],
        firstName: "Abdelhamid",
        lastName: "NOIRA",
        username: "abdelhamidn",
        gender: "male",
    },
    twitter: {
        card: "summary_large_image",
        site: "@AnoiraTwit",
        creator: "@AnoiraTwit",
        title: "Abdelhamid NOIRA | DevOps Engineer & AI Automation — Casablanca",
        description:
            "DevOps Engineer, AI Automation & PM, Casablanca Morocco. Kubernetes · Terraform · Power Platform · AWS · Azure · CI/CD.",
        images: ["/imgs/profile.png"],
    },
    other: {
        google: "notranslate",
        "geo.region": "MA-05",
        "geo.placename": "Casablanca, Morocco",
        "geo.position": "33.5883;-7.6114",
        ICBM: "33.5883, -7.6114",
        "DC.title": "Abdelhamid NOIRA — DevOps Engineer & AI Automation Portfolio",
        "DC.creator": "Abdelhamid NOIRA",
        "DC.subject": "DevOps Engineering, Cloud Infrastructure, AI Automation, R&D, Casablanca, Morocco",
        "DC.description":
            "Portfolio of Abdelhamid NOIRA, DevOps Engineer, AI Automation Specialist and R&D PM based in Casablanca, Morocco",
        "DC.language": "fr, en, de, es, pt, he",
        "DC.coverage": "Casablanca, Morocco, Worldwide",
        "DC.rights": "© 2026 Abdelhamid NOIRA",
        "DC.type": "InteractiveResource",
    },
    icons: {
        icon: "/imgs/favicon.ico",
        shortcut: "/imgs/favicon.ico",
        apple: "/imgs/favicon.ico",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Person",
            "@id": `${SITE}/#person`,
            name: "Abdelhamid NOIRA",
            givenName: "Abdelhamid",
            familyName: "NOIRA",
            jobTitle: [
                "DevOps Engineer",
                "AI Automation Specialist",
                "R&D Project Manager",
                "Cloud Engineer",
                "IT Project Manager",
                "Tech Lead",
                "Full Stack Developer",
            ],
            description:
                "DevOps Engineer, AI Automation Specialist and R&D Project Manager based in Casablanca, Morocco. Specializes in cloud infrastructure (AWS, Azure, GCP), Kubernetes, Terraform, CI/CD pipelines, Microsoft Power Platform automation, and software development. Delivered 80% productivity gains via enterprise helpdesk automation achieving 98% ticket resolution. Secured $100,000 in GCP Cloud Program financing.",
            url: SITE,
            image: { "@type": "ImageObject", url: `${SITE}/imgs/profile.png` },
            sameAs: [
                "https://github.com/anoira16",
                "https://www.linkedin.com/in/abdelhamidn/",
                "https://x.com/AnoiraTwit",
                "https://www.reddit.com/u/abdelhamidnoira/",
            ],
            address: {
                "@type": "PostalAddress",
                addressLocality: "Casablanca",
                addressRegion: "Grand Casablanca-Settat",
                addressCountry: "MA",
            },
            email: "a.noira@mundiapolis.ma",
            telephone: "+212708166116",
            nationality: { "@type": "Country", name: "Morocco" },
            knowsLanguage: [
                { "@type": "Language", name: "French", alternateName: "fr" },
                { "@type": "Language", name: "English", alternateName: "en" },
                { "@type": "Language", name: "Arabic", alternateName: "ar" },
            ],
            knowsAbout: [
                "DevOps Engineering",
                "Cloud Infrastructure",
                "AI Automation",
                "Kubernetes",
                "Docker",
                "Terraform",
                "Ansible",
                "Amazon Web Services",
                "Microsoft Azure",
                "Google Cloud Platform",
                "CI/CD Pipelines",
                "GitLab CI/CD",
                "Jenkins",
                "GitHub Actions",
                "Microsoft Power Platform",
                "Power Automate",
                "Power Apps",
                "Prometheus",
                "Grafana",
                "Helm",
                "HashiCorp Vault",
                "Linux Administration",
                "Software Engineering",
                "React.js",
                "Next.js",
                "TypeScript",
                "Python",
                "Java",
                "Spring Boot",
                "Project Management",
                "Agile",
                "Scrum",
                "OpenAI API",
                "Apache Kafka",
                "Security Engineering",
                "OWASP",
            ],
            hasOccupation: {
                "@type": "Occupation",
                name: "DevOps Engineer & AI Automation Specialist",
                description:
                    "Designs and implements cloud infrastructure, CI/CD pipelines, DevOps practices, and AI-powered automation solutions.",
                occupationLocation: {
                    "@type": "City",
                    name: "Casablanca",
                    containedInPlace: { "@type": "Country", name: "Morocco" },
                },
                skills:
                    "Kubernetes, Docker, Terraform, Ansible, AWS, Azure, GCP, CI/CD, Linux, Python, Java, Microsoft Power Platform, Power Automate, Power Apps, AI Automation",
            },
            worksFor: {
                "@type": "Organization",
                name: "BeYs",
                address: {
                    "@type": "PostalAddress",
                    addressLocality: "Casablanca",
                    addressCountry: "MA",
                },
            },
            alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Université Mundiapolis",
                address: {
                    "@type": "PostalAddress",
                    addressLocality: "Casablanca",
                    addressCountry: "MA",
                },
            },
        },
        {
            "@type": "WebSite",
            "@id": `${SITE}/#website`,
            url: SITE,
            name: "Abdelhamid NOIRA — DevOps Engineer, AI Automation & R&D PM",
            alternateName: [
                "Portfolio Abdelhamid NOIRA",
                "Abdelhamid NOIRA DevOps",
                "Abdelhamid NOIRA Cloud Engineer",
            ],
            description:
                "Portfolio of Abdelhamid NOIRA, DevOps Engineer, AI Automation Specialist and R&D PM based in Casablanca, Morocco.",
            publisher: { "@id": `${SITE}/#person` },
            inLanguage: ["fr", "en", "de", "es", "pt", "he"],
            copyrightYear: 2026,
            copyrightHolder: { "@id": `${SITE}/#person` },
        },
        {
            "@type": "ProfilePage",
            "@id": `${SITE}/#webpage`,
            url: SITE,
            name: "Abdelhamid NOIRA — DevOps Engineer, AI Automation & PM | Casablanca, Morocco",
            headline: "DevOps Engineer, AI Automation Specialist & R&D PM based in Casablanca, Morocco",
            description:
                "Portfolio showcasing the professional work, projects, and skills of Abdelhamid NOIRA, DevOps Engineer and AI Automation Specialist in Casablanca, Morocco.",
            isPartOf: { "@id": `${SITE}/#website` },
            about: { "@id": `${SITE}/#person` },
            primaryImageOfPage: {
                "@type": "ImageObject",
                url: `${SITE}/imgs/profile.png`,
            },
            dateModified: "2026-05-30",
            inLanguage: ["fr", "en", "de", "es", "pt", "he"],
            breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: SITE },
                ],
            },
        },
        {
            "@type": "FAQPage",
            "@id": `${SITE}/#faq`,
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Who is Abdelhamid NOIRA?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Abdelhamid NOIRA is a DevOps Engineer, AI Automation Specialist, and R&D Project Manager based in Casablanca, Morocco. With 3+ years of professional experience, he specializes in cloud infrastructure (AWS, Azure, GCP), Kubernetes, Terraform, Docker, CI/CD pipelines, and Microsoft Power Platform automation. He has delivered 80% productivity gains through enterprise automation and secured $100,000 in GCP Cloud Program financing.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What DevOps and cloud services does Abdelhamid NOIRA offer?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Abdelhamid NOIRA offers: cloud infrastructure architecture and deployment (AWS, Azure, GCP), Kubernetes cluster setup and management, CI/CD pipeline design (GitLab CI, GitHub Actions, Jenkins), Infrastructure as Code with Terraform and Ansible, containerization with Docker, monitoring and observability (Prometheus, Grafana), security engineering, and Microsoft Power Platform automation solutions.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Abdelhamid NOIRA available for freelance or remote work?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Abdelhamid NOIRA is available for freelance consulting, remote contracts, and on-site engagements in Casablanca, Morocco and internationally. He has experience delivering projects for companies in Morocco and beyond. You can contact him at a.noira@mundiapolis.ma or through the contact form on this portfolio.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is Microsoft Power Platform and how can it benefit my business?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Microsoft Power Platform is a suite of low-code tools (Power Apps, Power Automate, Power BI, Power Virtual Agents) that enables rapid automation and app development. Abdelhamid NOIRA has used Power Platform to automate enterprise helpdesk workflows, achieving 80% productivity gains and 98% ticket resolution rates. It can automate repetitive processes, reduce manual work, and integrate with Microsoft 365 and Azure services.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What cloud certifications and achievements does Abdelhamid NOIRA have?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Abdelhamid NOIRA has secured $100,000 in financing through the Google Cloud Platform (GCP) Cloud Program, demonstrating expertise in cloud architecture and business acumen. His technical achievements include deploying production Kubernetes clusters, building multi-cloud CI/CD pipelines, and delivering enterprise-scale automation projects for Moroccan organizations.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How long does it take to set up a production Kubernetes cluster?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "A basic managed Kubernetes cluster (e.g., GKE, AKS, EKS) can be provisioned in minutes using Terraform. A production-ready cluster with monitoring (Prometheus/Grafana), security policies, ingress controllers, secret management (Vault), and CI/CD integration typically takes 1-2 weeks depending on complexity. Abdelhamid NOIRA provides end-to-end Kubernetes setup and ongoing management services.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is the DevOps engineering landscape in Morocco and Casablanca?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Morocco's tech ecosystem, particularly in Casablanca, is experiencing rapid growth in cloud adoption and DevOps practices. Companies are increasingly migrating to AWS, Azure, and GCP infrastructure. Abdelhamid NOIRA is among the leading DevOps engineers in Casablanca, helping local businesses modernize their infrastructure and adopt cloud-native practices.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is the difference between DevOps Engineering and Platform Engineering?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "DevOps Engineering focuses on bridging development and operations through culture, automation, and CI/CD practices. Platform Engineering is an evolution that builds internal developer platforms (IDPs) to provide self-service infrastructure. Abdelhamid NOIRA practices both disciplines — automating deployments via CI/CD pipelines while building scalable cloud platforms that development teams can use independently.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How did AI automation achieve 80% productivity gains in helpdesk operations?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Abdelhamid NOIRA designed an AI-powered helpdesk automation system using Microsoft Power Platform and AI/NLP technologies. The solution automatically categorizes, routes, and resolves common IT support tickets, achieving 80% reduction in manual ticket handling and 98% resolution rate. This freed the IT team to focus on complex issues while employees received faster, 24/7 support.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How can I hire Abdelhamid NOIRA for a DevOps or cloud project?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "You can hire Abdelhamid NOIRA by emailing a.noira@mundiapolis.ma, connecting on LinkedIn at linkedin.com/in/abdelhamidn, or using the contact form on his portfolio. He is available for cloud infrastructure projects, DevOps consulting, AI automation, Power Platform solutions, and technical project management in Morocco and internationally.",
                    },
                },
            ],
        },
    ],
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="fr">
            <head>
                <meta name="google" content="notranslate" />
                {/* Add your Google Search Console verification meta tag here: */}
                {/* <meta name="google-site-verification" content="YOUR_CODE_HERE" /> */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link rel="me" href="https://github.com/anoira16" />
                <link rel="me" href="https://www.linkedin.com/in/abdelhamidn/" />
                <link rel="me" href="https://x.com/AnoiraTwit" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className="antialiased">{children}</body>
        </html>
    );
}
