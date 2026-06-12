import { clsx } from "clsx";

const ICONS = [
    // — Right side —
    {
        src: '/svgs/tools/docker-original.svg',
        pos: 'top-[10%] right-[5%]',
        size: 'w-14 h-14 inlg:w-10 inlg:h-10 insm:w-14 insm:h-14',
        delay: '0s',
    },
    {
        src: '/svgs/tools/kubernetes-original.svg',
        pos: 'top-[30%] right-[1%]',
        size: 'w-12 h-12 inlg:w-9 inlg:h-9 insm:w-12 insm:h-12',
        delay: '1.1s',
    },
    {
        src: '/svgs/tools/terraform-original.svg',
        pos: 'top-[52%] right-[4%]',
        size: 'w-11 h-11 inlg:w-8 inlg:h-8 insm:w-11 insm:h-11',
        delay: '0.6s',
    },
    {
        src: '/svgs/tools/amazonwebservices-original.svg',
        pos: 'bottom-[28%] right-[1%]',
        size: 'w-13 h-13 inlg:w-9 inlg:h-9 insm:w-13 insm:h-13',
        delay: '1.8s',
    },
    // — Left side —
    {
        src: '/svgs/tools/linux-original.svg',
        pos: 'top-[12%] left-[1%]',
        size: 'w-13 h-13 inlg:w-9 inlg:h-9 insm:w-13 insm:h-13',
        delay: '0.9s',
    },
    {
        src: '/svgs/tools/ansible-original.svg',
        pos: 'top-[34%] left-[0%]',
        size: 'w-11 h-11 inlg:w-8 inlg:h-8 insm:w-11 insm:h-11',
        delay: '2.2s',
    },
    {
        src: '/svgs/tools/azure-original.svg',
        pos: 'top-[56%] left-[2%]',
        size: 'w-12 h-12 inlg:w-9 inlg:h-9 insm:w-12 insm:h-12',
        delay: '0.4s',
    },
] as const;

export const FloatingIcons = () => (
    <>
        {ICONS.map(({ src, pos, size, delay }) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
                key={src}
                src={src}
                alt=""
                aria-hidden="true"
                className={clsx(
                    'absolute pointer-events-none select-none',
                    'opacity-[0.11] dark:opacity-[0.09]',
                    'animate-float motion-reduce:animate-none',
                    pos,
                    size,
                )}
                style={{ animationDelay: delay }}
            />
        ))}
    </>
)
