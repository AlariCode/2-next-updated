import { getMenu } from '@/api/menu';
import Button from './button';

export async function Menu() {
	const menu = await getMenu(0);
	return (
		<main>
			<div>{menu.length}</div>
			<Button />
		</main>
	)
}