import { Button, Typography } from '@blandui/blandui-react';
import { SiDribbble } from '@icons-pack/react-simple-icons';
import Image from 'next/image';

const Section4 = () => (
	<section className="py-6xl sm:py-7xl flex flex-col gap-xl sm:gap-3xl">
		<div className="w-11/12 sm:w-8/12 m-auto flex flex-col gap-xl items-center">
			<div className="flex flex-col gap-md text-center">
				<Typography type="heading" size="md" className="font-semibold">
					Built with Bland
				</Typography>
				<Typography type="body" size="md">
					Here’s some of what you can build. We just give you the essentials.
				</Typography>
			</div>

			<Button color='brand' variant='primary' size="md">
				<SiDribbble size="1.25rem"/>
					More examples
			</Button>
		</div>

		<div className="hidden sm:flex gap-md">
			<Image src={'/carousel/carousel-1.jpg'} alt="Example 1" width={500} height={375} className="w-[500px] h-[375px] object-contain object-right" />
			<Image src={'/carousel/carousel-2.jpg'} alt="Example 2" width={500} height={375} className="w-[500px] h-[375px] object-contain" />
			<Image src={'/carousel/carousel-3.jpg'} alt="Example 3" width={500} height={375} className="w-[500px] h-[375px] object-contain" />
			<Image src={'/carousel/carousel-4.jpg'} alt="Example 4" width={500} height={375} className="w-[500px] h-[375px] object-contain object-left" />
		</div>

		<div className="hidden sm:flex gap-md">
			<Image src={'/carousel/carousel-5.jpg'} alt="Example 5" width={500} height={375} className="w-[500px] h-[375px] object-contain object-right" />
			<Image src={'/carousel/carousel-6.jpg'} alt="Example 6" width={500} height={375} className="w-[500px] h-[375px] object-contain" />
			<Image src={'/carousel/carousel-7.jpg'} alt="Example 7" width={500} height={375} className="w-[500px] h-[375px] object-contain" />
			<Image src={'/carousel/carousel-8.jpg'} alt="Example 8" width={500} height={375} className="w-[500px] h-[375px] object-contain object-left" />
		</div>

		<div className="flex sm:hidden gap-md overflow-hidden">
			<Image src={'/carousel/carousel-1-mobile.jpg'} alt="Example 2" width={266.667} height={200} className="w-[266.667px] h-[200px] object-contain object-right" />
			<Image src={'/carousel/carousel-2-mobile.jpg'} alt="Example 3" width={266.667} height={200} className="w-[266.667px] h-[200px] object-contain object-left" />
		</div>

		<div className="flex sm:hidden gap-md overflow-hidden">
			<Image src={'/carousel/carousel-3-mobile.jpg'} alt="Example 2" width={266.667} height={200} className="w-[266.667px] h-[200px] object-contain object-right" />
			<Image src={'/carousel/carousel-4-mobile.jpg'} alt="Example 3" width={266.667} height={200} className="w-[266.667px] h-[200px] object-contain object-left" />
		</div>
	</section>
);

export default Section4;
