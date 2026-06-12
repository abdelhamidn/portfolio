export const P = (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
        className="font-semibold text-lg insm:text-base dark:text-light/50 text-dark/50 text-justify insm:text-center"
        {...props}
    />
)