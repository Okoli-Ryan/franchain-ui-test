import './AuthLayout.styles.css';

import Logo from '@icons/franchain-logo.svg';
import AuthImage from '@images/auth-image.svg';

export default function AuthLayout() {
	return (
		<div className="w-screen justify-center flex min-h-screen">
			<div className="w-full justify-center flex">
				<div className="max-w-[1300px] w-full grid grid-cols-1 md:grid-cols-2 z-10 h-full min-h-screen relative">
					<img src={Logo} alt="logo" className="absolute left-[29px] top-5" />
					<div className="flex justify-center items-center flex-col">
						<img src={AuthImage} alt="auth-image" className="h-[327px] w-auto" />
						<h4 className="mt-[34px] text-center max-w-[553px] font-medium leading-[52px] text-[40px]">
							Royalty Collections, simplified. It's next level!
						</h4>
						<p className="mt-[13px] leading-[28.6px] text-[22px] text-center max-w-[420px]">
							Revenue based invoice collection to make royalty collection as easy as...
						</p>
					</div>
				</div>
				<div className="fixed inset-0 grid grid-cols-1 md:grid-cols-2">
					<div className="bg-auth-background bg-cover bg-center py-5"></div>
					<div className="bg-light"></div>
				</div>
			</div>
		</div>
	);
}
