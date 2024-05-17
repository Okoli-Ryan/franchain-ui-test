import "./Home.styles.scss";

import { Button } from "forms/Button";
import { Link } from "react-router-dom";

import AssistanceImage from "@icons/assistance-icon.svg";
import SmilingManImage from "@images/smiling-guy-image.png";

import Accordion from "./components/Accordion";
import { HOME_ACCORDION } from "./Home.data";

export default function Home() {
	return (
		<div className="w-full">
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
				<div className="shadow-sm rounded-[10px] overflow-hidden">
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
				<div className="mt-[84px] flex flex-col gap-6 pb-12 w-full">
					<h3 className="text-40 text-center font-medium">Need assistance?</h3>
					<div className="grid grid-cols-3 justify-between gap-[30px]">
						<div className="w-full py-10 flex justify-center flex-col border border-primary-2 rounded-[20px] items-center">
							<img src={AssistanceImage} alt="assistance" className="w-[121px] h-[121px]" />
							<h4 className="mt-4 text-dark font-medium">Inviting an operator</h4>
						</div>

						<div className="w-full py-10 flex justify-center flex-col border border-primary-2 rounded-[20px] items-center">
							<img src={AssistanceImage} alt="assistance" className="w-[121px] h-[121px]" />
							<h4 className="mt-4 text-dark font-medium">Assigning a location</h4>
						</div>

						<div className="w-full py-10 flex justify-center flex-col border border-primary-2 rounded-[20px] items-center">
							<img src={AssistanceImage} alt="assistance" className="w-[121px] h-[121px]" />
							<h4 className="mt-4 text-dark font-medium">Setting up auto withdrawals</h4>
						</div>
					</div>
					<Link to="#" className="underline text-center">
						Or visit our knowledge base
					</Link>
				</div>
			</div>
		</div>
	);
}
