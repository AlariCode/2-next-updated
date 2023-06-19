import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Страница',
}

export default function PageProducts({ params }: { params: { alias: string } }) {
	return (
		<div>
			Страница c alias {params.alias}
		</div>
	)
}
