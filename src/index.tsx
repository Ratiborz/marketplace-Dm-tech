import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from '@/redux/configure-store';
import { routes } from '@/routes/routes';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import 'normalize.css';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>{routes}</BrowserRouter>
		</Provider>
	</React.StrictMode>
);
