import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us',
    description: 'Learn about Appropriate Technology Lab, a pioneering climate firm and environmental organization in Nepal dedicated to addressing critical climate challenges.',
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
