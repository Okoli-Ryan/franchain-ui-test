import { z } from 'zod';

export const SIGNUP_SCHEMA = z.object({
	firstName: z.string().nonempty("First name is required"),
	lastName: z.string().nonempty("Last name is required"),
	email: z.string().email("Invalid email format").nonempty("Email is required"),
	businessName: z.string().nonempty("Business name is required"),
	password: z.string().min(12, "Password must be at least 12 characters").nonempty("Password is required"),
});
