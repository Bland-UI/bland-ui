import type { Metadata } from 'next';
// eslint-disable-next-line camelcase
import { Fira_Sans } from 'next/font/google';
import { ReactNode } from 'react';
import PlausibleProvider from 'next-plausible';

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
			<head>
				<PlausibleProvider domain="blandui.up.railway.app" customDomain='https://plausible-analytics-pulpopush.up.railway.app' selfHosted/>
			</head>
			<body className={`${firaSans.className} antialiased  bg-surface-4 min-h-screen`}>
				<Header />
				{children}
				<Footer/>
			</body>
		</html>
	);
}
