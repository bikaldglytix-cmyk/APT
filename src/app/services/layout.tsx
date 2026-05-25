import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Services',
    description: 'Explore the environmental and climate services offered by Appropriate Technology Lab, bridging global expertise with local ecosystems in Nepal.',
};

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
