import { useState } from 'react';
import s from './app.module.scss';
import AvatarPng from '@/assets/sett.png';
import jpg from '@/assets/fit.jpeg';
import Svg from '@/assets/Icon-Wrapper.svg';

export const App = () => {
	const [count, setCount] = useState<number>(0);

	const increment = () => setCount(prev => prev + 1);

	return (
		<>
			<div className={s.value}>Hello World!</div>
			<h1>{count}</h1>
			<button className={s.button} onClick={increment}>
				Click on me
			</button>
			<div>
				<img src={AvatarPng} alt='' />
				<img src={jpg} alt='' />
				<Svg className={s.svgr} width={200} height={200} />
			</div>
		</>
	);
};
