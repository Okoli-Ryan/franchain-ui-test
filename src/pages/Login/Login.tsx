import { Form } from 'antd';
import { Button } from 'forms/Button';
import { Input } from 'forms/Input';
import { Link } from 'react-router-dom';

import ArrowRight from '@icons/chevron-right.svg?react';
import Logo from '@icons/franchain-logo.svg';

import useLogin from './useLogin';

export default function Login() {
	const { goToCreateAccount } = useLogin();

	return (
		<div className="relative">
			<div className="absolute top- 0 flex justify-between md:px-10 h-[61px] md:h-[110px] items-center w-full px-5">
				<div className="">
					<img src={Logo} alt="logo" className="block lg:hidden h-[35px]" />
				</div>
				<Button.Text iconPosition="end" icon={<ArrowRight />} onClick={goToCreateAccount}>
					Create account
				</Button.Text>
			</div>
			<div className=" md:px-[200px] lg:px-[60px] px-5 flex justify-center flex-col h-full">
				<h2 className="font-medium text-accent leading-[39px] text-22 md:text-[30px]">Login to Franchain</h2>
				<Form layout="vertical" className="mt-6 md:mt-10">
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
					<p className="mt-1.5 md:mt-2.5 text-[10px] md:text-base">
						Forgot your password?{" "}
						<Link to="/reset" className="underline">
							click here to reset
						</Link>
					</p>
					<Button className="mt-3 md:mt-5" htmlType="submit">
						Log in
					</Button>
				</Form>
			</div>
		</div>
	);
}
