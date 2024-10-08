import { UserRole } from "@prisma/client"
import { type DefaultSession } from "next-auth"

declare module "next-auth" {
	interface Session {
		user: {
			role: UserRole
		} & DefaultSession["user"]
	}
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { JWT } from "next-auth/jwt"

declare module "next-auth/jwt" {
	interface JWT {
		role?: UserRole
	}
}
