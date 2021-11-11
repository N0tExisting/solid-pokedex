export default function About() {
	return (
		<section class='p-8 h-full flex content-center justify-center justify-items-center items-center text-center flex-col'>
			<h1 class='text-7xl font-bold'>About</h1>

			<p class='mt-4'>
				This website was made with{' '}
				<a class='link-simple' href='https://solidjs.com'>
					Solid.js
				</a>{' '}
				and the{' '}
				<a class='link-simple' href='https://pokeapi.co'>
					PokéAPI
				</a>
				.
			</p>
		</section>
	);
}
