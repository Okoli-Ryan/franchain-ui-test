import { ReactNode, useState } from "react";

import AccordionItem from "./components/AccordionItem/AccordionItem";

interface IAccordion {
	items: { header: ReactNode; content: ReactNode }[];
}

export default function Accordion({ items }: IAccordion) {
	const [selectedIndex, setSelectedIndex] = useState(0);

	function onSelect(index: number) {
		if (index === selectedIndex) {
			setSelectedIndex(-1);
		} else {
			setSelectedIndex(index);
		}
	}

	return (
		<>
			{items.map((item, index) => (
				<AccordionItem content={item.content} header={item.header} isOpen={index === selectedIndex} onSelect={() => onSelect(index)} index={index} />
			))}
		</>
	);
}
