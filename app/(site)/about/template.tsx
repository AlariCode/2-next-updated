export default function AboutTemplate({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div style={{ border: '1px solid red' }}>
			{children}
		</div>
	)
}