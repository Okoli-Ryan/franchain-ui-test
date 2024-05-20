import { Form } from 'antd';
import { Button } from 'forms/Button';
import { Input } from 'forms/Input';
import { Link } from 'react-router-dom';

import ArrowRight from '@icons/chevron-right.svg?react';
import Logo from '@icons/franchain-logo.svg';

import useLogin from './useLogin';

export default function Login() {
	const { goToCreateAccount, goToEmailVerification } = useLogin();

	return (
		<div className="relative">
			<div className="static md:absolute flex justify-between md:px-10 h-[61px] md:h-[110px] items-center w-full px-[1.625rem]">
				<Link to="/">
					<img src={Logo} alt="logo" className="block lg:hidden h-[35px]" />
				</Link>
				<Button.Text iconPosition="end" icon={<ArrowRight />} onClick={goToCreateAccount}>
					Create account
				</Button.Text>
			</div>
			<div className="flex flex-col h-max md:h-full mt-[40px] md:mt-0 justfy-start md:justify-center auth-page-padding">
				<h2 className="text-accent leading-[39px] header">Login to Franchain</h2>
				<Form layout="vertical" className="mt-[24px] md:mt-[40px]" onFinish={goToEmailVerification}>
					<Input label="Email" name="email" inputProps={{ type: "email" }} />
					<Input
						label="Password"
						name="password"
						className="!mb-0"
						inputProps={{ type: "password" }}
						rules={[
							{ min: 12, message: "Password must be at least 12 characters" },
							{
								required: true,
								message: "Password must be at least 12 characters",
							},
						]}
					/>
					<p className="mt-1.5 md:mt-2.5 text-base">
						Forgot your password?{" "}
						<Link to="/reset-password" className="underline">
							click here to reset
						</Link>
					</p>
					<Button className="mt-[18px] md:mt-[30px]" htmlType="submit">
						Log in
					</Button>
				</Form>
			</div>
		</div>
	);
}
