import "./Home.styles.scss";

import { Button } from "forms/Button";

import SmilingManImage from "@images/smiling-guy-image.png";

import Accordion from "./components/Accordion";
import { HOME_ACCORDION } from "./Home.data";

export default function Home() {
	return (
		<div className="w-full px-[60px]">
			<div className="py-16 justify-between items-center flex">
				<h1 className="font-medium text-40">Good morning, Jonathan</h1>
				<Button>Create Collection</Button>
			</div>
			<div className="mt-[30px]">
				<div className="relative w-max">
					<div className="py-[18px] px-[27px] max-w-[366px] w-full absolute bg-white border-primary-2 text-[1.125rem] border rounded-[10px] rounded-bl-none -right-[70%] -top-[15%]">
						Hi Jonathan, I'm Dan from Franchain. I'm here to help you get set up and collecting payments from your franchisees.
					</div>
					<img src={SmilingManImage} className="object-contain" />
				</div>
				<div className="px-[60px] py-[36px] bg-white flex justify-between items-center relative z-10">
					<h4 className="text-22">Let's get you up and running</h4>
					<p className="text-sm">5/6 steps remaining</p>
				</div>
				<div className="bg-gray w-full relative z-40">
					<div className="h-[17px] bg-primary-2 w-1/5"></div>
				</div>
				<div className="px-[10px] bg-white">
					<Accordion items={HOME_ACCORDION} />
				</div>
			</div>
		</div>
	);
}
