'use client';

import { Button } from '@blandui/blandui-react';
import { SiFigma, SiGithub, SiX } from '@icons-pack/react-simple-icons';
import {
	Component, FileText, Info, Menu,
} from 'lucide-react';
import Logo from './Logo';

const Header = () => (
	<header className="w-full py-sm border-b-md border-b-bold border-dashed">
		<div className="w-11/12 sm:w-8/12 m-auto flex sm:gap-lg justify-between sm:justify-center items-center">
			<div className="flex gap-md items-center">
				<div className="p-xs flex sm:hidden items-center justify-center bg-surface-3 rounded-sm text-bold">
					<Menu size="1.25rem"/>
				</div>
				<Logo />
			</div>

			<div className="hidden sm:flex gap-lg">
				<Button type="button" variant="secondary" color='brand'>
					<FileText size="1.25rem"/>
					Docs
				</Button>

				<Button type="button" variant="secondary" color='brand'>
					<Component size="1.25rem"/>
					Components
				</Button>
			</div>

			<div className="hidden sm:block flex-1"></div>

			<div className="hidden sm:flex gap-lg">
				<Button type="button" variant="secondary" color='brand'>
					<Info size="1.25rem"/>
					About
				</Button>

				<Button type="button" variant="primary" color='brand'>
					View
					<SiFigma size="1.25rem"/>
				</Button>
			</div>

			<div className="flex gap-xl sm:gap-lg">
				<SiX size="1.5rem" />
				<SiGithub size="1.5rem"/>
			</div>
		</div>
	</header>
);

export default Header;
