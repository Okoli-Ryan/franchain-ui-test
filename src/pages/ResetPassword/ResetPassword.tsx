import { Form } from "antd";
import { Button } from "forms/Button";
import { Input } from "forms/Input";

import ArrowRight from "@icons/chevron-right.svg?react";
import Logo from "@icons/franchain-logo.svg";

import useResetPassword from "./useResetPassword";

export default function ResetPassword() {
	const { goToLogin } = useResetPassword();

	return (
		<div className="relative">
			<div className="absolute flex justify-between md:px-10 h-[61px] md:h-[110px] items-center w-full px-5">
				<div className="">
					<img src={Logo} alt="logo" className="block lg:hidden h-[35px]" />
				</div>
				<Button.Text iconPosition="end" icon={<ArrowRight />} onClick={goToLogin}>
					Return to login
				</Button.Text>
			</div>
			<div className="flex flex-col justify-center h-full auth-page-padding">
				<h2 className="text-accent leading-[39px] header">Reset password</h2>
				<h6 className="mt-1.5 md:mt-2.5 sub-header">Enter your email address to get instructions for resetting your password.</h6>

				<Form layout="vertical" className="mt-6 md:mt-10" onFinish={() => {}}>
					<Input label="Email" name="email" inputProps={{ type: "email" }} />
					<Button className="mt-[18px] md:mt-[30px]" htmlType="submit">
						Reset password
					</Button>
				</Form>
			</div>
		</div>
	);
}
