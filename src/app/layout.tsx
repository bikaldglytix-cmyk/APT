import type { Metadata } from 'next';
import { Manrope, Inter } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
    subsets: ['latin'],
    variable: '--font-manrope',
    weight: ['400', '500', '600', '700', '800'],
});

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
    metadataBase: new URL('https://aptechlab.com.np'),
    title: {
        default: 'Appropriate Technology Lab | Top Climate Firm in Nepal',
        template: '%s | Appropriate Technology Lab',
    },
    description: 'Bridging global expertise with local ecosystems to engineer sustainable climate solutions in Nepal. We are a pioneering climate firm and environmental organization.',
    keywords: ['Climate Firm in Nepal', 'Top Climate Organization Nepal', 'Environmental Solutions Nepal', 'Climate Action Nepal', 'Sustainable Development Nepal', 'Appropriate Technology Lab', 'Carbon Reduction Nepal', 'Environmental Tech Nepal'],
    authors: [{ name: 'Appropriate Technology Lab' }],
    creator: 'Appropriate Technology Lab',
    publisher: 'Appropriate Technology Lab',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://aptechlab.com.np',
        siteName: 'Appropriate Technology Lab',
        title: 'Appropriate Technology Lab | Top Climate Firm in Nepal',
        description: 'Bridging global expertise with local ecosystems to engineer sustainable climate solutions in Nepal.',
        images: [
            {
                url: '/logo/atl-logo.png', // Ideally should be a larger OG image (1200x630) but using logo for now
                width: 800,
                height: 600,
                alt: 'Appropriate Technology Lab Logo',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Appropriate Technology Lab | Top Climate Firm in Nepal',
        description: 'Bridging global expertise with local ecosystems to engineer sustainable climate solutions in Nepal.',
        images: ['/logo/atl-logo.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: '/logo/atl-logo.png',
        apple: '/logo/atl-logo.png',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
            <body className="antialiased min-h-full font-sans bg-black">
                {children}
            </body>
        </html>
    );
}
