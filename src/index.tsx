import { render } from 'solid-js/web';
import { Router } from 'solid-app-router';
import { MetaProvider } from 'solid-meta';

import 'windi.css';

import App from './App';

render(
	() => (
		<MetaProvider>
			<Router>
				<App />
			</Router>
		</MetaProvider>
	),
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	document.getElementById('root')!,
);
