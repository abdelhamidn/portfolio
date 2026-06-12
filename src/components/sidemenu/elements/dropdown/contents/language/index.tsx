import { Item } from "./elements";

export const LanguageContent = (props: React.HTMLAttributes<HTMLDivElement>) => {

    return (
        <div
            className="p-1 flex flex-col gap-1"
            {...props}
        >
            <Item lng="ar" />
            <Item lng="en" />
            <Item lng="fr" />
            <Item lng="de" />
            <Item lng="es" />
            <Item lng="zh" />
            <Item lng="he" />
        </div>
    )

}