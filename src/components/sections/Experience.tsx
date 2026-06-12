'use client';

import { Entry } from "./elements/experience";
import { Section, Strong, Title } from "./elements";
import { useTranslation } from "react-i18next";

const getDuration = (startISO: string, mosLabel: string, endISO?: string): string => {
    const start = new Date(startISO);
    const end = endISO ? new Date(endISO) : new Date();
    const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth()) + 1;
    const yrs = Math.floor(months / 12);
    const mos = months % 12;
    if (yrs === 0) return `${mos} ${mosLabel}`;
    if (mos === 0) return `${yrs} yr${yrs > 1 ? 's' : ''}`;
    return `${yrs} yr${yrs > 1 ? 's' : ''} ${mos} ${mosLabel}`;
};

export const Experience = (props: React.HTMLAttributes<HTMLElement>) => {

    const { t } = useTranslation("global");
    const mos = t('pages.main.sections.experience.mos');
    const skillsLabel = t('pages.main.sections.experience.keySkills');
    const bullets = (company: string): string[] => {
        const result = t(`pages.main.sections.experience.companies.${company}.bullets`, { returnObjects: true });
        return Array.isArray(result) ? (result as string[]) : [];
    };

    const skills: Record<string, string[]> = {
        BeYs:        ['Project Management', 'DevOps', 'Cloud Infrastructure', 'Agile/Scrum', 'CI/CD', 'Kubernetes', 'Docker', 'AWS', 'Terraform', 'Team Leadership', 'Monitoring'],
        IOSolutions: ['Process Automation', 'Project Management'],
        Tersea:      ['Kubernetes', 'Docker', 'GitLab CI/CD', 'AWS', 'Helm', 'Prometheus', 'Grafana', 'Vault'],
        BRAMS:       ['OpenAI API', 'Chrome API', 'Next.js', 'FastAPI', 'Web Scraping'],
        SEKERA:      ['Angular', 'FastAPI', 'Docker', 'Kubernetes', 'Ansible', 'Terraform', 'OWASP ZAP', 'Metasploit', 'ELK Stack'],
    };

    return (
        <Section
            id="experience"
            aria-labelledby="experience-title"
            className="gap-12"
            {...props}
        >
            <header>
                <Title id="experience-title">
                    {t('pages.main.sections.experience.title')}{' '}
                    <Strong>{t('pages.main.sections.experience.strong')}</Strong>
                </Title>
            </header>

            <div className="relative">
                {/* Vertical timeline line */}
                <div
                    aria-hidden="true"
                    className="absolute left-[6px] top-6 bottom-10 w-px dark:bg-light/10 bg-dark/10"
                />

                <ul className="flex flex-col">
                    <Entry
                        company={t('pages.main.sections.experience.companies.BeYs.name')}
                        role={t('pages.main.sections.experience.companies.BeYs.role')}
                        period={t('pages.main.sections.experience.companies.BeYs.period')}
                        duration={getDuration('2025-11-01', mos)}
                        logo="/imgs/companies/beYs.jpg"
                        logoTransparent
                        isCurrent
                        skills={skills.BeYs}
                        skillsLabel={skillsLabel}
                    />
                    <Entry
                        company={t('pages.main.sections.experience.companies.IOSolutions.name')}
                        role={t('pages.main.sections.experience.companies.IOSolutions.role')}
                        period={t('pages.main.sections.experience.companies.IOSolutions.period')}
                        duration={getDuration('2025-05-01', mos, '2025-10-01')}
                        logo="/imgs/companies/ioSolutions.jpg"
                        logoTransparent
                        bullets={bullets('IOSolutions')}
                        skills={skills.IOSolutions}
                        skillsLabel={skillsLabel}
                    />
                    <Entry
                        company={t('pages.main.sections.experience.companies.Tersea.name')}
                        role={t('pages.main.sections.experience.companies.Tersea.role')}
                        period={t('pages.main.sections.experience.companies.Tersea.period')}
                        duration={getDuration('2024-11-01', mos, '2025-04-01')}
                        logo="/imgs/companies/tersea.jpg"
                        logoTransparent
                        logoLarge
                        bullets={bullets('Tersea')}
                        skills={skills.Tersea}
                        skillsLabel={skillsLabel}
                    />
                    <Entry
                        company={t('pages.main.sections.experience.companies.BRAMS.name')}
                        role={t('pages.main.sections.experience.companies.BRAMS.role')}
                        period={t('pages.main.sections.experience.companies.BRAMS.period')}
                        duration={getDuration('2024-02-01', mos, '2024-08-01')}
                        logo="/imgs/companies/brams.jpg"
                        logoTransparent
                        logoLarge
                        bullets={bullets('BRAMS')}
                        skills={skills.BRAMS}
                        skillsLabel={skillsLabel}
                    />
                    <Entry
                        company={t('pages.main.sections.experience.companies.SEKERA.name')}
                        role={t('pages.main.sections.experience.companies.SEKERA.role')}
                        period={t('pages.main.sections.experience.companies.SEKERA.period')}
                        duration={getDuration('2023-02-01', mos, '2023-08-01')}
                        logo="/imgs/companies/sekera.jpg"
                        logoTransparent
                        logoLarge
                        bullets={bullets('SEKERA')}
                        skills={skills.SEKERA}
                        skillsLabel={skillsLabel}
                    />
                </ul>
            </div>
        </Section>
    )

}
