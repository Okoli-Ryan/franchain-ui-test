import { Form } from "antd";
import { Button } from "forms/Button";
import { Input } from "forms/Input";

import ArrowRight from "@icons/chevron-right.svg?react";
import Logo from "@icons/franchain-logo.svg";

import useEmailVerification from "./useEmailVerification";

export default function EmailVerification() {
	const { goBack, goToResetPassword } = useEmailVerification();

	return (
		<div className="relative">
			<div className="absolute flex justify-between md:px-10 h-[61px] md:h-[110px] items-center w-full px-5">
				<div className="">
					<img src={Logo} alt="logo" className="block lg:hidden h-[35px]" />
				</div>
				<Button.Text iconPosition="end" icon={<ArrowRight />} onClick={goBack}>
					Go back
				</Button.Text>
			</div>
			<Form layout="vertical" className="flex flex-col justify-center h-full auth-page-padding">
				<div className="header">Check your email for a code</div>
				<Input name="code" className="mt-[40px] !mb-0" label="Enter code" />
				<Button className="mt-[18px] md:mt-[30px] w-max" onClick={goToResetPassword}>
					Continue
				</Button>
				<div className="mt-[30px] text-[16px] text-accent">
					Didn't receive a code? Check your spam folder or{" "}
					<Button.Text className="inline ">
						<span className="font-normal underline text-accent text-[16px]">Click to resend</span>
					</Button.Text>
				</div>
			</Form>
		</div>
	);
}
