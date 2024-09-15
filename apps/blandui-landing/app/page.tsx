import { Metadata } from 'next';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';

export const metadata: Metadata = {
	title:       'BlandUI',
	description: 'TODO',
};

export default function Home() {
	return (
		<div className="">
			<main className="">
				<Section1/>
				<Section2/>
				<Section3/>
				<Section4/>
				<Section5/>
			</main>
		</div>
	);
}
