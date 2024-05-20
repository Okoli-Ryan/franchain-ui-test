import { Form } from "antd";
import { Button } from "forms/Button";
import { Input } from "forms/Input";
import { Link } from "react-router-dom";

import ArrowRight from "@icons/chevron-right.svg?react";
import Logo from "@icons/franchain-logo.svg";

import useEmailVerification from "./useEmailVerification";

export default function EmailVerification() {
	const { goBack, goToResetPassword } = useEmailVerification();

	return (
		<div className="relative">
			<div className="static md:absolute flex justify-between md:px-10 h-[61px] md:h-[110px] items-center w-full px-[1.625rem]">
				<Link to="/">
					<img src={Logo} alt="logo" className="block lg:hidden h-[35px]" />
				</Link>
				<Button.Text iconPosition="end" icon={<ArrowRight />} onClick={goBack}>
					Go back
				</Button.Text>
			</div>
			<div className="flex flex-col h-max md:h-full mt-[40px] md:mt-0 justfy-start md:justify-center auth-page-padding">
				<h2 className="text-accent leading-[39px] header">Check your email for a code</h2>
				<Form layout="vertical" className="mt-[24px] md:mt-[40px]">
					<Input name="code" className="!mb-0" label="Enter code" />
					<Button className="mt-[18px] md:mt-[30px] w-max" onClick={goToResetPassword}>
						Continue
					</Button>
					<div className="mt-[30px] text-base text-accent">
						Didn't receive a code? Check your spam folder or{" "}
						<Button.Text className="inline ">
							<span className="font-normal underline text-accent text-base">Click to resend</span>
						</Button.Text>
					</div>
				</Form>
			</div>
		</div>
	);
}
