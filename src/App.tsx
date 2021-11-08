import type { Component } from 'solid-js';
import { Link as A, useRoutes, useLocation } from 'solid-app-router';
import { Meta } from 'solid-meta';
import routes from './routes';
import { Toggle } from './components/DarkMode';

const App: Component = () => {
	//const location = useLocation();
	const Routes = useRoutes(routes);

	return (
		<>
			<Meta name='viewport' content='width=device-width, initial-scale=1' />
			<Meta name='theme-color' content='#000000' />

			<nav class='bg-gray-200 text-gray-900 px-4 w-screen'>
				<ul class='flex items-center'>
					<li class='py-2 px-4'>
						<A href='/' class='no-underline hover:underline'>
							Home
						</A>
					</li>
					<li class='py-2 px-4'>
						<A href='/about' class='no-underline hover:underline'>
							About
						</A>
					</li>
					<li class='py-2 px-4'>
						<A href='/pokemon' class='no-underline hover:underline'>
							Pokemon
						</A>
					</li>
					<li class='py-2 px-4'>
						<A href='/pokemon/2' class='no-underline hover:underline'>
							Ivisaur
						</A>
					</li>
					<li class='py-2 px-4'>
						<A href='/error/404' class='no-underline hover:underline'>
							Error
						</A>
					</li>

					<li class='text-sm flex items-center space-x-1 ml-auto'>
						{/*
						<label>
							<span>URL:</span>
							<input
								class='w-75px p-1 bg-white text-sm rounded-lg'
								type='text'
								readOnly
								value={location.pathname}
								/>
						</label>
						*/}
						<Toggle />
					</li>
				</ul>
			</nav>

			<div class='h-full'>
				<Routes />
			</div>
		</>
	);
};

export default App;
