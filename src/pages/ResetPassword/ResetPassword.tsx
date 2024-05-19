import { Form } from "antd";
import { Button } from "forms/Button";
import { Input } from "forms/Input";
import { Link } from "react-router-dom";

import ArrowRight from "@icons/chevron-right.svg?react";
import Logo from "@icons/franchain-logo.svg";

import useResetPassword from "./useResetPassword";

export default function ResetPassword() {
	const { goToLogin, goToEmailVerification } = useResetPassword();

	return (
		<div className="relative">
			<div className="static md:absolute flex justify-between md:px-10 h-[61px] md:h-[110px] items-center w-full px-5">
				<Link to="/">
					<img src={Logo} alt="logo" className="block lg:hidden h-[35px]" />
				</Link>
				<Button.Text iconPosition="end" icon={<ArrowRight />} onClick={goToLogin}>
					Return to login
				</Button.Text>
			</div>
			<div className="flex flex-col mt-[40px] md:mt-0 justfy-start md:justify-center h-max md:h-full auth-page-padding">
				<h2 className="text-accent leading-[39px] header">Reset password</h2>
				<h6 className="mt-1.5 md:mt-2.5 sub-header">Enter your email address to get instructions for resetting your password.</h6>

				<Form layout="vertical" className="mt-[24px] md:mt-[40px]" onFinish={goToEmailVerification}>
					<Input label="Email" name="email" inputProps={{ type: "email" }} className="!mb-0" />
					<Button className="mt-[18px] md:mt-[30px]" htmlType="submit">
						Reset password
					</Button>
				</Form>
			</div>
		</div>
	);
}
