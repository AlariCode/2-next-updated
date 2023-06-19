import Image from 'next/image'
import styles from './page.module.css'
import { Metadata } from 'next'
import Logo from '../public/vercel.svg';

// export const metadata: Metadata = {
// 	title: 'Исправленные данные',
// }

export async function generateMetadata(): Promise<Metadata> {
	// ...
	return {
		title: 'ComputedMeta',
	}
}

export default function Home() {
	console.log('I am home');
	return (
		<main className={styles.main}>
			Главная страница
		</main>
	)
}
