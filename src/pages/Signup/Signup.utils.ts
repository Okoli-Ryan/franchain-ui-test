import { z } from 'zod';

export const SIGNUP_SCHEMA = z.object({
	firstName: z.string().nonempty("First name is required"),
	lastName: z.string().nonempty("Last name is required"),
	email: z.string().email("Invalid email format").nonempty("Email is required"),
	businessName: z.string().nonempty("Business name is required"),
	password: z.string().min(12, "Password must be at least 12 characters").nonempty("Password is required"),
});

export const COUNTRIES = [
	{ value: "US", label: "United States" },
	{ value: "AT", label: "Austria" },
	{ value: "BE", label: "Belgium" },
	{ value: "BG", label: "Bulgaria" },
	{ value: "HR", label: "Croatia" },
	{ value: "CY", label: "Cyprus" },
	{ value: "CZ", label: "Czech Republic" },
	{ value: "DK", label: "Denmark" },
	{ value: "EE", label: "Estonia" },
	{ value: "FI", label: "Finland" },
	{ value: "FR", label: "France" },
	{ value: "DE", label: "Germany" },
	{ value: "HU", label: "Hungary" },
	{ value: "IE", label: "Republic of Ireland" },
	{ value: "IT", label: "Italy" },
	{ value: "LU", label: "Luxembourg" },
	{ value: "MT", label: "Malta" },
	{ value: "NL", label: "Netherlands" },
	{ value: "NO", label: "Norway" },
	{ value: "PL", label: "Poland" },
	{ value: "PT", label: "Portugal" },
	{ value: "RO", label: "Romania" },
	{ value: "SK", label: "Slovak Republic" },
	{ value: "SI", label: "Slovenia" },
	{ value: "ES", label: "Spain" },
	{ value: "SE", label: "Sweden" },
	{ value: "AU", label: "Australia" },
	{ value: "CA", label: "Canada" },
	{ value: "NZ", label: "New Zealand" },
	{ value: "ZA", label: "South Africa" },
	{ value: "CH", label: "Switzerland" },
	{ value: "GB", label: "United Kingdom" },
	{ value: "other", label: "Other" },
];
