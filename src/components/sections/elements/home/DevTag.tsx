export const DevTag = () => (
    <div className="flex items-center gap-2.5 inlg:justify-center">
        <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute animate-ping inline-flex h-full w-full rounded-full bg-green-400 opacity-75 motion-reduce:animate-none" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
        </span>
        <span className="text-xs font-mono tracking-widest dark:text-light/50 text-dark/50 uppercase select-none">
            available
        </span>
        <span aria-hidden="true" className="h-px w-10 bg-gradient-to-r from-primary/50 to-transparent" />
    </div>
)
