import ChevronDownBlue from "@icons/chevron-blue-down.svg";

export interface IAccordionItem {
	header: React.ReactNode;
	content: React.ReactNode;
	isOpen: boolean;
	index?: number;
	onSelect: () => void;
}

export default function AccordionItem({ header, content, isOpen, onSelect }: IAccordionItem) {
	return (
		<div className={isOpen ? "accordion-active" : ""}>
			<div className="flex items-center justify-between w-full">
				<button className="py-[30px] px-[20px] justify-between items-center flex w-full" role="button" onClick={onSelect}>
					{header}
					<img
						src={ChevronDownBlue}
						alt="dropdown icon"
						style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
						className="transition-transform ease-in-out duration-300"
					/>
				</button>
			</div>
			<div className={`overflow-hidden max-h-0 transition-all ease-in-out duration-300 ${isOpen ? "max-h-[1000px]" : ""}`}>
				<div>{content}</div>
			</div>
		</div>
	);
}
