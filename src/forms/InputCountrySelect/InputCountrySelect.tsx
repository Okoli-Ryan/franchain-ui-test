import { Form } from "antd";
import { NamePath } from "antd/es/form/interface";
import { COUNTRY_NAMES, COUNTRY_VALUES } from "core/Constants";
import { Input } from "forms/Input/Input";
import ReactFlagsSelect from "react-flags-select";
import { twMerge } from "tailwind-merge";

interface IInputCountrySelect {
	selectedCountry: string;
	onSelectCountry: (selected: string) => void;
	className?: string;
	name: NamePath;
}

export default function InputCountrySelect({ selectedCountry, onSelectCountry, name, className }: IInputCountrySelect) {
	return (
		<div className={twMerge("mb-2.5", className)}>
			<label className="text-accent text-[16px] md:text-base font-normal">Business Name and HQ Location</label>
			<div className="flex items-center mt-[10px]">
				<Input name={name} inputClassName=" !rounded-r-none" className="w-full !mb-0" />
				<Form.Item name="country" className="!mb-0 *:!h-full  country-select">
					<ReactFlagsSelect
						selected={selectedCountry}
						className="h-full !p-0"
						onSelect={onSelectCountry}
						showSecondarySelectedLabel={false}
						showOptionLabel={false}
						customLabels={COUNTRY_NAMES}
						countries={COUNTRY_VALUES}
					/>
				</Form.Item>
			</div>
		</div>
	);
}
