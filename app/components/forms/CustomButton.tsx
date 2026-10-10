interface CustomButtonProps{
    label: string;
    onClick: () => void;
    className?: string;
}
export default function CustomButton({label, onClick, className}:CustomButtonProps){
    return(
        <div onClick={onClick} 
        className={`
        w-full
        lg:w-md
        py-4
        bg-airbnb
        hover:bg-airbnb-dark
        cursor-pointer
        text-white
        rounded-xl
        transition
        text-center
        ${className}`}>
            {label}
        </div>
    )
}