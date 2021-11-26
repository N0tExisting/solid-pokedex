import {
	Component,
	createResource,
	createSignal,
	Switch as Match,
	Match as Matcher,
} from 'solid-js';
import { useParams } from 'solid-app-router';
import PokeAPI from 'pokeapi-typescript';

// TODO: Rework the Pokemon Dashboard
const PokemonPage: Component = () => {
	const params = useParams();
	const [fetched, setFetched] = createSignal(false);
	const [pokemon, { refetch }] = createResource(() =>
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		PokeAPI.Pokemon.resolve(params['pokemon']!),
	);
	// TODO: Add `Next` and `Prev` buttons
	return (
		<main class='flex h-full w-full items-center content-center justify-center justify-items-center'>
			<section class='align-middle items-center content-center justify-center justify-items-center text-center flex flex-col p-4 bg-light-900 rounded-md m-5 dark:(bg-dark-200 text-light-50)'>
				<Match>
					<Matcher when={pokemon.loading}>
						<h1 class='text-6xl mb-1'>Loading ...</h1>
					</Matcher>
					<Matcher when={pokemon.error && pokemon.error !== null}>
						<h1 class='text-6xl'>Error:</h1>
						<pre>
							{() => {
								if (!fetched()) {
									setFetched(true);
									refetch();
								}
								return pokemon.error;
							}}
						</pre>
					</Matcher>
					<Matcher
						when={
							!(pokemon.loading && pokemon.error && pokemon.error !== null)
						}>
						<h1 class='text-[5rem] uppercase'>{pokemon()?.name}</h1>
						<img
							class='image-render-pixel h-72 w-72'
							alt={`${pokemon()?.name}'s sprite`}
							title={pokemon()?.name}
							/*classList={{
								'image-render-pixel': crisp(),
							}}*/
							src={
								//pokemon().sprites['official-artwork']?.front_default ||
								pokemon()?.sprites.front_default
							}
						/>
					</Matcher>
				</Match>
			</section>
		</main>
	);
};

export default PokemonPage;
