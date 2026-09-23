import { ReactNode } from 'react';

type SectionHeadingProps = {
    description?: ReactNode;
    label?: string;
    theme?: 'light' | 'dark';
    title: string;
    titleId: string;
};

export default function SectionHeading({
    description,
    label,
    theme = 'light',
    title,
    titleId,
}: SectionHeadingProps) {
    const themeClass =
        theme === 'dark' ? 'section-heading--dark' : 'section-heading--light';

    return (
        <div className={`section-heading ${themeClass}`}>
            {label && <p className="section-heading__label">{label}</p>}
            <h2 className="section-heading__title" id={titleId}>
                {title}
            </h2>
            {description && <div className="section-heading__description">{description}</div>}
        </div>
    );
}
