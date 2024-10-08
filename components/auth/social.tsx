"use client"

import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { DEFAULT_LOGIN_REDIRECT } from "@/routes"
import { FcGoogle } from "react-icons/fc"

export const Social = () => {
	const onClick = (provider: "google") => {
		signIn(provider, {
			callbackUrl: DEFAULT_LOGIN_REDIRECT,
		})
	}

	return (
		<div className="flex justify-center w-full gap-x-2">
			<Button
				size="lg"
				className="w-full"
				variant="outline"
				onClick={() => onClick("google")}
			>
				<FcGoogle className="size-5" />
			</Button>
		</div>
	)
}
