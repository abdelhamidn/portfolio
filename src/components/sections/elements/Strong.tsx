type StrongProps = React.HTMLAttributes<HTMLElement> & {
    noUnderline?: boolean;
}

export const Strong = ({ children, noUnderline, ...rest }: StrongProps) => (
    <span className="relative inline-block text-primary transition-colors duration-500" {...rest}>
        <strong>{children}</strong>
        {!noUnderline && (
            <svg
                aria-hidden="true"
                className="absolute left-0 -bottom-[6px] w-full pointer-events-none overflow-visible"
                height="9"
                viewBox="0 0 100 9"
                preserveAspectRatio="none"
            >
                <path
                    d="M 0 7 C 15 2, 40 9, 60 5 C 78 1, 92 7, 100 4"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="5.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                />
            </svg>
        )}
    </span>
)
