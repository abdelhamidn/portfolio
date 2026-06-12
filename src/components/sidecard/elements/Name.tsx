export const Name = (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
        className="mt-0 insm:mt-[10px] mb-4 font-bold text-2xl insm:text-[26px] dark:text-light text-dark transition-colors duration-666"
        style={{ textShadow: '0 0 10px color-mix(in oklch, var(--color-primary) 95%, transparent), 0 0 25px color-mix(in oklch, var(--color-primary) 60%, transparent), 0 0 50px color-mix(in oklch, var(--color-primary) 30%, transparent)' }}
        {...props}
    />
)