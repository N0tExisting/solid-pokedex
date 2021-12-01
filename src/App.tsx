import type { Component } from 'solid-js';
import { useRoutes } from 'solid-app-router';
import { Meta } from 'solid-meta';
import routes from 'virtual:generated-pages-solid';
//import routes from './routes';
import Nav from '$layout/Nav';
import { Boundary } from '$err/Boundary';

const App: Component = () => {
	const Routes = useRoutes(routes);

	return (
		<Boundary>
			<div class="h-full transition-colors ease-in-out duration-50">
				<Meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta name="theme-color" content="#000000" />

				<Nav />

				<div class="h-full bg-gray-100 text-gray-700 dark:(text-gray-100 bg-gray-700)">
					<Boundary>
						<Routes />
					</Boundary>
				</div>
			</div>
		</Boundary>
	);
};

export default App;
