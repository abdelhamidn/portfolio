import { clsx } from "clsx";

type EntryProps = {
    company: string;
    role: string;
    period: string;
    duration?: string;
    description?: string;
    bullets?: string[];
    skills?: string[];
    skillsLabel?: string;
    tags?: string[];
    logo?: string;
    logoTransparent?: boolean;
    logoLarge?: boolean;
    isCurrent?: boolean;
}

export const Entry = ({ company, role, period, duration, description, bullets, skills, skillsLabel, tags, logo, logoTransparent = false, logoLarge = false, isCurrent = false }: EntryProps) => (
    <li className="relative pl-10">

        {/* Timeline dot */}
        <span
            aria-hidden="true"
            className={clsx(
                'absolute left-0 top-[22px]',
                'w-3.5 h-3.5 rounded-full shrink-0',
                'ring-4',
                isCurrent
                    ? 'bg-primary ring-primary/20'
                    : 'bg-primary/40 ring-primary/10',
                'dark:ring-offset-dark ring-offset-light ring-offset-2',
            )}
        />

        {/* Card */}
        <div className={clsx(
            'mb-10 p-5 rounded-xl',
            'border dark:border-light/8 border-dark/8',
            'dark:bg-light/[0.02] bg-dark/[0.02]',
            'transition-colors duration-333',
            'hover:border-primary/35 hover:dark:bg-light/[0.04]',
        )}>

            {/* Period + duration — always at top */}
            <div className="flex items-center justify-end gap-2 mb-3">
                <span className={clsx(
                    'text-xs font-mono px-2.5 py-1 rounded-full',
                    isCurrent
                        ? 'text-primary bg-primary/10'
                        : 'dark:text-light/50 text-dark/50 dark:bg-light/8 bg-dark/8',
                )}>
                    {period}
                </span>
                {duration && (
                    <span className="text-[11px] font-mono dark:text-light/30 text-dark/30">
                        {duration}
                    </span>
                )}
            </div>

            {/* Company row */}
            <div className="flex items-center gap-3">
                <div className={clsx(
                    logoLarge ? 'w-[72px] h-[72px]' : 'w-12 h-12',
                    'rounded-2xl shrink-0 overflow-hidden',
                    logo
                        ? logoTransparent ? 'bg-transparent' : 'bg-white'
                        : 'flex items-center justify-center bg-primary/15 font-bold text-sm text-primary select-none',
                )}>
                    {logo
                        // eslint-disable-next-line @next/next/no-img-element
                        ? <img src={logo} alt="" aria-hidden="true" className="w-full h-full object-contain p-0.5" />
                        : company[0].toUpperCase()
                    }
                </div>
                <h3 className="font-bold text-base dark:text-light text-dark leading-tight">
                    {company}
                </h3>
            </div>

            {/* Role */}
            <p className="mt-2 font-semibold text-sm text-primary">
                {role}
            </p>

            {/* Description */}
            {description && (
                <p className="mt-3 text-sm leading-relaxed dark:text-light/55 text-dark/55">
                    {description}
                </p>
            )}

            {/* Bullets */}
            {bullets && bullets.length > 0 && (
                <ul className="mt-3 flex flex-col gap-2">
                    {bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed dark:text-light/55 text-dark/55">
                            <span aria-hidden="true" className="mt-[7px] w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                            {bullet}
                        </li>
                    ))}
                </ul>
            )}

            {/* Key skills */}
            {skills && skills.length > 0 && (
                <div className="mt-4 pt-3.5 border-t dark:border-light/8 border-dark/8 text-center">
                    {skillsLabel && (
                        <p className="text-[10px] font-mono uppercase tracking-widest dark:text-light/30 text-dark/30 mb-1.5">
                            {skillsLabel}
                        </p>
                    )}
                    <p className="text-[13px] dark:text-light/55 text-dark/55 leading-relaxed">
                        {skills.join(' · ')}
                    </p>
                </div>
            )}

            {/* Tech tags */}
            {tags && tags.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies used">
                    {tags.map(tag => (
                        <li
                            key={tag}
                            className={clsx(
                                'text-[11px] font-mono px-2 py-0.5 rounded',
                                'dark:bg-light/8 bg-dark/5',
                                'dark:text-light/45 text-dark/45',
                            )}
                        >
                            {tag}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    </li>
)
