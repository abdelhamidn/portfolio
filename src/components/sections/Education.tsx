'use client';

import { Entry } from "./elements/experience";
import { Section, Strong, Title } from "./elements";
import { useTranslation } from "react-i18next";

export const Education = (props: React.HTMLAttributes<HTMLElement>) => {

    const { t } = useTranslation("global");

    return (
        <Section
            id="education"
            aria-labelledby="education-title"
            className="gap-12"
            {...props}
        >
            <header>
                <Title id="education-title">
                    {t('pages.main.sections.education.title')}{' '}
                    <Strong>{t('pages.main.sections.education.strong')}</Strong>
                </Title>
            </header>

            <div className="relative">
                {/* Vertical timeline line */}
                <div
                    aria-hidden="true"
                    className="absolute left-[6px] top-6 bottom-10 w-px dark:bg-light/10 bg-dark/10"
                />

                <ul className="flex flex-col">
                    {/* Most recent — Mundiapolis */}
                    <Entry
                        company={t('pages.main.sections.education.schools.Mundiapolis.name')}
                        role={t('pages.main.sections.education.schools.Mundiapolis.degree')}
                        period={t('pages.main.sections.education.schools.Mundiapolis.period')}
                        logo="/imgs/companies/mundiapolis.png"
                        logoTransparent
                    />

                    {/* Middle — transition (user will fill) */}
                    <Entry
                        company={t('pages.main.sections.education.schools.Transition.name')}
                        role={t('pages.main.sections.education.schools.Transition.degree')}
                        period={t('pages.main.sections.education.schools.Transition.period')}
                    />

                    {/* Oldest — ISTA OFPPT */}
                    <Entry
                        company={t('pages.main.sections.education.schools.ISTA.name')}
                        role={t('pages.main.sections.education.schools.ISTA.degree')}
                        period={t('pages.main.sections.education.schools.ISTA.period')}
                        logo="/imgs/companies/ista.png"
                        logoTransparent
                    />
                </ul>
            </div>
        </Section>
    )

}
