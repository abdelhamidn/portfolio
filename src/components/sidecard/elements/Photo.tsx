import { clsx } from "clsx";
import { useTranslation } from "react-i18next";
import Image from "next/image";

export const Photo = (props: React.HTMLAttributes<HTMLElement>) => {

    const { t } = useTranslation("global");

    return (
        <figure
            className={clsx(
                'relative',
                'w-[240px] h-[280px] insm:w-[264px] insm:h-[308px]',
                'inlg:mb-16',
            )}
            style={{ filter: 'drop-shadow(0 0 25px color-mix(in oklch, var(--color-primary) 95%, transparent)) drop-shadow(0 0 55px color-mix(in oklch, var(--color-primary) 60%, transparent)) drop-shadow(0 0 90px color-mix(in oklch, var(--color-primary) 30%, transparent))' }}
            {...props}
        >
            <Image
                fill
                src="/imgs/profile.png"
                alt={t('pages.main.sections.profile.photo.alt')}
                className="pointer-events-none select-none object-cover"
            />
        </figure>
    )

}