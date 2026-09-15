import { PropsWithChildren } from 'react';

type ContainerProps = PropsWithChildren<{
    className?: string;
}>;

export default function Container({ children, className = '' }: ContainerProps) {
    return (
        <div className={`public-container ${className}`.trim()}>{children}</div>
    );
}
