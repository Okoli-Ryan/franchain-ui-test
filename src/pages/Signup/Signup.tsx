import { Form } from "antd";
import { Button } from "forms/Button";
import { Input } from "forms/Input";

import ArrowRight from "@icons/chevron-right.svg?react";
import Logo from "@icons/franchain-logo.svg";

import ReactFlagsSelect from "react-flags-select";

import { COUNTRY_NAMES, COUNTRY_VALUES } from "./Signup.utils";
import useSignup from "./useSignup";

export default function Signup() {
  const { form, goToLogin, isValid, onSelectCountry, selectedCountry } =
    useSignup();

  return (
    <div>
      <div className="flex justify-between md:px-10 h-[61px] md:h-[110px] items-center w-full px-5">
        <div className="">
          <img src={Logo} alt="logo" className="block lg:hidden h-[35px]" />
        </div>
        <Button.Text
          iconPosition="end"
          icon={<ArrowRight />}
          onClick={goToLogin}
        >
          Log in
        </Button.Text>
      </div>
      <div className="pb-[82px] md:pb-[132px] md:px-[200px] lg:px-[60px] px-5">
        <div className="mt-[21px]">
          <h2 className="font-medium text-accent leading-[45.57px] text-22 md:text-[35px]">
            Get started with Franchain
          </h2>
          <div className="mt-1.5 md:mt-2.5 text-base md:text-xl">
            Create an account in 5 minutes.
          </div>
        </div>
        <Form
          layout="vertical"
          className="mt-6 md:mt-10"
          form={form}
          validateTrigger={["onChange", "onMount"]}
          initialValues={{ country: "US" }}
        >
          <div className="grid grid-cols-2 gap-4">
            <Input label="First name" name="firstName" />
            <Input label="Last name" name="lastName" />
          </div>

          <div className="mb-2.5">
            <label className="text-base">Business Name and HQ Location</label>
            <div className="flex items-center mt-[10px]">
              <Input
                name="businessName"
                inputClassName=" !rounded-r-none"
                className="w-full !mb-0"
              />
              <Form.Item
                name="country"
                className="!mb-0 *:!h-full  country-select"
              >
                <ReactFlagsSelect
                  selected={selectedCountry}
                  className="h-full !p-0"
                  onSelect={onSelectCountry}
                  showSecondarySelectedLabel={false}
                  showOptionLabel={false}
                  customLabels={COUNTRY_NAMES}
                  countries={COUNTRY_VALUES}
                />
              </Form.Item>
            </div>
          </div>

          <Input
            label="Work email"
            name="email"
            inputProps={{ type: "email" }}
            rules={[{ type: "email", message: "Please enter a valid email" }]}
          />
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
          <Button
            className="mt-3 md:mt-5"
            htmlType="submit"
            disabled={!isValid}
          >
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
          and to receive electronic communication about my accounts and services
          per{" "}
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
