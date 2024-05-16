import { Button as Button_ } from "antd";
import { twMerge } from "tailwind-merge";

import type { ComponentProps } from "react";

interface IButton extends ComponentProps<typeof Button_> {}

const Button = ({ className, icon, ...props }: IButton) => (
  <Button_
    size="large"
    icon={icon}
    type="primary"
    className={twMerge(
      "bg-blue-500 hover:!bg-blue-500/80 disabled:!bg-primary outline-none border-none disabled:bg-disabled shadow-none text-xs md:text-[18px] px-6 md:px-10 py-[9px] md:py-[15px] h-max font-semibold active:bg-blue-500/80 *:text-white rounded-[36px] md:rounded-[60px]",
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
      "hover:!text-accent hover:!bg-transparent disabled:!border-none disabled:!bg-transparent *:hover:opacity-60 flex disabled:hover:!text-accent/60 gap-4 h-max bg-transparent items-center font-normal  shadow-none outline-none text-accent p-0 rounded-none",
      className
    )}
    {...props}
  />
);

Button.Text = ButtonText;

export { Button };
