import './AuthLayout.styles.css';

import { Outlet } from 'react-router-dom';

import Logo from '@icons/franchain-logo.svg';
import AuthImage from '@images/auth-image.svg';

export default function AuthLayout() {
	return (
		<div className="w-screen justify-center flex min-h-screen h-full">
			<div className="w-full justify-center flex">
				<div className="max-w-[1300px] w-full grid grid-cols-1 lg:grid-cols-2 z-10  relative">
					<div className="h-[110px] flex items-center px-10 absolute">
						<img src={Logo} alt="logo" className="left-10 top-5 hidden lg:block md:h-14" />
					</div>
					<div className="lg:flex justify-center items-center flex-col h-full px-[60px] hidden py-[290px]">
						<img src={AuthImage} alt="auth-image" className="max-w-[427px] w-full h-auto" />
						<h4 className="mt-[34px] text-center w-full font-medium leading-[52px] text-[40px]">
							Royalty Collections, simplified. It's next level!
						</h4>
						<p className="mt-[13px] leading-[28.6px] text-[22px] text-center max-w-[420px]">
							Revenue based invoice collection to make royalty collection as easy as...
						</p>
					</div>
					<Outlet />
				</div>
				<div className="fixed inset-0 grid grid-cols-1 lg:grid-cols-2">
					<div className="bg-auth-background bg-cover bg-center py-5  hidden lg:block"></div>
					<div className="bg-light"></div>
				</div>
			</div>
		</div>
	);
}
