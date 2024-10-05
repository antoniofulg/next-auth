type Props = {
	children: React.ReactNode
}

const AuthLayout = ({ children }: Props) => {
	return (
		<div className="bg-blue-500">
			<div>{children}</div>
		</div>
	)
}

export default AuthLayout
