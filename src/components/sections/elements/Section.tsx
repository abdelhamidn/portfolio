import { clsx } from "clsx";

export const Section = ({ className, ...rest }: React.HTMLAttributes<HTMLElement>) => (
    <section
        className={clsx(
            'max-w-full w-[760px] scroll-mt-16 ml-20 py-16 insm:py-8',
            'first:min-h-screen inmd:first:min-h-svh first:scroll-mt-0 first:py-0',
            'last:min-h-screen inmd:last:min-h-svh last:scroll-mt-0 last:py-0',
            'flex flex-col justify-center',
            'in2xl:mx-auto',
            'inxl:px-8',
            'inlg:ml-0 inlg:w-full',
            'insm:px-4',
            className,
        )}
        {...rest}
    />
)