import { clsx } from "clsx";
import Image from "next/image";

type FigureProps = React.HTMLAttributes<HTMLElement> & {
    figure: string;
    alt: string;
    imgClassName?: string;
}

export const Figure = ({ figure, alt, imgClassName, ...rest }: FigureProps) => (
    <figure
        className="[transform:translateZ(0)] overflow-hidden relative w-full inlg:w-[333px] h-[200px] insm:w-[266px]"
        {...rest}
    >
        <Image
            fill
            src={figure}
            alt={alt}
            className={clsx(
                'pointer-events-none select-none',
                'object-cover origint-top',
                'bg-primary',
                'transition-all duration-666',
                'group-hover:scale-175',
                'group-focus-within:scale-175',
                imgClassName,
            )}
        />
    </figure>
)