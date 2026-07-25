export default function PrimaryButton({
    children,
    className = "",
    disabled = false,
    type = "button",
    ...props
}) {
    return (
        <button
            type={type}
            disabled={disabled}
            className={`
                inline-flex
                h-11
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-cyan-600
                px-6
                text-sm
                font-semibold
                text-white
                shadow-sm
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:bg-cyan-700
                hover:shadow-md
                active:translate-y-0
                disabled:cursor-not-allowed
                disabled:opacity-50
                ${className}
            `}
            {...props}
        >
            {children}
        </button>
    );
}