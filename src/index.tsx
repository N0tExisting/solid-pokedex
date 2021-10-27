import 'windi.css';

import { render } from 'solid-js/web';
import { Router } from 'solid-app-router';
import { MetaProvider } from 'solid-meta';
import App from './app';

render(
	() => (
		<MetaProvider>
			<Router>
				<App />
			</Router>
		</MetaProvider>
	),
	document.getElementById('root') as HTMLElement,
);
