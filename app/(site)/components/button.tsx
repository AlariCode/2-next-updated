'use client'
import { useEffect, useState } from 'react';

export default function Button() {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		console.log('sdfsd')
	}, [])

	return (
		<>
			<button onClick={() => setCounter(counter + 1)}>Кнопка</button>
			<div>{counter}</div>
		</>
	)
}