import * as z from "zod"

export const LoginSchema = z.object({
	email: z.string().email(),
	password: z.string(),
})

export const RegisterSchema = z.object({
	email: z.string().email(),
	password: z.string().min(8, {
		message: "Password must be at least 8 characters long",
	}),
	name: z.string().min(3, {
		message: "Name must be at least 3 characters long",
	}),
})
