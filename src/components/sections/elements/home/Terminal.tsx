import { clsx } from "clsx";

export const Terminal = () => (
    <div
        aria-hidden="true"
        className={clsx(
            'pointer-events-none select-none',
            'absolute bottom-20 right-2 inlg:bottom-4 insm:bottom-2',
            'insm:right-auto insm:left-1/2 insm:-translate-x-1/2',
            'w-72 inlg:w-60 insm:w-[340px]',
            'rounded-xl overflow-hidden',
            'border dark:border-light/10 border-dark/10',
            'dark:bg-dark/75 bg-white/75',
            'backdrop-blur-md',
            'opacity-80 dark:opacity-60 inlg:opacity-65 inlg:dark:opacity-50',
            'shadow-sm dark:shadow-none',
        )}
    >
        {/* title bar */}
        <div className={clsx(
            'flex items-center gap-1.5 px-3 py-2 insm:py-1.5',
            'border-b dark:border-light/8 border-dark/8',
            'dark:bg-light/5 bg-dark/5',
        )}>
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
            <span className="ml-auto text-[10px] dark:text-light/30 text-dark/30 font-mono">bash — noira@dev</span>
        </div>
        {/* body */}
        <div
            className="px-3 py-3 space-y-1 text-[11px] insm:text-[12px]"
            style={{ fontFamily: 'Consolas, Monaco, "Courier New", monospace' }}
        >
            <p>
                <span className="text-primary font-bold">❯</span>{' '}
                <span className="dark:text-light/80 text-dark/80">whoami</span>
            </p>
            <p className="pl-3 dark:text-light/45 text-dark/45">Abdelhamid NOIRA</p>

            <p className="pt-0.5">
                <span className="text-primary font-bold">❯</span>{' '}
                <span className="dark:text-light/80 text-dark/80">uptime</span>
            </p>
            <p className="pl-3 text-green-400/80">14h+ active today ↑</p>

            <p className="pt-0.5">
                <span className="text-primary font-bold">❯</span>{' '}
                <span className="dark:text-light/80 text-dark/80">cat /dev/coffee</span>
            </p>
            <p className="pl-3 dark:text-light/45 text-dark/45">☕ caffeinated++</p>

            <p className="pt-0.5">
                <span className="text-primary font-bold">❯</span>{' '}
                <span className="dark:text-light/80 text-dark/80">ls skills/</span>
            </p>
            <p className="pl-3 dark:text-light/45 text-dark/45">DevOps · Cloud · FullStack · Leadership</p>

            <p className="pt-0.5">
                <span className="text-primary font-bold">❯</span>{' '}
                <span className="dark:text-light/80 text-dark/80">git log --oneline -1</span>
            </p>
            <p className="pl-3 dark:text-light/45 text-dark/45">
                <span className="text-yellow-400/70">a3f9c2b</span>
                {' '}feat: shipped something great
            </p>

            <p className="pt-0.5 flex items-center gap-1.5">
                <span className="text-primary font-bold">❯</span>
                <span className="w-[7px] h-3.5 bg-primary inline-block animate-blink motion-reduce:animate-none" />
            </p>
        </div>
    </div>
)
