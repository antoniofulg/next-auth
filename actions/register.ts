"use server"

import { hash } from "bcrypt"

import { db } from "@/lib/db"
import { RegisterSchema } from "@/schemas"

import * as z from "zod"
import { getUserByEmail } from "@/data/user"

export const register = async (values: z.infer<typeof RegisterSchema>) => {
	const validatedFields = RegisterSchema.safeParse(values)

	if (!validatedFields.success) {
		return { error: "Invalid credentials" }
	}

	const { email, password, name } = validatedFields.data
	const hashedPassword = await hash(password, 10)

	const existingUser = await getUserByEmail(email)

	if (existingUser) {
		return { error: "Email already in use" }
	}

	await db.user.create({
		data: {
			email,
			password: hashedPassword,
			name,
		},
	})

	// TODO: Send verification token email

	return { success: "Email sent" }
}
