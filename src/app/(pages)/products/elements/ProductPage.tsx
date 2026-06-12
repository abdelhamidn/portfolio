'use client';

import { clsx } from "clsx";
import Image from "next/image";
import Link from "next/link";
import { Ripple } from "@/components/misc";
import { IconExternalLink } from "@tabler/icons-react";

type LinkItem = { label: string; href: string }
type ImageItem = { src: string; alt: string }

type ProductPageProps = {
    id: string;
    title: string;
    subtitle: string;
    description?: string;
    liveHref?: string;
    links?: LinkItem[];
    images?: ImageItem[];
    heroSrc?: string;
    heroBgClass?: string;
}

const PageImage = ({ src, alt }: ImageItem) => (
    <figure className="overflow-hidden relative aspect-video rounded-lg">
        <Image
            fill
            src={src}
            alt={alt}
            className="pointer-events-none select-none object-cover"
        />
    </figure>
)

const SITE = "https://abdelhamid.noira.net";

export const ProductPage = ({
    id,
    title,
    subtitle,
    description,
    liveHref,
    links = [],
    images = [],
    heroSrc,
    heroBgClass,
}: ProductPageProps) => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: title,
        description: description || subtitle,
        applicationCategory: "WebApplication",
        operatingSystem: "Web",
        url: `${SITE}/products/${id}/`,
        author: {
            "@type": "Person",
            name: "Abdelhamid NOIRA",
            url: SITE,
        },
        image: `${SITE}/imgs/products/${id}/hero.png`,
        creator: { "@id": `${SITE}/#person` },
    };

    return (
    <>
        <figure className="overflow-hidden aspect-video relative rounded-xl">
            <Image
                fill
                src={heroSrc ?? `/imgs/products/${id}/hero.png`}
                alt={title}
                className={clsx(
                    '[transform:translateZ(0)]',
                    'pointer-events-none select-none',
                    'object-cover bg-primary',
                    'transition-colors duration-333',
                    heroBgClass,
                )}
            />
        </figure>

        <header className="flex flex-col gap-6">
            <h2
                id="product-title"
                className="font-extrabold text-5xl dark:text-light text-dark inlg:text-center transition-colors duration-333"
            >
                {title}
            </h2>
            <h3 className="font-medium text-sm dark:text-light/50 text-dark/50 inlg:text-center transition-colors duration-333">
                {subtitle}
            </h3>
            {description && (
                <p
                    id="product-desc"
                    className="font-medium dark:text-light/75 text-dark/75 inlg:text-center transition-colors duration-333"
                >
                    {description}
                </p>
            )}
        </header>

        {(liveHref || links.length > 0) && (
            <nav>
                <ul className="flex items-center gap-6 insm:flex-col">
                    {liveHref && (
                        <li>
                            <Link
                                href={liveHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={clsx(
                                    'relative overflow-hidden',
                                    'outline-offset-2 outline-primary',
                                    'block w-fit px-4 py-2 rounded-md',
                                    'text-sm text-light',
                                    'bg-primary shadow-custom',
                                    'transition-all duration-333',
                                    'active:scale-90 active:bg-secondary',
                                    'hover:scale-95 focus-visible:scale-95',
                                    'animate-shine motion-safe:animate-shine motion-reduce:animate-none',
                                )}
                            >
                                <Ripple />
                                View Live
                            </Link>
                        </li>
                    )}
                    {links.map(({ label, href }, key) => (
                        <li key={key}>
                            <Link
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={clsx(
                                    'group outline-primary outline-offset-4 w-fit',
                                    'flex items-center gap-1',
                                    'font-medium text-sm dark:text-light text-dark',
                                    'transition-colors duration-333',
                                    'hover:text-primary focus-visible:text-primary active:text-primary',
                                )}
                            >
                                <span>{label}</span>
                                <IconExternalLink
                                    aria-hidden="true"
                                    size={20}
                                    className="transition-all duration-333 group-hover:translate-x-1.5 group-focus-visible:translate-x-1.5 group-active:translate-x-1.5"
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        )}

        {images.length > 0 && (
            <ul className="flex flex-col gap-3">
                {images.map(({ src, alt }, key) => (
                    <li key={key}>
                        <PageImage src={src} alt={alt} />
                    </li>
                ))}
            </ul>
        )}
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    </>
    );
}
