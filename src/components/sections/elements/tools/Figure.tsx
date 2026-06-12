import Image from "next/image";

type FigureProps = React.HTMLAttributes<HTMLElement> & {
    figure: string;
}

export const Figure = ({ figure, ...rest }: FigureProps) => (
    <div className="p-2 rounded-xl bg-light">
        <figure className="relative w-[56px] h-[56px] inxs:w-[36px] inxs:h-[36px] flex-none" {...rest}>
            <Image
                src={figure}
                alt=""
                fill
                sizes="56px"
                className="pointer-events-none select-none object-cover"
            />
        </figure>
    </div>
)