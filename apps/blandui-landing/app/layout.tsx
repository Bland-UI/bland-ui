import type { Metadata } from 'next';
// eslint-disable-next-line camelcase
import { Fira_Sans } from 'next/font/google';
import { ReactNode } from 'react';
import Script from 'next/script';

import Header from './components/Header';
import Footer from './components/Footer';

import './globals.css';

const firaSans = Fira_Sans({
	subsets: ['latin'],
	weight:  ['400', '500', '600', '700'],
	display: 'swap',
});

export const metadata: Metadata = {
	title:       'BlandUI',
	description: 'A UI kit for those that want to be in control',
};

export default function RootLayout({
	children,
}: Readonly<{
  children: ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${firaSans.className} antialiased  bg-surface-4 min-h-screen`}>
				<Header />
				{children}
				<Footer/>
			</body>
			<Script
				defer
				src={process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL}
				data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
			/>
		</html>
	);
}
