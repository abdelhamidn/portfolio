'use client';

import { useEffect, useRef, useState } from "react";
import { clsx } from "clsx";
import { Link, P } from "./elements";
import { useTranslation } from "react-i18next";

export const Footer = (props: React.HTMLAttributes<HTMLElement>) => {

    const { t } = useTranslation("global");
    const [visible, setVisible] = useState(false);
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.4 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <footer
            ref={ref}
            className="p-4 dark:bg-dark bg-light transition-colors duration-666"
            {...props}
        >
            <div className={clsx(
                'transition-all duration-700 ease-out',
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            )}>
                {/* Semantic internal linking for SEO — also useful navigation */}
                <nav
                    aria-label="Related expertise pages"
                    className="mb-4 flex flex-wrap justify-center gap-x-4 gap-y-1"
                >
                    {[
                        { href: "/skills", label: "Skills & Technologies" },
                        { href: "/casablanca", label: "DevOps Casablanca" },
                        { href: "/morocco", label: "DevOps Morocco" },
                        { href: "/blog", label: "Blog" },
                        { href: "/hire-me", label: "Hire Me" },
                    ].map(({ href, label }) => (
                        <a
                            key={href}
                            href={href}
                            className={clsx(
                                "text-xs font-medium",
                                "dark:text-light/40 text-dark/40",
                                "hover:dark:text-light/70 hover:text-dark/70",
                                "transition-colors duration-333",
                            )}
                        >
                            {label}
                        </a>
                    ))}
                </nav>

                <P>
                    {t('footer.author.text')}{' '}
                    <Link href='https://github.com/abdelhamidn'>
                        {t('footer.author.name')}
                    </Link>
                    {' '}|{' '}
                    {t('footer.tech.text')}{' '}
                    {t('footer.tech.name')}
                </P>

                {/* Crawlable keyword context — visually minimal */}
                <p
                    aria-hidden="false"
                    className="mt-3 text-center text-[10px] leading-relaxed dark:text-light/25 text-dark/25 transition-colors duration-333"
                >
                    DevOps Engineer · AI Automation · Cloud Infrastructure · Kubernetes · Terraform ·
                    Microsoft Power Platform · Casablanca, Morocco
                </p>
            </div>
        </footer>
    )

}
