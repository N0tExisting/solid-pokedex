import { Link as A } from 'solid-app-router';
import { Toggle } from '$comp/DarkMode';

const Nav = () => {
	return (
		<nav class="bg-gray-200 text-gray-900 px-4 w-screen dark:(bg-gray-800 text-gray-200)">
			<ul class="flex items-center">
				<li class="py-2 px-4">
					<A href="/" class="no-underline hover:underline">
						Home
					</A>
				</li>
				<li class="py-2 px-4">
					<A href="/about" class="no-underline hover:underline">
						About
					</A>
				</li>
				<li class="py-2 px-4">
					<A href="/pokemon" class="no-underline hover:underline">
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

				<li class="text-sm flex items-center space-x-1 ml-auto py-2">
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
	);
};

export default Nav;
