import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Team',
    description: 'Meet the dedicated team behind Appropriate Technology Lab, working towards sustainable climate solutions and environmental resilience in Nepal.',
};

export default function TeamsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
