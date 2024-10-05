"use client"

import { Button } from "@/components/ui/button"
import { FcGoogle } from "react-icons/fc"

export const Social = () => {
	return (
		<div className="flex justify-center w-full gap-x-2">
			<Button
				size="lg"
				className="w-full"
				variant="outline"
				onClick={() => null}
			>
				<FcGoogle className="size-5" />
			</Button>
		</div>
	)
}
