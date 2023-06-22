import { getMenu } from '@/api/menu';
import { getPage } from '@/api/page'
import { TopLevelCategory } from '@/interfaces/page.interface';
import { Metadata, } from 'next'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }: { params: { alias: string } }): Promise<Metadata> {
	const page = await getPage(params.alias);
	return {
		title: page?.metaTitle
	}
}

export async function generateStaticParams() {
	const menu = await getMenu(0);
	return menu.flatMap(item => item.pages.map(page => ({ alias: page.alias })));
}

export default async function PageProducts({ params }: { params: { alias: string } }) {
	const page = await getPage(params.alias);
	if (!page) {
		notFound();
	}
	return (
		<div>
			{page.title}
		</div>
	)
}
