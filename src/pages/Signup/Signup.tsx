import { Form } from "antd";
import { Button } from "forms/Button";
import { Input } from "forms/Input";
import InputCountrySelect from "forms/InputCountrySelect";

import ArrowRight from "@icons/chevron-right.svg?react";
import Logo from "@icons/franchain-logo.svg";

import useSignup from "./useSignup";

export default function Signup() {
	const { form, goToLogin, isValid, onSelectCountry, selectedCountry } = useSignup();

	return (
		<div>
			<div className="flex justify-between md:px-10 h-[61px] md:h-[110px] items-center w-full px-5">
				<div className="">
					<img src={Logo} alt="logo" className="block lg:hidden h-[35px]" />
				</div>
				<Button.Text iconPosition="end" icon={<ArrowRight />} onClick={goToLogin}>
					Log in
				</Button.Text>
			</div>
			<div className="pb-[82px] md:pb-[132px] auth-page-padding">
				<div className="mt-[21px]">
					<h2 className=" text-accent leading-[45.57px] header">Get started with Franchain</h2>
					<div className="mt-1.5 md:mt-2.5 sub-header">Create an account in 5 minutes.</div>
				</div>
				<Form layout="vertical" className="mt-6 md:mt-10" form={form} initialValues={{ country: "US" }}>
					<div className="grid grid-cols-2 gap-4">
						<Input label="First name" name="firstName" />
						<Input label="Last name" name="lastName" />
					</div>

					<InputCountrySelect name="businessName" onSelectCountry={onSelectCountry} selectedCountry={selectedCountry} />

					<Input label="Work email" name="email" inputProps={{ type: "email" }} rules={[{ type: "email", message: "Please enter a valid email" }]} />
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
					<Button className="mt-[18px] md:mt-[30px]" htmlType="submit" disabled={!isValid}>
						Sign up
					</Button>
				</Form>
				<p className="mt-[30px] text-10 md:text-sm">
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
