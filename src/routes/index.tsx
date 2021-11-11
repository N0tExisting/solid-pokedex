import { Link as A } from 'solid-app-router';

export default function Home() {
	return (
		<main class='flex flex-col align-middle justify-center text-center'>
			<h1 class='text-6xl'>Pokedex</h1>
			<div class=''>
				<section class='m-4'>
					<A class='p-4' href='/pokemon'>
						<h2 class='text-5xl link-simple-big'>Pokemon</h2>
					</A>
				</section>
			</div>
		</main>
	);
}
