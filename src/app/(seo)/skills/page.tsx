import type { Metadata } from "next";
import Link from "next/link";

const SITE = "https://abdelhamid.noira.net";

export const metadata: Metadata = {
    title: "Skills & Technologies — DevOps, Cloud, AI Automation",
    description:
        "Complete skills taxonomy of Abdelhamid NOIRA: Kubernetes, Terraform, Docker, AWS, Azure, GCP, Microsoft Power Platform, CI/CD, Python, Java, TypeScript, and more — DevOps Engineer in Casablanca, Morocco.",
    alternates: { canonical: `${SITE}/skills/` },
    openGraph: {
        title: "Skills & Technologies | Abdelhamid NOIRA — DevOps Engineer Casablanca",
        description:
            "Full technology stack of Abdelhamid NOIRA, DevOps Engineer in Morocco: cloud infrastructure, automation, programming, security, and AI tools.",
        url: `${SITE}/skills/`,
        images: [{ url: "/imgs/profile.png", width: 1200, height: 630 }],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE}/skills/#webpage`,
    url: `${SITE}/skills/`,
    name: "Skills & Technologies — Abdelhamid NOIRA, DevOps Engineer Casablanca Morocco",
    description:
        "Complete skills taxonomy of Abdelhamid NOIRA covering cloud infrastructure, DevOps, AI automation, programming, and more.",
    isPartOf: { "@id": `${SITE}/#website` },
    about: { "@id": `${SITE}/#person` },
    breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE },
            { "@type": "ListItem", position: 2, name: "Skills", item: `${SITE}/skills/` },
        ],
    },
};

type Skill = { name: string; description: string };
type Category = { title: string; slug: string; skills: Skill[] };

const categories: Category[] = [
    {
        title: "Cloud Infrastructure & DevOps",
        slug: "devops",
        skills: [
            {
                name: "Kubernetes",
                description:
                    "Kubernetes (K8s) is the industry-standard container orchestration platform, enabling automated deployment, scaling, and management of containerized applications. Abdelhamid NOIRA architects production-grade Kubernetes clusters on GKE, AKS, and EKS, configuring namespaces, RBAC, network policies, ingress controllers (Nginx, Traefik), and Horizontal Pod Autoscalers. He implements Helm charts for reproducible deployments and integrates GitOps workflows with ArgoCD. His Kubernetes expertise covers multi-environment setups (dev, staging, prod), cluster monitoring with Prometheus and Grafana, and security hardening with Falco and OPA Gatekeeper. This expertise is directly applicable to Moroccan businesses migrating from monolithic to microservices architectures.",
            },
            {
                name: "Docker",
                description:
                    "Docker is the foundational containerization technology that packages applications and their dependencies into portable, reproducible containers. Abdelhamid NOIRA uses Docker throughout the software delivery lifecycle — writing optimized multi-stage Dockerfiles to minimize image size, managing private registries (Docker Hub, GitHub Container Registry, GitLab Registry), and orchestrating multi-service applications with Docker Compose for local development. He applies security best practices including running containers as non-root users, scanning images with Trivy and Snyk, and implementing read-only filesystems. Docker forms the basis of his CI/CD pipelines, enabling consistent builds across development, staging, and production environments.",
            },
            {
                name: "Terraform",
                description:
                    "Terraform is the leading Infrastructure as Code (IaC) tool that enables declarative, version-controlled provisioning of cloud resources across AWS, Azure, GCP, and dozens of other providers. Abdelhamid NOIRA writes modular Terraform configurations for complete cloud environments — networking (VPCs, subnets, security groups), compute (VMs, Kubernetes clusters, serverless functions), databases, storage, and IAM. He implements remote state management with Terraform Cloud and S3 backends, uses workspaces for multi-environment management, and integrates Terraform runs into CI/CD pipelines via GitLab CI and GitHub Actions. His IaC approach enables infrastructure changes to be reviewed, versioned, and rolled back like application code.",
            },
            {
                name: "Ansible",
                description:
                    "Ansible is an agentless IT automation tool used for configuration management, application deployment, and orchestration. Abdelhamid NOIRA writes idempotent Ansible playbooks and roles to automate Linux server provisioning, software installation, security hardening (CIS benchmarks), and application configuration. He uses Ansible in combination with Terraform — Terraform provisions infrastructure, Ansible configures it. His playbooks cover tasks such as installing and configuring monitoring agents, setting up container runtimes, managing SSH keys, and applying OS-level security patches. Ansible's human-readable YAML syntax makes his automation code accessible to the entire team.",
            },
            {
                name: "Helm",
                description:
                    "Helm is the package manager for Kubernetes, providing templating and lifecycle management for complex application deployments. Abdelhamid NOIRA creates and maintains Helm charts for internal microservices, parameterizing environment-specific values (replica counts, resource limits, ingress hostnames, secrets references) and packaging them for reuse. He uses Helm hooks for database migrations, implements chart versioning in private registries, and leverages community charts (cert-manager, external-dns, ingress-nginx) as dependencies. Helm significantly reduces the YAML verbosity of raw Kubernetes manifests and enables consistent, one-command deployments across multiple environments.",
            },
            {
                name: "HashiCorp Vault",
                description:
                    "HashiCorp Vault is the industry standard for secrets management, dynamic credentials, and encryption as a service. Abdelhamid NOIRA deploys and operates Vault in production Kubernetes environments using the Vault Agent Injector and External Secrets Operator to securely inject secrets into workloads without exposing them in environment variables or ConfigMaps. He configures Vault's Auth methods (Kubernetes, LDAP, AppRole), secret engines (KV, database dynamic credentials, PKI for certificate management), and audit logging. This eliminates hard-coded credentials from codebases and CI/CD pipelines, directly addressing common security vulnerabilities in Moroccan enterprise environments.",
            },
            {
                name: "ArgoCD",
                description:
                    "ArgoCD is a GitOps continuous delivery tool for Kubernetes that keeps cluster state synchronized with Git repository definitions. Abdelhamid NOIRA implements GitOps workflows where infrastructure and application manifests live in Git and ArgoCD automatically detects and applies drift. He configures ArgoCD with ApplicationSets for multi-cluster deployments, implements progressive delivery with Argo Rollouts (canary, blue-green), and sets up RBAC for team-based access control. This approach makes deployments auditable, reversible, and self-healing — if someone manually modifies a cluster resource, ArgoCD automatically reconciles it back to the desired state.",
            },
        ],
    },
    {
        title: "AI Automation & Microsoft Power Platform",
        slug: "ai-automation",
        skills: [
            {
                name: "Microsoft Power Platform",
                description:
                    "Microsoft Power Platform (Power Apps, Power Automate, Power BI, Power Virtual Agents) is a low-code suite that accelerates digital transformation. Abdelhamid NOIRA has used Power Platform to deliver enterprise-grade automation solutions, including an AI-powered helpdesk system that achieved 80% productivity gains and 98% ticket resolution rates. He builds Power Apps for custom business interfaces, Power Automate flows for process automation (approval workflows, cross-system integrations, scheduled reports), Power BI dashboards for operational KPIs, and Power Virtual Agents chatbots. His Power Platform solutions integrate with Microsoft 365, Dynamics 365, SharePoint, and Azure services via hundreds of pre-built connectors and custom APIs.",
            },
            {
                name: "OpenAI API & AI Integration",
                description:
                    "AI integration using OpenAI APIs (GPT-4, embeddings, vision) enables intelligent automation and decision support in enterprise applications. Abdelhamid NOIRA designs and implements AI pipelines that process natural language inputs, classify content, generate responses, and extract structured data from unstructured sources. His helpdesk automation project uses NLP to understand and categorize IT support requests automatically, routing them to the correct resolution path without human intervention. He integrates AI capabilities into existing business workflows via REST APIs, webhooks, and Power Automate, making AI accessible to non-technical teams while maintaining data privacy and compliance requirements.",
            },
            {
                name: "LangChain & RAG",
                description:
                    "LangChain is a framework for building LLM-powered applications with chains of reasoning, memory, and tool use. Retrieval-Augmented Generation (RAG) extends AI models with enterprise knowledge bases, enabling accurate, grounded responses from internal documentation. Abdelhamid NOIRA uses these technologies to build intelligent internal tools that query company wikis, ticket systems, and knowledge bases, dramatically reducing the time teams spend searching for information. These solutions combine vector databases (Pinecone, Weaviate), embedding models, and LLMs to deliver context-aware AI assistance tailored to specific organizational knowledge.",
            },
        ],
    },
    {
        title: "Cloud Providers",
        slug: "cloud-providers",
        skills: [
            {
                name: "Amazon Web Services (AWS)",
                description:
                    "AWS is the world's leading cloud platform with 200+ services. Abdelhamid NOIRA architects and operates AWS environments using EC2, EKS, RDS, S3, CloudFront, Route 53, IAM, VPC, Lambda, SQS, SNS, CloudWatch, and more. He applies the AWS Well-Architected Framework pillars (operational excellence, security, reliability, performance efficiency, cost optimization) to design production-grade infrastructure. His experience includes multi-account AWS Organizations setups, centralized logging with CloudWatch Logs Insights, cost optimization through Reserved Instances and Savings Plans, and disaster recovery strategies with cross-region replication.",
            },
            {
                name: "Microsoft Azure",
                description:
                    "Azure is Microsoft's cloud platform, deeply integrated with enterprise tools like Microsoft 365, Active Directory, and Power Platform. Abdelhamid NOIRA works with Azure Kubernetes Service (AKS), Azure Container Registry (ACR), Azure DevOps pipelines, Azure Monitor, App Service, Azure SQL, Blob Storage, Key Vault, and Azure Active Directory. His Azure expertise is complemented by his Microsoft Power Platform skills, enabling end-to-end solutions that span Azure infrastructure and Microsoft 365 productivity tools. He implements Azure Policy for governance and Azure Security Center recommendations for compliance.",
            },
            {
                name: "Google Cloud Platform (GCP)",
                description:
                    "GCP is renowned for its data analytics, Kubernetes (GKE is the reference K8s implementation), and AI/ML capabilities. Abdelhamid NOIRA has deep GCP experience, having secured $100,000 in GCP Cloud Program financing for innovative cloud projects. He works with GKE, Cloud Run, Cloud SQL, BigQuery, Cloud Storage, Pub/Sub, Cloud Build, Artifact Registry, and Google Cloud Monitoring. His GCP expertise includes cost governance with budget alerts and quotas, identity management with Workload Identity for zero-secret deployments, and leveraging GCP's Vertex AI for machine learning workloads.",
            },
        ],
    },
    {
        title: "CI/CD & Version Control",
        slug: "cicd",
        skills: [
            {
                name: "GitLab CI/CD",
                description:
                    "GitLab CI/CD is a complete DevSecOps platform with built-in pipelines, registry, security scanning, and deployment automation. Abdelhamid NOIRA designs multi-stage GitLab pipelines covering build, test, SAST/DAST security scanning, container image build and push, and environment deployments with manual approval gates. He uses GitLab environments for tracking deployment history, merge request pipelines for pre-merge validation, and GitLab's Kubernetes integration for direct cluster deployments. His pipelines enforce quality gates — no code reaches production without passing unit tests, linting, and security scans.",
            },
            {
                name: "GitHub Actions",
                description:
                    "GitHub Actions enables workflow automation directly within GitHub repositories using YAML-defined workflows triggered by code events. Abdelhamid NOIRA builds GitHub Actions workflows for CI/CD, dependency updates (Dependabot integration), automated releases with semantic versioning, infrastructure deployments via Terraform, and cross-repository automation. He creates reusable composite actions and custom Docker-based actions for organization-wide workflow standardization, reducing duplication across dozens of repositories. GitHub Actions OIDC integration eliminates the need for long-lived credentials when deploying to AWS, Azure, or GCP.",
            },
            {
                name: "Jenkins",
                description:
                    "Jenkins is the battle-tested open-source automation server powering CI/CD at thousands of enterprises. Abdelhamid NOIRA configures Jenkins with declarative Pipelines (Jenkinsfile), distributed builds using agent pods on Kubernetes, shared libraries for reusable pipeline logic, and plugin ecosystem integration (SonarQube, Nexus, Slack, JIRA). He migrates legacy Jenkins setups to modern Kubernetes-native CI/CD solutions and maintains hybrid environments during transition periods. Jenkins remains relevant for organizations with complex existing automation that is difficult to migrate to cloud-native alternatives.",
            },
        ],
    },
    {
        title: "Security Engineering",
        slug: "security",
        skills: [
            {
                name: "OWASP & Application Security",
                description:
                    "OWASP (Open Web Application Security Project) defines the standard framework for identifying and mitigating web application vulnerabilities. Abdelhamid NOIRA applies OWASP Top 10 principles throughout the software development lifecycle — performing threat modeling, secure code reviews, and integrating SAST (SonarQube, Semgrep) and DAST (OWASP ZAP) tools into CI/CD pipelines. He implements security headers (CSP, HSTS, X-Frame-Options), OAuth 2.0 and OIDC authentication flows, and input validation patterns. His DevSecOps approach ensures security is a shared responsibility across the entire team rather than a post-deployment afterthought.",
            },
            {
                name: "Trivy & Container Security",
                description:
                    "Container security is critical when workloads run at scale on Kubernetes. Abdelhamid NOIRA integrates Trivy into CI/CD pipelines to scan container images for known CVEs in OS packages and application dependencies, failing builds on high-severity findings. He complements image scanning with Falco for runtime threat detection, OPA/Gatekeeper for admission control policies (preventing privileged containers, enforcing resource limits), and network policies to restrict pod-to-pod communication. This defense-in-depth approach addresses security at build time, admission time, and runtime.",
            },
        ],
    },
    {
        title: "Monitoring & Observability",
        slug: "monitoring",
        skills: [
            {
                name: "Prometheus & Grafana",
                description:
                    "Prometheus is the CNCF-standard metrics collection system, and Grafana is the leading visualization platform for operational dashboards. Abdelhamid NOIRA deploys the kube-prometheus-stack Helm chart to instrument entire Kubernetes clusters, configuring ServiceMonitors for application-level metrics, PrometheusRules for alerting (PagerDuty, Slack integration), and recording rules for performance optimization. His Grafana dashboards cover cluster health, application SLIs/SLOs, infrastructure costs, and business KPIs. He implements multi-tenant Grafana with role-based access, ensuring teams see only their relevant dashboards.",
            },
            {
                name: "Loki & Grafana Stack",
                description:
                    "Grafana Loki is a horizontally scalable, cost-efficient log aggregation system designed to work alongside Prometheus. Abdelhamid NOIRA deploys the full LGTM stack (Loki, Grafana, Tempo, Mimir) for complete observability coverage — metrics, logs, traces, and long-term metrics storage. He configures Promtail agents on Kubernetes nodes to collect and ship logs to Loki with structured labels, enabling efficient log queries using LogQL. Correlation between logs, metrics, and traces in Grafana allows rapid root cause analysis during incidents.",
            },
        ],
    },
    {
        title: "Programming Languages",
        slug: "programming",
        skills: [
            {
                name: "Python",
                description:
                    "Python is Abdelhamid NOIRA's primary scripting and automation language, used for infrastructure tooling, data processing, AI integration, and API development. He writes Python scripts for cloud resource management (boto3, azure-sdk), custom Kubernetes operators, data pipeline automation, and OpenAI API integrations. In the context of AI automation projects, Python orchestrates LLM calls, processes structured and unstructured data, and builds REST APIs with FastAPI. His Python code follows PEP 8 standards, uses type hints, and is packaged with Docker for deployment in Kubernetes environments.",
            },
            {
                name: "TypeScript",
                description:
                    "TypeScript is Abdelhamid NOIRA's primary language for frontend and full-stack web development, bringing static typing and modern tooling to JavaScript ecosystems. He builds production Next.js applications (including this portfolio), React component libraries, and Node.js backend services in TypeScript. His TypeScript code leverages strict type checking, generic types, utility types, and Zod for runtime validation. He integrates TypeScript projects into CI/CD pipelines with automated type checking, ESLint, and Prettier to maintain code quality at scale.",
            },
            {
                name: "Java",
                description:
                    "Java is Abdelhamid NOIRA's primary enterprise backend language, used extensively with the Spring Boot framework for building scalable microservices and APIs. He designs RESTful and GraphQL APIs following clean architecture principles (domain-driven design, hexagonal architecture), implements Spring Security for OAuth2 authentication, and uses Spring Data JPA with PostgreSQL. His Java microservices are containerized with Docker, deployed on Kubernetes, and exposed via API Gateway patterns. Java's strong typing, mature ecosystem, and enterprise features make it ideal for the complex business logic of Moroccan enterprise software projects.",
            },
            {
                name: "C#",
                description:
                    "C# is used by Abdelhamid NOIRA primarily in the context of Microsoft ecosystem projects — Power Platform custom connectors, Azure Functions, and Microsoft 365 integrations. He writes C# for Azure Functions triggered by HTTP, queues, and timers, implementing serverless backend logic for Power Apps custom APIs and Microsoft Teams integrations. His C# code leverages the .NET 8 minimal API patterns for lightweight HTTP services, Entity Framework Core for database access, and Azure SDK for cloud service integration. C# naturally complements Power Platform work, as the underlying platform runs on .NET.",
            },
        ],
    },
    {
        title: "Databases",
        slug: "databases",
        skills: [
            {
                name: "PostgreSQL",
                description:
                    "PostgreSQL is the preferred relational database for Abdelhamid NOIRA's backend projects, valued for its ACID compliance, advanced querying (window functions, CTEs, JSONB), and extensibility. He designs normalized schemas, writes optimized queries, implements database migrations with Flyway or Liquibase, and configures replication and connection pooling (PgBouncer) for high-availability production setups. In Kubernetes environments, he deploys PostgreSQL using the CloudNativePG operator for automated failover and backup management.",
            },
            {
                name: "MongoDB",
                description:
                    "MongoDB's document model suits applications with flexible, hierarchical data structures. Abdelhamid NOIRA uses MongoDB for projects requiring dynamic schemas, high write throughput, and horizontal sharding. He designs document schemas optimized for read patterns, implements indexes (compound, text, geospatial), uses the aggregation pipeline for complex analytics, and operates MongoDB Atlas in cloud environments. Change Streams enable real-time event-driven architectures by streaming database changes to Kafka or other consumers.",
            },
            {
                name: "Redis",
                description:
                    "Redis is an in-memory data structure store used as a cache, message broker, and real-time data store. Abdelhamid NOIRA integrates Redis for application caching (reducing database load), session storage, rate limiting, distributed locking, and pub/sub messaging. He deploys Redis Cluster on Kubernetes for high availability and uses Redis Sentinel for automatic failover in simpler setups. Proper cache invalidation strategies and TTL policies are critical to maintaining data consistency in distributed systems.",
            },
        ],
    },
    {
        title: "Message Queues",
        slug: "messaging",
        skills: [
            {
                name: "Apache Kafka",
                description:
                    "Apache Kafka is the de facto standard for high-throughput, fault-tolerant event streaming in distributed systems. Abdelhamid NOIRA designs event-driven microservice architectures using Kafka as the central message bus, configuring topics with appropriate partition counts and replication factors. He implements producers and consumers in Java (Spring Kafka) and Python (kafka-python), uses Kafka Connect for database change data capture (CDC) with Debezium, and monitors cluster health with Kafka Exporter and Grafana. Kafka enables decoupled, scalable systems where services communicate asynchronously.",
            },
            {
                name: "RabbitMQ",
                description:
                    "RabbitMQ is a mature message broker implementing AMQP, well-suited for task queues, RPC patterns, and routing-based message distribution. Abdelhamid NOIRA uses RabbitMQ for background job processing, asynchronous email sending, and reliable event delivery in Spring Boot and Python applications. He configures exchanges (direct, topic, fanout, headers), binding keys, dead-letter queues for failed message handling, and consumer acknowledgment modes. RabbitMQ Management UI provides operational visibility into queue depths and consumer rates.",
            },
        ],
    },
    {
        title: "Frontend & Full Stack",
        slug: "frontend",
        skills: [
            {
                name: "React.js",
                description:
                    "React is Abdelhamid NOIRA's primary UI library for building interactive web applications. He creates component libraries with accessibility (WCAG 2.1 AA), implements state management patterns (Context API, Zustand, Redux Toolkit), handles async data fetching with TanStack Query, and builds form validation with React Hook Form and Zod. His React applications are performance-optimized with code splitting, lazy loading, memoization, and virtual DOM minimization. This portfolio itself demonstrates his React expertise through smooth animations, dark mode, internationalization, and responsive design.",
            },
            {
                name: "Next.js",
                description:
                    "Next.js is the leading React framework for production web applications, offering server-side rendering, static generation, App Router with React Server Components, and built-in optimization. Abdelhamid NOIRA uses Next.js for SEO-critical projects, multi-language portfolios, SaaS applications, and e-commerce platforms. He configures Next.js for static export (this portfolio), implements metadata API and JSON-LD structured data for SEO, uses Next/Image for optimized image delivery, and deploys on Vercel, Nginx, and containerized environments. His Next.js projects follow App Router best practices with streaming, Suspense, and server actions.",
            },
        ],
    },
    {
        title: "Microsoft Ecosystem",
        slug: "microsoft",
        skills: [
            {
                name: "Power Automate",
                description:
                    "Power Automate is Microsoft's cloud-based automation service for creating workflows that connect 500+ apps and services. Abdelhamid NOIRA builds automated flows for document approval processes, employee onboarding, data synchronization between systems, and IT helpdesk automation. His AI-powered flows use AI Builder for document processing, custom connectors to integrate external APIs, and attended/unattended RPA for automating legacy desktop applications. Power Automate is the backbone of his 80% productivity improvement project in enterprise IT operations.",
            },
            {
                name: "Dynamics 365 & SharePoint",
                description:
                    "Microsoft Dynamics 365 provides CRM and ERP capabilities tightly integrated with the Microsoft cloud. Abdelhamid NOIRA configures Dynamics 365 Sales, Customer Service, and integrates them with Power Platform for custom business processes. He builds SharePoint Online sites, document libraries, and lists that serve as data sources for Power Apps and Power Automate flows. SharePoint's integration with Microsoft Teams creates unified digital workplaces where collaboration, document management, and process automation coexist seamlessly.",
            },
        ],
    },
    {
        title: "Linux & Systems",
        slug: "systems",
        skills: [
            {
                name: "Linux Administration",
                description:
                    "Linux is the foundation of virtually all cloud infrastructure, and deep Linux expertise is essential for a DevOps engineer. Abdelhamid NOIRA administers Ubuntu, RHEL/CentOS, and Alpine Linux systems — configuring systemd services, managing users and permissions, optimizing kernel parameters (net.core.somaxconn, vm.swappiness) for containerized workloads, implementing firewall rules with iptables/nftables, and troubleshooting performance issues with strace, perf, and tcpdump. His Linux knowledge extends to the container layer — understanding cgroups and namespaces that underpin Docker and Kubernetes.",
            },
            {
                name: "Bash Scripting",
                description:
                    "Bash scripting automates system administration tasks, deployment scripts, data transformations, and CI/CD helper functions. Abdelhamid NOIRA writes robust Bash scripts with proper error handling (set -euo pipefail), input validation, and logging. He uses Bash for startup scripts, backup automation, log rotation, environment setup, and glue code in CI/CD pipelines. While Python handles complex logic, Bash excels at chaining Unix tools (grep, awk, sed, jq, curl) for quick operational automation in shell environments where Python may not be available.",
            },
        ],
    },
];

export default function SkillsPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="space-y-12">
                <header className="space-y-4">
                    <div className="text-sm font-medium uppercase tracking-widest text-purple-700">
                        Skills & Technologies
                    </div>
                    <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900">
                        Technical Skills Taxonomy
                    </h1>
                    <p className="text-lg leading-relaxed text-slate-600">
                        A comprehensive overview of the technologies, platforms, and tools used by{" "}
                        <strong>Abdelhamid NOIRA</strong>, DevOps Engineer, AI Automation Specialist
                        and R&D Project Manager based in <strong>Casablanca, Morocco</strong>.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                        {categories.map((cat) => (
                            <a
                                key={cat.slug}
                                href={`#${cat.slug}`}
                                className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600 transition-colors hover:border-purple-400 hover:text-purple-700"
                            >
                                {cat.title}
                            </a>
                        ))}
                    </div>
                </header>

                {categories.map((cat) => (
                    <section key={cat.slug} id={cat.slug} className="scroll-mt-20 space-y-6">
                        <h2 className="border-b border-slate-100 pb-3 text-2xl font-bold text-slate-900">
                            {cat.title}
                        </h2>
                        <div className="grid gap-6 sm:grid-cols-1">
                            {cat.skills.map((skill) => (
                                <article key={skill.name} className="rounded-xl border border-slate-100 bg-slate-50 p-6">
                                    <h3 className="mb-3 text-lg font-bold text-slate-900">
                                        {skill.name}
                                    </h3>
                                    <p className="leading-relaxed text-slate-600 text-sm">
                                        {skill.description}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </section>
                ))}

                <section className="rounded-xl bg-purple-50 p-8 text-center">
                    <h2 className="mb-3 text-xl font-bold text-slate-900">
                        Need a DevOps engineer or AI automation specialist in Morocco?
                    </h2>
                    <p className="mb-6 text-slate-600">
                        Abdelhamid NOIRA is available for cloud infrastructure, CI/CD, Kubernetes,
                        Power Platform, and AI automation projects — in Casablanca and remotely worldwide.
                    </p>
                    <Link
                        href="/hire-me"
                        className="inline-block rounded-lg bg-purple-700 px-6 py-3 font-semibold text-white transition-colors hover:bg-purple-800"
                    >
                        Hire Me →
                    </Link>
                </section>
            </div>
        </>
    );
}
