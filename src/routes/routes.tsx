import { App } from '@/components/app';
import { Route, Routes } from 'react-router-dom';

export const routes = (
	<Routes>
		<Route path='/' element={<App />} />
	</Routes>
);
