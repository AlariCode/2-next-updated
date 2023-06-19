import { getMenu } from '@/api/menu';

export async function Menu() {
	const menu = await getMenu(0);
	return (
		<main>
			<div>{menu.length}</div>
		</main>
	)
}