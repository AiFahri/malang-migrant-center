import { Link } from '@inertiajs/react';
import { ReactNode } from 'react';

type PublicButtonProps = {
    children: ReactNode;
    href: string;
    variant?: 'primary' | 'secondary';
};

export default function PublicButton({
    children,
    href,
    variant = 'primary',
}: PublicButtonProps) {
    const variantClass = {
        primary: 'public-button--primary',
        secondary: 'public-button--secondary',
    }[variant];

    return (
        <Link className={`public-button ${variantClass}`} href={href}>
            <span>{children}</span>
            <svg
                aria-hidden="true"
                className="h-5 w-5 shrink-0"
                fill="none"
                viewBox="0 0 20 20"
            >
                <path
                    d="M4 10h12m-4-4 4 4-4 4"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                />
            </svg>
        </Link>
    );
}
