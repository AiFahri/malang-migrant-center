type ArrowIconProps = {
    className?: string;
};

export default function ArrowIcon({ className = 'h-5 w-5' }: ArrowIconProps) {
    return (
        <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 20 20">
            <path
                d="M4 10h12m-4-4 4 4-4 4"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
            />
        </svg>
    );
}
