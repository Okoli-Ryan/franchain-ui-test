import { Button } from "forms/Button";
import { ReactNode } from "react";

export const HOME_ACCORDION: { header: ReactNode; content: ReactNode }[] = [
	{
		header: (
			<div className="py-4 flex gap-5 items-center">
				<span className="h-10 w-10 rounded-full border-[.38px] border-solid border-black flex items-center justify-center accordion-index">
					<span className="text-xl ">1</span>
				</span>
				<div className="text-22">Complete KYC Process</div>
			</div>
		),
		content: <Content />,
	},
	{
		header: (
			<div className="py-4 flex gap-5 items-center">
				<span className="h-10 w-10 rounded-full border-[.38px] border-solid border-black flex items-center justify-center accordion-index">
					<span className="text-xl ">2</span>
				</span>
				<div className="text-22">Invite an operator</div>
			</div>
		),
		content: <Content />,
	},
	{
		header: (
			<div className="py-4 flex gap-5 items-center">
				<span className="h-10 w-10 rounded-full border-[.38px] border-solid border-black flex items-center justify-center accordion-index">
					<span className="text-xl ">3</span>
				</span>
				<div className="text-22">Create and assign locations</div>
			</div>
		),
		content: <Content />,
	},
	{
		header: (
			<div className="py-4 flex gap-5 items-center">
				<span className="h-10 w-10 rounded-full border-[.38px] border-solid border-black flex items-center justify-center accordion-index">
					<span className="text-xl ">4</span>
				</span>
				<div className="text-22">Divert revenue to locations IBANS </div>
			</div>
		),
		content: <Content />,
	},
	{
		header: (
			<div className="py-4 flex gap-5 items-center">
				<span className="h-10 w-10 rounded-full border-[.38px] border-solid border-black flex items-center justify-center accordion-index">
					<span className="text-xl ">5</span>
				</span>
				<div className="text-22">Create an invoice</div>
			</div>
		),
		content: <Content />,
	},
	{
		header: (
			<div className="py-4 flex gap-5 items-center">
				<span className="h-10 w-10 rounded-full border-[.38px] border-solid border-black flex items-center justify-center accordion-index">
					<span className="text-xl ">6</span>
				</span>
				<div className="text-22">Withdraw funds to your account</div>
			</div>
		),
		content: <Content />,
	},
];

function Content() {
	return (
		<div className="flex gap-16 px-9">
			<div className="w-[370px] aspect-video bg-[#232323]"></div>
			<div className="flex flex-col gap-[60px] ">
				<p className="text-18 max-w-[500px]">
					This is a sub header that will explain the basics of the video. We should thing about what we can write in this section as it will be
					important.
				</p>
				<Button className="w-max">Invite an Operator</Button>
			</div>
		</div>
	);
}
