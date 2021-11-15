import type { Component } from 'solid-js';
import { Link as A, useRoutes } from 'solid-app-router';
import { Meta } from 'solid-meta';
//import routes from 'virtual:generated-pages-solid';
import routes from './routes';
import { Toggle } from './components/DarkMode';
import { Boundary } from './errors/Boundary';

const App: Component = () => {
	const Routes = useRoutes(routes);

	return (
		<Boundary>
			<div class='h-full transition-colors ease-in-out duration-50'>
				<Meta name='viewport' content='width=device-width, initial-scale=1' />
				<Meta name='theme-color' content='#000000' />

				<nav class='bg-gray-200 text-gray-900 px-4 w-screen dark:(bg-gray-800 text-gray-200)'>
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
						{/*
						<li class='py-2 px-4'>
							<A href='/pokemon/2' class='no-underline hover:underline'>
								Ivisaur
							</A>
						</li>
						<li class='py-2 px-4'>
							<A href='/404'
								onclick={() => {throw new Error('Yeet')}}
								class='no-underline hover:underline'>
								404
							</A>
						</li>
						*/}

						<li class='text-sm flex items-center space-x-1 ml-auto py-2'>
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

				<div class='h-full bg-gray-100 text-gray-700 dark:(text-gray-100 bg-gray-700)'>
					<Boundary>
						<Routes />
					</Boundary>
				</div>
			</div>
		</Boundary>
	);
};

export default App;
