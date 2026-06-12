'use client';

import { clsx } from "clsx";
import { Description, Invitation, Location, MediaItem, Name, Photo } from "./elements";
import { IconBrandGithub, IconBrandLinkedin, IconBrandReddit, IconBrandWhatsapp, IconBrandX } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

export const SideCard = (props: React.HTMLAttributes<HTMLElement>) => {

    const { t } = useTranslation("global");

    return (
        <aside
            className={clsx(
                'overflow-hidden relative',
                'max-w-full w-[344px] max-h-full h-[640px] rounded-xl',
                'inlg:w-full inlg:h-auto inlg:min-h-svh inlg:max-h-none inlg:rounded-none',
                'flex flex-col items-center justify-center inlg:pt-24 inlg:pb-16',
                'dark:bg-light/5 bg-dark/5 inlg:bg-transparent',
                'transition-colors duration-666',
                'after:pointer-events-none after:absolute after:top-0 after:left-0',
                'after:-translate-1/3 insm:after:-translate-1/2',
                'after:w-36 after:h-36 inlg:after:w-28 inlg:after:h-28 insm:after:w-24 insm:after:h-24 after:rounded-full',
                'after:border-4 after:border-dashed after:border-primary',
                'after:drop-shadow-custom',
                'after:transition-colors after:duration-600',
                'inlg:after:hidden',
                'before:pointer-events-none before:absolute before:bottom-0 before:right-0',
                'before:translate-1/3 insm:before:translate-1/2',
                'before:w-28 before:h-28 before:rounded-full',
                'before:border-4 before:border-dashed before:border-primary',
                'before:drop-shadow-custom',
                'before:transition-colors before:duration-600',
                'inlg:before:hidden',
            )}
            {...props}
        >
            <Photo />
            <Name id="profile-title">{t('pages.main.sections.profile.name')}</Name>
            <Description id="profile-desc">{t('pages.main.sections.profile.description')}</Description>
            <Location>{t('pages.main.sections.profile.location')}</Location>
            <nav className="my-8">
                <ul className="flex items-center gap-6">
                    <MediaItem
                        aria-label={t('pages.main.sections.profile.socials.github')}
                        href='https://github.com/anoira16'
                        icon={IconBrandGithub}
                    />
                    <MediaItem
                        aria-label={t('pages.main.sections.profile.socials.twitter')}
                        href='https://x.com/AnoiraTwit'
                        icon={IconBrandX}
                    />
                    <MediaItem
                        aria-label={t('pages.main.sections.profile.socials.reddit')}
                        href='https://www.reddit.com/u/abdelhamidnoira/s/8pmx22q1ML'
                        icon={IconBrandReddit}
                    />
                    <MediaItem
                        aria-label={t('pages.main.sections.profile.socials.whatsapp')}
                        href='https://wa.me/+212708166116'
                        icon={IconBrandWhatsapp}
                    />
                    <MediaItem
                        aria-label={t('pages.main.sections.profile.socials.linkedin')}
                        href='https://www.linkedin.com/in/abdelhamidn/'
                        icon={IconBrandLinkedin}
                    />
                </ul>
            </nav>
            <Invitation>{t('pages.main.sections.profile.button')}</Invitation>
        </aside>
    )

}