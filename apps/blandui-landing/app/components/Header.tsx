'use client';

import { Button } from '@blandui/blandui-react';
import { SiFigma, SiGithub, SiX } from '@icons-pack/react-simple-icons';
import {
	Component, FileText, Info, Menu,
} from 'lucide-react';
import Link from 'next/link';
import Logo from './Logo';

const Header = () => (
	<header className="w-full py-sm border-b-md border-b-bold border-dashed">
		<div className="w-11/12 sm:w-8/12 m-auto flex sm:gap-lg justify-between sm:justify-center items-center">
			<div className="flex gap-md items-center">
				<div className="p-xs flex sm:hidden items-center justify-center bg-surface-3 rounded-sm text-bold">
					<Menu size="1.25rem"/>
				</div>

				<a href="/">
					<Logo />
				</a>
			</div>

			<div className="hidden sm:flex gap-lg">
				<Button type="button" variant="secondary" color='brand' as={Link} href="/coming-soon">
					<FileText size="1.25rem"/>
					Docs
				</Button>

				<Button type="button" variant="secondary" color='brand' as={Link} href="/coming-soon">
					<Component size="1.25rem"/>
					Components
				</Button>
			</div>

			<div className="hidden sm:block flex-1"></div>

			<div className="hidden sm:flex gap-lg">
				<Button type="button" variant="secondary" color='brand' as={Link} href="/coming-soon">
					<Info size="1.25rem"/>
					About
				</Button>

				<Button type="button" variant="primary" color='brand' as={Link} href="https://www.figma.com/community/file/1354188872568801069/bland-ui-kit-for-figma" target="_blank">
					View
					<SiFigma size="1.25rem"/>
				</Button>
			</div>

			<div className="flex gap-xl sm:gap-lg">
				<a href="https://x.com/gdwn__" target='_blank'>
					<SiX size="1.5rem" />
				</a>

				<a href="https://github.com/Bland-UI/blandui" target='_blank'>
					<SiGithub size="1.5rem"/>
				</a>
			</div>
		</div>
	</header>
);

export default Header;
