'use client';

import { Article, Figure, Paragraph, Product, Status, Title as Titl } from "./elements/work";
import { Section, Strong, Title } from "./elements"
import { useTranslation } from "react-i18next"
import Link from "next/link";

type ProductEntry = { id: string; href: string; figure: string; year: string; imgClassName?: string };

const products: ProductEntry[] = [
    { id: 'anom',      href: '/products/anom',      figure: '/imgs/products/anom/anom.png',         year: '2025', imgClassName: '!bg-white !object-contain' },
    { id: 'dqplugin',  href: '/products/dqplugin',  figure: '/imgs/products/dqplugin/hero.png',     year: '2024' },
    { id: 'secdojo',   href: '/products/secdojo',   figure: '/imgs/products/secdojo/hero.png',      year: '2023' },
    { id: 'frmje',     href: '/products/frmje',     figure: '/imgs/products/frmje/hero.png',        year: '2023' },
    { id: 'homesense', href: '/products/homesense', figure: '/imgs/products/homesense/hero.png',    year: '2023' },
    { id: 'bbcr',      href: '/products/bbcr',      figure: '/imgs/products/bbcr/hero.png',         year: '2025' },
    { id: 'kenzmedia', href: '/products/kenzmedia', figure: '/imgs/products/kenzmedia/hero.png',    year: '2024' },
    { id: 'viadis',    href: '/products/viadis',    figure: '/imgs/products/viadis/hero.png',       year: '2024' },
    { id: 'sysmed',    href: '/products/sysmed',    figure: '/imgs/products/sysmed/hero.png',       year: '2024' },
    { id: 'deskea',    href: '/products/deskea',    figure: '/imgs/products/deskea/hero.png',       year: '2025' },
    { id: 'mtech',     href: '/products/mtech',     figure: '/imgs/products/mtech/hero.png',        year: '2025' },
    { id: 'mncloud',   href: '/products/mncloud',   figure: '/imgs/products/mncloud/mncloud.png',   year: '2025' },
    { id: 'notehub',   href: '/products/notehub',   figure: '/imgs/products/notehub/hero.png',      year: '2024' },
];

export const Work = (props: React.HTMLAttributes<HTMLElement>) => {

    const { t } = useTranslation("global");

    return (
        <Section
            id="work"
            aria-labelledby="work-title"
            className="gap-12"
            {...props}
        >
            <header>
                <Title id="work-title">
                    {t('pages.main.sections.work.title')} <Strong>{t('pages.main.sections.work.strong')}</Strong>
                </Title>
            </header>
            <nav>
                <ul className="grid grid-cols-2 gap-6 inlg:grid-cols-1 inlg:place-items-center">
                    {products.map(({ id, href, figure, year, imgClassName }) => (
                        <Product key={id}>
                            <Link
                                href={href}
                                aria-labelledby={`${id}-title`}
                                aria-describedby={`${id}-desc`}
                                className="outline-none block w-full h-full"
                            >
                                <Article>
                                    <Figure figure={figure} alt={t(`pages.main.sections.work.products.${id}.alt` as never)} imgClassName={imgClassName} />
                                    <div className="p-4 flex flex-col gap-3">
                                        <div className="flex flex-col gap-0.5">
                                            <span className="font-mono text-[11px] tracking-[0.15em] text-primary/50">{year}</span>
                                            <Titl id={`${id}-title`}>{t(`pages.main.sections.work.products.${id}.name` as never)}</Titl>
                                        </div>
                                        <Paragraph id={`${id}-desc`}>{t(`pages.main.sections.work.products.${id}.description` as never)}</Paragraph>
                                    </div>
                                    <Status>{t(`pages.main.sections.work.products.${id}.status` as never)}</Status>
                                </Article>
                            </Link>
                        </Product>
                    ))}
                </ul>
            </nav>
        </Section>
    )

}
