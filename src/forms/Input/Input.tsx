import type { ComponentProps, InputHTMLAttributes } from "react";
import './Input.style.scss';

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
					"border border-lightgray rounded-[5px] xl:text-base md:text-sm placeholder:text-[#B7B7B7] xl:px-5 xl:py-4 py-2 px-4",
					inputClassName
				)}
				name={name as string}
				placeholder={(placeholder || label || name) as string}
				disabled={props.disabled}
				{...inputProps}
			/>
		</Form.Item>
	);
};

export { Input };
