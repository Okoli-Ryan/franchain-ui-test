import { Button as Button_ } from 'antd';
import { twMerge } from 'tailwind-merge';

import type { ComponentProps } from "react";

interface IButton extends ComponentProps<typeof Button_> {}

const Button = ({ className, icon, ...props }: IButton) => (
	<Button_
		size="large"
		icon={icon}
		type="primary"
		className={twMerge(
			"bg-primary hover:bg-primary/80 rounded-lg disabled:bg-disabled py-2.5 md:py-[18px] h-max font-semibold",
			icon ? "flex gap-2 items-center" : "",
			className
		)}
		{...props}
	/>
);

const ButtonText = ({ className, ...props }: IButton) => (
	<Button_
		size="large"
		type="primary"
		className={twMerge(
			"hover:!text-primary/60 hover:!bg-transparent disabled:!border-none disabled:!bg-transparent disabled:hover:!text-lightgray inline h-max bg-transparent items-center shadow-none outline-none text-primary p-0 font-semibold rounded-none",
			className
		)}
		{...props}
	/>
);

Button.Text = ButtonText;

export { Button };
