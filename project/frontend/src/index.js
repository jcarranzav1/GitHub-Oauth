import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { StoreProvider } from './store/store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
	<BrowserRouter>
		<StoreProvider>
			<App />
		</StoreProvider>
	</BrowserRouter>,
	document.getElementById('root')
);
