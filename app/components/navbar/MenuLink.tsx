'use client'
interface MenuLinkProperties{
onClick: () => void;
className?: string;
label: string;
}

export default function MenuLink({onClick,className,label}:MenuLinkProperties){
    return(
        <div className="
        px-5
        py-4
        hover:bg-gray-100
        transition
        cursor-pointer"
        onClick={onClick}>
            {label}
        </div>
    )
}