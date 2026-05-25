import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blogs',
    description: 'Read the latest articles, insights, and updates from Appropriate Technology Lab regarding climate action, sustainable development, and environmental solutions in Nepal.',
};

export default function BlogsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
