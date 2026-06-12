import { clsx } from "clsx";
import { forwardRef } from "react";
import { Ripple } from "@/components/misc";

type ItemProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    figure?: React.ReactNode;
    icon?: React.ElementType;
    label: string;
    isDropdownOpen: boolean;
    setIsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Item = forwardRef<HTMLButtonElement, ItemProps>(({ figure, icon: Icon, label, isDropdownOpen, setIsDropdownOpen, children, ...rest }, ref) => (
    <li className="group relative min-w-[135px] insm:min-w-[127px] min-h-[33px] rounded-full dark:bg-light/33 bg-dark/33 backdrop-blur drop-shadow-[0_0_1px_rgba(0,0,0,0.333)]">
        <button
            ref={ref}
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={clsx(
                'cursor-pointer',
                'outline-custom',
                'w-full h-full px-3 py-1 rounded-full',
                'flex items-center gap-2',
                'transition-transform',
                'active:scale-95',
                'animate-halo motion-safe:animate-halo motion-reduce:animate-none',
                isDropdownOpen && 'after:shadow-[inset_0_0_0_175px] after:shadow-primary',
            )}
            {...rest}
        >
            <Ripple />
            {figure ? <figure>{figure}</figure> : <></>}
            {Icon
                ?
                <Icon
                    aria-hidden="true"
                    size={25}
                    className={clsx(
                        'fill-light',
                        'transition-colors duration-333',
                        'group-hover:fill-light/60!',
                        'group-active:fill-light/60!',
                        isDropdownOpen && 'fill-light!',
                    )}
                />
                :
                <></>
            }
            <span
                className={clsx(
                    'pl-2 border-l border-light/25',
                    'font-mono font-semibold text-sm insm:text-xs',
                    'text-light',
                    'transition-colors duration-333',
                    'group-hover:text-light/60!',
                    'group-active:text-light/60!',
                    isDropdownOpen && 'text-light!',
                )}
            >
                {label}
            </span>
        </button>
        {children}
    </li >
))

Item.displayName = "SidebarDropdownTriggerButton";