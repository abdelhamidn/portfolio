'use client';

import { Article, Desc, Figure, Item, Title as Titl } from "./elements/tools";
import { Section, Strong, Title } from "./elements";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const CategoryLabel = ({ children }: { children: React.ReactNode }) => (
    <p className="text-xs font-bold uppercase tracking-[0.15em] text-neutral mb-4 pb-2 border-b border-dark/10 dark:border-light/10 transition-colors duration-666">
        {children}
    </p>
)

const Soon = ({ items }: { items: { name: string; tag: string }[] }) => (
    <div className="flex flex-wrap gap-2 mt-4">
        {items.map(({ name, tag }) => (
            <span key={name} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-dark/5 dark:bg-light/5 text-sm dark:text-light/50 text-dark/50 transition-colors duration-666">
                {name}
                <span className="text-[10px] uppercase tracking-widest text-primary font-bold">{tag}</span>
            </span>
        ))}
    </div>
)

const ToolItem = ({ href, id, figure, name, desc }: { href: string; id: string; figure: string; name: string; desc: string }) => (
    <Item>
        <Link href={href} target="_blank" rel="noopener noreferrer" aria-labelledby={`${id}-title`} aria-describedby={`${id}-desc`} className="outline-none">
            <Article>
                <Figure figure={figure} />
                <div>
                    <Titl id={`${id}-title`}>{name}</Titl>
                    <Desc id={`${id}-desc`}>{desc}</Desc>
                </div>
            </Article>
        </Link>
    </Item>
)

export const Tools = (props: React.HTMLAttributes<HTMLElement>) => {

    const { t } = useTranslation("global");
    const i = (key: string) => t(`pages.main.sections.tools.items.${key}`);

    return (
        <Section id="tools" aria-labelledby="tools-title" className="gap-12" {...props}>
            <header>
                <Title id="tools-title">
                    {t('pages.main.sections.tools.title')} <Strong>{t('pages.main.sections.tools.strong')}</Strong>
                </Title>
            </header>

            <div className="flex flex-col gap-10 w-full">

                {/* Cloud & DevOps */}
                <div>
                    <CategoryLabel>Cloud &amp; DevOps</CategoryLabel>
                    <ul className="grid grid-cols-2 gap-x-3 gap-y-4 insm:gap-x-1">
                        <ToolItem href="https://www.docker.com" id="docker" figure="/svgs/tools/docker-original.svg" name={i('docker.name')} desc={i('docker.description')} />
                        <ToolItem href="https://kubernetes.io/" id="kubernetes" figure="/svgs/tools/kubernetes-original.svg" name={i('kubernetes.name')} desc={i('kubernetes.description')} />
                        <ToolItem href="https://docs.ansible.com/" id="ansible" figure="/svgs/tools/ansible-original.svg" name={i('ansible.name')} desc={i('ansible.description')} />
                        <ToolItem href="https://developer.hashicorp.com/terraform" id="terraform" figure="/svgs/tools/terraform-original.svg" name={i('terraform.name')} desc={i('terraform.description')} />
                    </ul>
                </div>

                {/* Security */}
                <div>
                    <CategoryLabel>Security</CategoryLabel>
                    <ul className="grid grid-cols-2 gap-x-3 gap-y-4 insm:gap-x-1">
                        <ToolItem href="https://www.vaultproject.io" id="vault" figure="/svgs/tools/vault-original.svg" name={i('vault.name')} desc={i('vault.description')} />
                    </ul>
                    <Soon items={[
                        { name: 'OWASP ZAP', tag: 'Pentesting' },
                        { name: 'Trivy', tag: 'Scanner' },
                        { name: 'Falco', tag: 'Runtime' },
                    ]} />
                </div>

                {/* Version Control & CI/CD */}
                <div>
                    <CategoryLabel>Version Control &amp; CI/CD</CategoryLabel>
                    <ul className="grid grid-cols-2 gap-x-3 gap-y-4 insm:gap-x-1">
                        <ToolItem href="https://git-scm.com" id="git" figure="/svgs/tools/git-original.svg" name={i('git.name')} desc={i('git.description')} />
                        <ToolItem href="https://github.com" id="github" figure="/svgs/tools/github-original.svg" name={i('github.name')} desc={i('github.description')} />
                        <ToolItem href="https://gitlab.com" id="gitlab" figure="/svgs/tools/gitlab-original.svg" name={i('gitlab.name')} desc={i('gitlab.description')} />
                        <ToolItem href="https://www.jenkins.io" id="jenkins" figure="/svgs/tools/jenkins-original.svg" name={i('jenkins.name')} desc={i('jenkins.description')} />
                    </ul>
                    <Soon items={[
                        { name: 'GitHub Actions', tag: 'CI/CD' },
                        { name: 'GitLab CI/CD', tag: 'CI/CD' },
                        { name: 'CircleCI', tag: 'CI/CD' },
                    ]} />
                </div>

                {/* Cloud Providers */}
                <div>
                    <CategoryLabel>Cloud Providers</CategoryLabel>
                    <ul className="grid grid-cols-2 gap-x-3 gap-y-4 insm:gap-x-1">
                        <ToolItem href="https://azure.microsoft.com" id="azure" figure="/svgs/tools/azure-original.svg" name={i('azure.name')} desc={i('azure.description')} />
                        <ToolItem href="https://aws.amazon.com" id="aws" figure="/svgs/tools/amazonwebservices-original.svg" name={i('aws.name')} desc={i('aws.description')} />
                        <ToolItem href="https://cloud.google.com" id="gcp" figure="/svgs/tools/googlecloud-original.svg" name={i('gcp.name')} desc={i('gcp.description')} />
                    </ul>
                </div>

                {/* Databases */}
                <div>
                    <CategoryLabel>Databases</CategoryLabel>
                    <ul className="grid grid-cols-2 gap-x-3 gap-y-4 insm:gap-x-1">
                        <ToolItem href="https://www.postgresql.org" id="postgres" figure="/svgs/tools/postgresql-original.svg" name={i('postgres.name')} desc={i('postgres.description')} />
                        <ToolItem href="https://supabase.com" id="supabase" figure="/svgs/tools/supabase-original.svg" name={i('supabase.name')} desc={i('supabase.description')} />
                    </ul>
                    <Soon items={[
                        { name: 'MongoDB', tag: 'NoSQL' },
                        { name: 'Redis', tag: 'NoSQL' },
                        { name: 'Pinecone', tag: 'Vector' },
                        { name: 'pgvector', tag: 'Vector' },
                        { name: 'Qdrant', tag: 'Vector' },
                    ]} />
                </div>

                {/* Message Queues */}
                <div>
                    <CategoryLabel>Message Queues</CategoryLabel>
                    <ul className="grid grid-cols-2 gap-x-3 gap-y-4 insm:gap-x-1">
                        <ToolItem href="https://kafka.apache.org" id="kafka" figure="/svgs/tools/apachekafka-original.svg" name={i('kafka.name')} desc={i('kafka.description')} />
                        <ToolItem href="https://www.rabbitmq.com" id="rabbitmq" figure="/svgs/tools/rabbitmq-original.svg" name={i('rabbitmq.name')} desc={i('rabbitmq.description')} />
                    </ul>
                    <Soon items={[
                        { name: 'NATS', tag: 'Messaging' },
                        { name: 'Apache Pulsar', tag: 'Streaming' },
                    ]} />
                </div>

                {/* Monitoring & Observability */}
                <div>
                    <CategoryLabel>Monitoring &amp; Observability</CategoryLabel>
                    <ul className="grid grid-cols-2 gap-x-3 gap-y-4 insm:gap-x-1">
                        <ToolItem href="https://grafana.com" id="grafana" figure="/svgs/tools/grafana-original.svg" name={i('grafana.name')} desc={i('grafana.description')} />
                        <ToolItem href="https://prometheus.io" id="prometheus" figure="/svgs/tools/prometheus-original.svg" name={i('prometheus.name')} desc={i('prometheus.description')} />
                        <ToolItem href="https://superset.apache.org" id="superset" figure="/svgs/tools/apachesuperset-original.svg" name={i('superset.name')} desc={i('superset.description')} />
                        <ToolItem href="https://powerbi.microsoft.com" id="powerbi" figure="/svgs/tools/powerbi-original.svg" name={i('powerbi.name')} desc={i('powerbi.description')} />
                    </ul>
                    <Soon items={[
                        { name: 'Datadog', tag: 'APM' },
                        { name: 'ELK Stack', tag: 'Logs' },
                        { name: 'PagerDuty', tag: 'Alerting' },
                    ]} />
                </div>

                {/* Project Management */}
                <div>
                    <CategoryLabel>Project Management</CategoryLabel>
                    <ul className="grid grid-cols-2 gap-x-3 gap-y-4 insm:gap-x-1">
                        <ToolItem href="https://www.atlassian.com/software/jira" id="jira" figure="/svgs/tools/jira-original.svg" name={i('jira.name')} desc={i('jira.description')} />
                        <ToolItem href="https://www.atlassian.com/software/confluence" id="confluence" figure="/svgs/tools/confluence-original.svg" name={i('confluence.name')} desc={i('confluence.description')} />
                        <ToolItem href="https://trello.com" id="trello" figure="/svgs/tools/trello-original.svg" name={i('trello.name')} desc={i('trello.description')} />
                        <ToolItem href="https://www.notion.so" id="notion" figure="/svgs/tools/notion-original.svg" name={i('notion.name')} desc={i('notion.description')} />
                    </ul>
                    <Soon items={[
                        { name: 'Linear', tag: 'Tracking' },
                    ]} />
                </div>

                {/* OS & Shell */}
                <div>
                    <CategoryLabel>OS &amp; Shell</CategoryLabel>
                    <ul className="grid grid-cols-2 gap-x-3 gap-y-4 insm:gap-x-1">
                        <ToolItem href="https://www.linux.org" id="linux" figure="/svgs/tools/linux-original.svg" name={i('linux.name')} desc={i('linux.description')} />
                        <ToolItem href="https://www.gnu.org/software/bash" id="bash" figure="/svgs/tools/bash-original.svg" name={i('bash.name')} desc={i('bash.description')} />
                    </ul>
                </div>

                {/* Programming Languages */}
                <div>
                    <CategoryLabel>Programming Languages</CategoryLabel>
                    <ul className="grid grid-cols-2 gap-x-3 gap-y-4 insm:gap-x-1">
                        <ToolItem href="https://www.java.com" id="java" figure="/svgs/tools/java-original.svg" name={i('java.name')} desc={i('java.description')} />
                        <ToolItem href="https://www.typescriptlang.org" id="typescript" figure="/svgs/tools/typescript-original.svg" name={i('typescript.name')} desc={i('typescript.description')} />
                        <ToolItem href="https://www.python.org" id="python" figure="/svgs/tools/python-original.svg" name={i('python.name')} desc={i('python.description')} />
                        <ToolItem href="https://learn.microsoft.com/dotnet/csharp" id="csharp" figure="/svgs/tools/csharp-original.svg" name={i('csharp.name')} desc={i('csharp.description')} />
                    </ul>
                </div>

                {/* Backend */}
                <div>
                    <CategoryLabel>Backend</CategoryLabel>
                    <ul className="grid grid-cols-2 gap-x-3 gap-y-4 insm:gap-x-1">
                        <ToolItem href="https://spring.io" id="spring" figure="/svgs/tools/spring-original.svg" name={i('spring.name')} desc={i('spring.description')} />
                    </ul>
                </div>

                {/* Frontend */}
                <div>
                    <CategoryLabel>Frontend</CategoryLabel>
                    <ul className="grid grid-cols-2 gap-x-3 gap-y-4 insm:gap-x-1">
                        <ToolItem href="https://react.dev" id="react" figure="/svgs/tools/react-original.svg" name={i('reactjs.name')} desc={i('reactjs.description')} />
                        <ToolItem href="https://nextjs.org" id="nextjs" figure="/svgs/tools/nextjs-original.svg" name={i('nextjs.name')} desc={i('nextjs.description')} />
                    </ul>
                </div>

                {/* Mobile */}
                <div>
                    <CategoryLabel>Mobile</CategoryLabel>
                    <ul className="grid grid-cols-2 gap-x-3 gap-y-4 insm:gap-x-1">
                        <ToolItem href="https://flutter.dev" id="flutter" figure="/svgs/tools/flutter-original.svg" name={i('flutter.name')} desc={i('flutter.description')} />
                        <ToolItem href="https://reactnative.dev" id="reactnative" figure="/svgs/tools/react-original.svg" name={i('reactnative.name')} desc={i('reactnative.description')} />
                    </ul>
                </div>

                {/* Testing */}
                <div>
                    <CategoryLabel>Testing</CategoryLabel>
                    <ul className="grid grid-cols-2 gap-x-3 gap-y-4 insm:gap-x-1">
                        <ToolItem href="https://www.postman.com" id="postman" figure="/svgs/tools/postman-original.svg" name={i('postman.name')} desc={i('postman.description')} />
                        <ToolItem href="https://www.selenium.dev" id="selenium" figure="/svgs/tools/selenium-original.svg" name={i('selenium.name')} desc={i('selenium.description')} />
                    </ul>
                </div>

                {/* AI / LLM */}
                <div>
                    <CategoryLabel>AI / LLM</CategoryLabel>
                    <Soon items={[
                        { name: 'OpenAI', tag: 'LLM' },
                        { name: 'LangChain', tag: 'Framework' },
                        { name: 'HuggingFace', tag: 'Models' },
                        { name: 'Ollama', tag: 'Local LLM' },
                    ]} />
                </div>

                {/* Deployment */}
                <div>
                    <CategoryLabel>Deployment</CategoryLabel>
                    <ul className="grid grid-cols-2 gap-x-3 gap-y-4 insm:gap-x-1">
                        <ToolItem href="https://vercel.com" id="vercel" figure="/svgs/tools/vercel-original.svg" name={i('vercel.name')} desc={i('vercel.description')} />
                        <ToolItem href="https://fly.io" id="flyio" figure="/svgs/tools/flyio-original.svg" name={i('flyio.name')} desc={i('flyio.description')} />
                    </ul>
                </div>

                {/* ERP */}
                <div>
                    <CategoryLabel>ERP &amp; CRM</CategoryLabel>
                    <ul className="grid grid-cols-2 gap-x-3 gap-y-4 insm:gap-x-1">
                        <ToolItem href="https://www.odoo.com" id="odoo" figure="/svgs/tools/odoo-original.svg" name={i('odoo.name')} desc={i('odoo.description')} />
                        <ToolItem href="https://www.salesforce.com" id="salesforce" figure="/svgs/tools/salesforce-original.svg" name={i('salesforce.name')} desc={i('salesforce.description')} />
                    </ul>
                    <Soon items={[
                        { name: 'SAP', tag: 'ERP' },
                    ]} />
                </div>

                {/* Microsoft Stack */}
                <div>
                    <CategoryLabel>Microsoft Stack</CategoryLabel>
                    <Soon items={[
                        { name: 'Power Automate', tag: 'Automation' },
                        { name: 'Copilot Studio', tag: 'AI' },
                        { name: 'Azure DevOps', tag: 'DevOps' },
                        { name: 'Microsoft Teams', tag: 'Collab' },
                        { name: 'SharePoint', tag: 'Docs' },
                    ]} />
                </div>

            </div>
        </Section>
    )

}
