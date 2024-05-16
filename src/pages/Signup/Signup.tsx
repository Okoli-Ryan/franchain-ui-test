import { Form } from 'antd';
import { Button } from 'forms/Button';
import { Input } from 'forms/Input';

import ArrowRight from '@icons/chevron-right.svg?react';
import Logo from '@icons/franchain-logo.svg';

export default function Signup() {
	return (
		<div>
			<div className="flex justify-between md:px-10 h-[61px] md:h-[110px] items-center w-full px-5">
				<div className="">
					<img src={Logo} alt="logo" className="block lg:hidden h-[35px]" />
				</div>
				<Button.Text iconPosition="end" icon={<ArrowRight />}>
					Log in
				</Button.Text>
			</div>
			<div className="pb-[82px] md:pb-[132px] md:px-[200px] lg:px-[60px] px-5">
				<div className="mt-[21px]">
					<h2 className="font-medium text-accent leading-[45.57px] text-[22px] md:text-[35px]">Get started with Franchain</h2>
					<div className="mt-1.5 md:mt-2.5 text-base md:text-xl">Create an account in 5 minutes.</div>
				</div>
				<Form layout="vertical" className="mt-6 md:mt-10">
					<Input label="First name" name="firstname" />
					<Input label="Last name" name="lastname" />
					<Input label="Business name and HQ location" name="businessName" />
					<Input label="Work email" name="email" inputProps={{ type: "email" }} />
					<Input label="Password" name="password" inputProps={{ type: "password" }} />
					<Button className="mt-3 md:mt-5">Sign up</Button>
				</Form>
				<p className="mt-[30px] text-[10px] md:text-sm">
					By clicking “Start Application“, I agree to Mercury's{" "}
					<a href="https://mercury.com/legal/terms" className="underline">
						Terms of Use,
					</a>
					<a href="https://mercury.com/legal/privacy" className="underline">
						Privacy Policy
					</a>{" "}
					and to receive electronic communication about my accounts and services per{" "}
					<a href="https://mercury.com/legal/esign" className="underline">
						Mercury's Electronic Communications Agreement
					</a>
					, and acknowledge receipt of{" "}
					<a href="https://mercury.com/legal/patriot-act" className="underline">
						Mercury's USA PATRIOT Act disclosure.
					</a>
				</p>
			</div>
		</div>
	);
}
