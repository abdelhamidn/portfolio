'use client';

import { D, DD, DT, P, ToContact, ToWork, DevTag, Terminal, FloatingIcons } from "./elements/home";
import { Section, Strong, Title } from "./elements";
import { useTranslation } from "react-i18next";

const BINARY = ['01100100', '01100101', '01110110', '00101101', '01101111', '01110000', '01110011', '00100001'];

const GreenDot = () => (
    <span className="relative flex h-2 w-2 shrink-0">
        <span className="absolute animate-ping inline-flex h-full w-full rounded-full bg-green-400 opacity-75 motion-reduce:animate-none" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
    </span>
);

const FUN_FACTS: { icon: React.ReactNode; label: string }[] = [
    { icon: <GreenDot />, label: 'available 24/7 · active 16h / day' },
    { icon: '🐧', label: 'linux native' },
];

export const Home = (props: React.HTMLAttributes<HTMLElement>) => {

    const { t } = useTranslation("global");

    return (
        <Section
            id="home"
            aria-labelledby="home-title"
            aria-describedby="home-desc"
            className="gap-6 relative overflow-hidden"
            {...props}
        >
            {/* ── Floating tool icons (left + right) ── */}
            <FloatingIcons />

            {/* ── Right: Large </> watermark ── */}
            <div
                aria-hidden="true"
                className="pointer-events-none select-none absolute -top-6 right-0 font-mono font-black leading-none dark:text-light/[0.025] text-dark/[0.025] text-[11rem] inlg:text-[8rem] insm:text-[5.5rem]"
            >
                {`</>`}
            </div>

            {/* ── Left: // comment watermark ── */}
            <div
                aria-hidden="true"
                className="pointer-events-none select-none absolute -top-2 left-0 font-mono font-black leading-none dark:text-light/[0.022] text-dark/[0.022] text-[8rem] inlg:text-[6rem] insm:text-[4rem]"
            >
                {'//'}
            </div>

            {/* ── Left: binary stream ── */}
            <div
                aria-hidden="true"
                className="pointer-events-none select-none absolute left-0 top-[30%] font-mono text-[7px] insm:text-[7px] leading-[16px] tracking-tight dark:text-primary/18 text-primary/14"
            >
                {BINARY.map((b, i) => (
                    <div key={i} style={{ opacity: i % 2 === 0 ? 0.7 : 0.4 }}>{b}</div>
                ))}
            </div>

            {/* ── Left: bottom-left subtle ring ── */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-28 -left-28 w-[200px] h-[200px] insm:-bottom-16 insm:-left-16 insm:w-[140px] insm:h-[140px] rounded-full border border-dashed border-primary/15 animate-spin-slow motion-reduce:animate-none"
                style={{ animationDirection: 'reverse' }}
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-16 -left-16 w-[130px] h-[130px] insm:-bottom-10 insm:-left-10 insm:w-[90px] insm:h-[90px] rounded-full border border-primary/8"
            />

            {/* ── Right: spinning dashed ring + inner rings ── */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-44 -right-44 w-[360px] h-[360px] inlg:-bottom-28 inlg:-right-28 inlg:w-[240px] inlg:h-[240px] insm:-bottom-20 insm:-right-20 insm:w-[180px] insm:h-[180px] rounded-full border border-dashed border-primary/20 animate-spin-slow motion-reduce:animate-none"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-32 -right-32 w-[260px] h-[260px] inlg:-bottom-20 inlg:-right-20 inlg:w-[180px] inlg:h-[180px] insm:-bottom-14 insm:-right-14 insm:w-[130px] insm:h-[130px] rounded-full border border-primary/12"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-20 -right-20 w-[160px] h-[160px] inlg:-bottom-12 inlg:-right-12 inlg:w-[110px] inlg:h-[110px] insm:-bottom-8 insm:-right-8 insm:w-[80px] insm:h-[80px] rounded-full bg-primary/4"
            />

            {/* ── Floating terminal card ── */}
            <Terminal />

            {/* ── Main content ── */}
            <header className="flex flex-col gap-4 md:mt-4 relative z-10">
                <DevTag />
                <Title id="home-title">
                    {t('pages.main.sections.home.title')}{' '}
                    <Strong>{t('pages.main.sections.home.strong')}</Strong>
                    <span aria-hidden="true" className="animate-blink motion-reduce:animate-none text-primary ml-0.5">|</span>
                </Title>
                <P id="home-desc">
                    {t('pages.main.sections.home.description')}
                </P>
            </header>

            <dl className="my-4 flex items-center gap-12 inlg:justify-center insm:gap-6 inxs:gap-1 relative z-10">
                <D>
                    <DT><Strong noUnderline>+3</Strong></DT>
                    <DD>{t('pages.main.sections.home.numbers.years')}</DD>
                </D>
                <D>
                    <DT><Strong noUnderline>+16</Strong></DT>
                    <DD>{t('pages.main.sections.home.numbers.projects')}</DD>
                </D>
                <D>
                    <DT><Strong noUnderline>+7</Strong></DT>
                    <DD>{t('pages.main.sections.home.numbers.products')}</DD>
                </D>
            </dl>

            {/* ── Fun facts chips ── */}
            <div
                aria-hidden="true"
                className="flex flex-wrap gap-2 inlg:justify-center insm:justify-center relative z-10 -mt-2 mb-1"
            >
                {FUN_FACTS.map(({ icon, label }) => (
                    <span
                        key={label}
                        className="flex items-center gap-2 font-mono text-xs insm:text-sm dark:text-light/30 text-dark/30 border dark:border-light/[0.08] border-dark/[0.08] px-3 py-1.5 rounded-full"
                    >
                        {typeof icon === 'string'
                            ? <span className="text-primary/70">{icon}</span>
                            : icon
                        }
                        <span>{label}</span>
                    </span>
                ))}
            </div>

            <nav
                aria-labelledby="home-title"
                className="flex items-center gap-6 inlg:justify-center relative z-10 insm:mb-56"
            >
                <ToContact>{t('pages.main.sections.home.buttons.contact')}</ToContact>
                <ToWork>{t('pages.main.sections.home.buttons.work')}</ToWork>
            </nav>
        </Section>
    )

}
