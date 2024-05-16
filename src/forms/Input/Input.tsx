import type { ComponentProps, InputHTMLAttributes } from "react";
import './Input.style.css';

import { Form, Input as TextInput } from 'antd';
import { twMerge } from 'tailwind-merge';

import type { NamePath } from "antd/es/form/interface";

interface IInput extends ComponentProps<(typeof Form)["Item"]> {
	name: NamePath;
	disabled?: boolean;
	inputProps?: ComponentProps<typeof TextInput>;
	placeholder?: string;
	labelClassName?: InputHTMLAttributes<HTMLParagraphElement>["className"];
	inputClassName?: InputHTMLAttributes<HTMLParagraphElement>["className"];
}

const Input = ({ label, name, inputProps, placeholder, inputClassName = "", ...props }: IInput) => {
	return (
		<Form.Item label={label} name={name as string} {...props}>
			<TextInput
				className={twMerge(
					"border border-light-blue rounded-md md:rounded-[10px] xl:text-base h-[33.86px] md:h-14  lg:text-sm bg-light-2 placeholder:text-accent/60 xl:px-5 xl:py-4 py-0 px-4 hover:shadow-sm hover:border-primary hover:shadow-primary",
					inputClassName
				)}
				name={name as string}
				placeholder={placeholder}
				disabled={props.disabled}
				{...inputProps}
			/>
		</Form.Item>
	);
};

export { Input };
