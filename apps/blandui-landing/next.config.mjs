import { withPlausibleProxy } from 'next-plausible';

/** @type {import('next').NextConfig} */
const nextConfig = withPlausibleProxy({
	customDomain: 'https://plausible-analytics-pulpopush.up.railway.app',
})({});

export default nextConfig;
