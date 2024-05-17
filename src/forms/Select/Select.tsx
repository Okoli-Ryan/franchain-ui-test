import { Form } from 'antd';
import { NamePath } from 'antd/es/form/interface';
import React, { ComponentProps, InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface ISelect extends ComponentProps<(typeof Form)["Item"]> {
	name: NamePath;
	disabled?: boolean;
	placeholder?: string;
	labelClassName?: InputHTMLAttributes<HTMLParagraphElement>["className"];
	selectClassName?: InputHTMLAttributes<HTMLParagraphElement>["className"];

	selectProps?: React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;
	children: React.DOMAttributes<HTMLSelectElement>["children"];
}

export default function Select({ label, name, selectProps, selectClassName = "", ...props }: ISelect) {
	const form = Form.useFormInstance();

	return (
		<Form.Item label={label} name={name as string} {...props}>
			<select
				onChange={(e) => form.setFieldValue(name as string, e.target.value)}
				className={twMerge(
					"w-full !h-[48px] md:!h-14 outline-none py-0 md:py-4 px-4 border-light-blue border bg-light-2 border-solid  rounded-md md:rounded-[10px]  xl:text-base lg:text-sm",
					selectClassName
				)}
				{...selectProps}>
				{props.children}
			</select>
		</Form.Item>
	);
}
