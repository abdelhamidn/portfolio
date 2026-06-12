/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";

const SITE = "https://abdelhamid.noira.net";

export const metadata: Metadata = {
    title: "Infrastructure Cloud au Maroc : GCP, Terraform et Kubernetes en Production",
    description:
        "Guide pratique pour migrer vers une infrastructure cloud-native au Maroc. Retour d'expérience avec Google Cloud Platform, Terraform IaC, et Kubernetes. $100K GCP Cloud Program. Par Abdelhamid NOIRA, DevOps Engineer Casablanca.",
    alternates: { canonical: `${SITE}/blog/cloud-infrastructure-maroc/` },
    openGraph: {
        title: "Cloud Infrastructure au Maroc : GCP, Terraform, Kubernetes | Abdelhamid NOIRA",
        description:
            "Guide complet cloud-native pour entreprises marocaines. GCP, Terraform, Kubernetes. Retour d'expérience $100K GCP Cloud Program.",
        url: `${SITE}/blog/cloud-infrastructure-maroc/`,
        type: "article",
        images: [{ url: "/imgs/profile.png", width: 1200, height: 630 }],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE}/blog/cloud-infrastructure-maroc/#article`,
    url: `${SITE}/blog/cloud-infrastructure-maroc/`,
    headline: "Infrastructure Cloud au Maroc : GCP, Terraform et Kubernetes en Production",
    description:
        "Guide pratique pour migrer vers une infrastructure cloud-native avec GCP, Terraform, et Kubernetes au Maroc.",
    author: { "@id": `${SITE}/#person` },
    publisher: { "@id": `${SITE}/#person` },
    datePublished: "2026-04-28",
    dateModified: "2026-05-30",
    inLanguage: "fr",
    isPartOf: { "@id": `${SITE}/blog/#blog` },
    keywords: "cloud infrastructure Maroc, GCP Maroc, Terraform Maroc, Kubernetes Maroc, cloud native Casablanca",
    breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE },
            { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog/` },
            { "@type": "ListItem", position: 3, name: "Cloud Infrastructure Maroc", item: `${SITE}/blog/cloud-infrastructure-maroc/` },
        ],
    },
};

export default function Article3() {
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
                        <time dateTime="2026-04-28">28 avril 2026</time>
                        <span>·</span>
                        <span>11 min de lecture</span>
                        <span>·</span>
                        <span className="rounded-full bg-purple-100 px-2 py-0.5 font-medium text-purple-700">FR</span>
                    </div>
                    <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 lg:text-4xl">
                        Infrastructure Cloud au Maroc :<br />
                        GCP, Terraform et Kubernetes en Production
                    </h1>
                    <p className="text-lg leading-relaxed text-slate-600">
                        Un guide pratique basé sur des projets réels au Maroc. Comment passer d'une infrastructure
                        serveurs physiques ou VMs non gérées à une stack cloud-native sur Google Cloud Platform,
                        avec Terraform pour l'Infrastructure as Code et Kubernetes pour l'orchestration.
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                        {["GCP", "Terraform", "Kubernetes", "Cloud Native", "IaC", "Maroc"].map((tag) => (
                            <span key={tag} className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
                                {tag}
                            </span>
                        ))}
                    </div>
                </header>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900">Pourquoi GCP pour les projets marocains ?</h2>
                    <p className="leading-relaxed text-slate-600">
                        Quand on pense cloud au Maroc, AWS et Azure viennent naturellement en tête — et pour de
                        bonnes raisons. Pourtant, Google Cloud Platform présente des avantages spécifiques qui
                        en font un choix excellent pour certains types de projets marocains, notamment ceux
                        nécessitant des capacités IA/ML avancées, de l'analyse de données à grande échelle,
                        ou un Kubernetes managé de première classe.
                    </p>
                    <p className="leading-relaxed text-slate-600">
                        GCP est le berceau de Kubernetes — Google a créé le projet Borg (l'ancêtre de K8s) et
                        Google Kubernetes Engine (GKE) reste l'implémentation la plus mature et la plus feature-rich
                        disponible. Pour les organisations qui investissent sérieusement dans Kubernetes,
                        GKE offre des fonctionnalités (autopilot mode, release channels, Workload Identity) qui
                        simplifient considérablement les opérations.
                    </p>
                    <p className="leading-relaxed text-slate-600">
                        J'ai personnellement obtenu 100 000 $ de crédits GCP via le GCP Cloud Program pour
                        financer un projet d'infrastructure cloud innovant. Ce programme — souvent méconnu —
                        est accessible aux startups et PME marocaines qui développent des solutions cloud-native
                        ou IA. C'est une opportunité financière significative que je conseille d'explorer à
                        toute organisation qui démarre sa migration cloud.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900">
                        Terraform : l'Infrastructure as Code qui change tout
                    </h2>
                    <p className="leading-relaxed text-slate-600">
                        Avant d'adopter Terraform, la plupart des équipes gèrent leur infrastructure via des
                        consoles web, des scripts shell fragiles, ou pire — de la documentation "manuelle"
                        que personne ne suit vraiment. Le résultat : des environnements driftés, des différences
                        entre dev et production, des incidents causés par des changements non tracés.
                    </p>
                    <p className="leading-relaxed text-slate-600">
                        Terraform résout ce problème en traitant l'infrastructure comme du code : versionné,
                        reviewé, testé, et déployé de manière reproductible. Voici à quoi ressemble une
                        configuration Terraform pour un cluster GKE de base :
                    </p>

                    <div className="not-prose rounded-xl bg-slate-900 p-4 text-sm overflow-x-auto">
                        <div className="text-slate-400 text-xs mb-2">main.tf — GKE Cluster</div>
                        <pre className="text-green-300 text-xs leading-relaxed"><code>{`resource "google_container_cluster" "primary" {
  name     = "production-cluster"
  location = "europe-west1"

  # Utiliser un node pool séparé
  remove_default_node_pool = true
  initial_node_count       = 1

  workload_identity_config {
    workload_pool = "\${var.project_id}.svc.id.goog"
  }
}

resource "google_container_node_pool" "primary_nodes" {
  name       = "primary-node-pool"
  cluster    = google_container_cluster.primary.name
  location   = "europe-west1"
  node_count = var.node_count

  node_config {
    machine_type = "n2-standard-4"
    disk_size_gb = 100
    oauth_scopes = [
      "https://www.googleapis.com/auth/cloud-platform"
    ]
    workload_metadata_config {
      mode = "GKE_METADATA"
    }
  }

  autoscaling {
    min_node_count = 1
    max_node_count = 10
  }
}`}</code></pre>
                    </div>

                    <p className="leading-relaxed text-slate-600 mt-4">
                        Ce code est versionné dans Git, reviewé comme n'importe quel code applicatif,
                        et exécuté via un pipeline CI/CD. Tout changement d'infrastructure passe par
                        une pull request avec un plan Terraform affiché automatiquement. Plus de
                        changements surprises en production.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900">
                        La stack de monitoring indispensable
                    </h2>
                    <p className="leading-relaxed text-slate-600">
                        Une infrastructure cloud sans observabilité est une infrastructure aveugle.
                        La stack kube-prometheus-stack (Prometheus + Grafana + Alertmanager) est
                        devenue le standard de facto pour les clusters Kubernetes. Elle s'installe
                        via un seul Helm chart et instrumente automatiquement le cluster entier :
                        métriques système, métriques Kubernetes, métriques applicatives.
                    </p>
                    <div className="not-prose space-y-3">
                        {[
                            {
                                layer: "Métriques",
                                tool: "Prometheus",
                                desc: "Collecte et stockage des métriques. ServiceMonitors pour scraper automatiquement les applications.",
                            },
                            {
                                layer: "Logs",
                                tool: "Loki + Promtail",
                                desc: "Agrégation des logs de tous les pods. Queries LogQL pour corrélation avec les métriques.",
                            },
                            {
                                layer: "Traces",
                                tool: "Tempo + OpenTelemetry",
                                desc: "Distributed tracing pour comprendre les requêtes qui traversent plusieurs microservices.",
                            },
                            {
                                layer: "Dashboards",
                                tool: "Grafana",
                                desc: "Visualisation unifiée métriques/logs/traces. Alertes Slack/PagerDuty intégrées.",
                            },
                        ].map((item) => (
                            <div key={item.layer} className="flex gap-3 rounded-lg bg-slate-50 p-4">
                                <div className="w-20 flex-shrink-0">
                                    <div className="text-xs font-semibold text-slate-400 uppercase">{item.layer}</div>
                                    <div className="text-sm font-bold text-purple-700">{item.tool}</div>
                                </div>
                                <div className="text-sm text-slate-600">{item.desc}</div>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900">
                        La sécurité : ne pas y penser après coup
                    </h2>
                    <p className="leading-relaxed text-slate-600">
                        L'une des erreurs les plus courantes dans les projets cloud au Maroc est de traiter
                        la sécurité comme une étape finale plutôt qu'une dimension transversale. Dans une
                        approche DevSecOps, la sécurité est intégrée à chaque étape :
                    </p>
                    <div className="not-prose space-y-2">
                        {[
                            { phase: "Code", action: "SAST avec SonarQube — détection de vulnérabilités dans le code source" },
                            { phase: "Build", action: "Scan des images Docker avec Trivy — CVE dans les packages OS et applicatifs" },
                            { phase: "Deploy", action: "OPA Gatekeeper — policies Kubernetes (no root, resource limits, registries autorisées)" },
                            { phase: "Runtime", action: "Falco — détection d'anomalies comportementales dans les conteneurs en cours d'exécution" },
                            { phase: "Secrets", action: "HashiCorp Vault — aucun secret en dur dans les configs ou CI/CD" },
                        ].map((item) => (
                            <div key={item.phase} className="flex gap-3 rounded-lg bg-slate-50 p-3">
                                <span className="w-16 flex-shrink-0 rounded bg-purple-100 px-2 py-1 text-xs font-bold text-purple-700 text-center h-fit">
                                    {item.phase}
                                </span>
                                <span className="text-sm text-slate-600">{item.action}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900">
                        Feuille de route pour migrer vers le cloud-native au Maroc
                    </h2>
                    <p className="leading-relaxed text-slate-600">
                        Pour une organisation qui démarre sa migration, voici la séquence que je recommande
                        sur 6 mois :
                    </p>
                    <div className="not-prose space-y-3">
                        {[
                            { phase: "Mois 1-2", title: "Fondations", items: ["Compte GCP + organization structure", "Terraform state backend (GCS)", "VPC, subnets, NAT Gateway", "CI/CD pipeline basique (GitLab CI)"] },
                            { phase: "Mois 2-3", title: "Conteneurisation", items: ["Dockerisation des 2-3 premières applications", "Artifact Registry pour les images", "GKE cluster (non-production)", "Helm charts de base"] },
                            { phase: "Mois 3-4", title: "Production", items: ["GKE production avec autopilot", "Monitoring kube-prometheus-stack", "ArgoCD pour GitOps", "Vault pour les secrets"] },
                            { phase: "Mois 4-6", title: "Optimisation", items: ["DevSecOps pipeline complet", "Cost optimization + budgets alerts", "SLOs et error budgets", "Documentation et formation équipe"] },
                        ].map((phase) => (
                            <div key={phase.phase} className="rounded-xl border border-slate-100 p-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="rounded bg-purple-700 px-2 py-0.5 text-xs font-bold text-white">{phase.phase}</span>
                                    <span className="font-bold text-slate-900">{phase.title}</span>
                                </div>
                                <ul className="space-y-1">
                                    {phase.items.map((item) => (
                                        <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                                            <span className="text-purple-400">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900">Conclusion</h2>
                    <p className="leading-relaxed text-slate-600">
                        La migration vers une infrastructure cloud-native avec GCP, Terraform, et Kubernetes
                        n'est pas un projet trivial — mais c'est un investissement à très haut retour sur
                        investissement pour les organisations marocaines qui s'y engagent sérieusement.
                        La fiabilité augmente, les déploiements s'accélèrent, les coûts infrastructure
                        deviennent prévisibles, et l'équipe technique monte en compétence sur des technologies
                        qui ont une valeur internationale.
                    </p>
                    <p className="leading-relaxed text-slate-600">
                        Le GCP Cloud Program est une opportunité financière sous-exploitée au Maroc. Si vous
                        développez un projet innovant, je vous encourage fortement à candidater — les 100K$
                        que j'ai obtenus ont financé une infrastructure que nous n'aurions pas pu nous
                        permettre autrement au démarrage.
                    </p>
                </section>

                <footer className="not-prose space-y-4 border-t border-slate-100 pt-6">
                    <div>
                        <div className="font-semibold text-slate-900">Abdelhamid NOIRA</div>
                        <div className="text-sm text-slate-500">DevOps Engineer · GCP · Terraform · Kubernetes · Casablanca, Morocco</div>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <Link href="/hire-me" className="text-sm font-medium text-purple-700 hover:underline">
                            Démarrer un projet cloud →
                        </Link>
                        <Link href="/skills" className="text-sm font-medium text-purple-700 hover:underline">
                            Toutes les compétences →
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
