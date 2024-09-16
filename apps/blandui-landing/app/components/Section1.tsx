'use client';

import {
	Badge, Button, Checkbox, RadioButton, TextInput, Toggle, Typography,
} from '@blandui/blandui-react';
import { SiFigma } from '@icons-pack/react-simple-icons';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const Section1 = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<section className="w-11/12 sm:w-8/12 m-auto py-4xl sw:py-2xl flex gap-xl sm:gap-lg flex-col sm:flex-row">
			<div className="flex flex-col gap-xl flex-[0.5]">
				<Typography type="heading" size='md' className="font-semibold sm:hidden block">
				Basic building block for your ideas.
				</Typography>
				<Typography type="display" size='sm' className="font-semibold hidden sm:block">
				Basic building block for your ideas.
				</Typography>

				<Typography type="body" size='md' className="sm:hidden block">
				Bland gives you core components to bring your ideas to life, skipping the fancy stuff to focus on the essentials. Our components let you design freely, making sure you are in control the whole time.
				</Typography>
				<Typography type="body" size='lg' className="hidden sm:block">
				Bland gives you core components to bring your ideas to life, skipping the fancy stuff to focus on the essentials. Our components let you design freely, making sure you are in control the whole time.
				</Typography>

				<div className="flex gap-md">
					<Button color='brand' variant='primary' size="md" as={Link} href="https://www.figma.com/community/file/1354188872568801069/bland-ui-kit-for-figma" target="_blank">
						<SiFigma size="1.25rem"/>
						Get This UI Kit
					</Button>

					<Button color='brand' variant='secondary' size="md" as={Link} href="/coming-soon">
						View Docs
					</Button>
				</div>
			</div>

			<div className="flex flex-col justify-center gap-lg flex-[0.5]">
				<div className="flex flex-col p-2xl bg-surface-2 rounded-lg gap-xl text-bold">
					<div className="flex gap-2xl items-center">
						<Button color='brand' variant='primary' size="md">
						Click Me
						</Button>
					</div>

					<div className="flex gap-2xl items-center">
						<label className="flex gap-md">
							<Checkbox size="md" />
							<Typography type="body" size='md'>
							Interact with me
							</Typography>
						</label>

						<label className="flex gap-md">
							<RadioButton radioSize="md" />
							<Typography type="body" size='md'>
							Click to select me
							</Typography>
						</label>

						<Badge size="xl" color='red' variant='primary'>
						Label
						</Badge>
					</div>

					<div className="flex gap-2xl items-center">
						<label className="flex gap-md items-center">
							<Toggle size="md" onChange={() => { setToggle((prev) => !prev); }}/>
							<Typography type="body" size='md'>
								Switched { toggle ? 'on' : 'off' }
							</Typography>
						</label>
					</div>

					<div className="flex gap-2xl items-center">
						<TextInput
							label="Label" value="User input" readOnly
							inputSize="md" variant='warning'
							helperText="I am giving a warning here"
						/>
					</div>

					<div className="flex gap-2xl items-center">
					</div>
				</div>

				<div className="hidden sm:flex justify-center">
					<Button color='brand' variant='primary' size="md" className="shadow-brand-far-subtle" as={Link} href="https://playground.blandui.com" target="_blank">
						Explore in Playground
						<ExternalLink size="1.25rem"/>
					</Button>
				</div>
			</div>
		</section>
	);
};

export default Section1;
