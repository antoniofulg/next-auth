import { ExclamationTriangleIcon } from "@radix-ui/react-icons"
import { CardWrapper } from "./card-wrapper"

export const ErrorCard = () => {
	return (
		<CardWrapper
			backButtonHref="/auth/login"
			backButtonLabel="Back to login"
			headerLabel="Ops! Something went wrong!"
			showSocial={false}
		>
			<div className="w-full flex items-center justify-center">
				<ExclamationTriangleIcon className="text-destructive size-4" />
			</div>
		</CardWrapper>
	)
}
