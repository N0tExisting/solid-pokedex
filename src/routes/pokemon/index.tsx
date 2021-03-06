import {
	Component,
	createResource,
	createSignal,
	For,
	Switch as Match,
	Match as Matcher,
} from 'solid-js';
import PokeAPI from 'pokeapi-typescript';
import PokemonPreview from '$comp/PokemonPreview';

const PokemonPage: Component = () => {
	const [fetched, setFetched] = createSignal(false);
	// TODO: Document: https://pokeapi.co/docs/v2#pokemon
	const [pokemon, { refetch }] = createResource(
		() =>
			PokeAPI.Pokemon.list(200).then((res) => {
				// TODO: set next, etc.
				return res.results;
			}),
		{
			initialValue: [],
		},
	);
	// TODO: Make boundary nice.
	//throw new Error('Example Error');
	return (
		<div class="h-full w-full">
			<main class="flex h-full w-full items-center content-center justify-center justify-items-center flex-col">
				<Match>
					<Matcher when={pokemon.loading}>
						<section class="align-middle justify-center text-center flex flex-col p-4 bg-light-900 rounded-md m-5 dark:(bg-dark-200 text-light-50)">
							<h1 class="text-6xl">Loading ...</h1>
						</section>
					</Matcher>
					<Matcher when={pokemon.error && pokemon.error !== null}>
						<section class="align-middle justify-center text-center flex flex-col p-4 bg-light-900 rounded-md m-5 dark:(bg-dark-200 text-light-50)">
							<h1 class="text-6xl">Error:</h1>
							<pre>
								{() => {
									if (!fetched()) {
										setFetched(true);
										refetch();
									}
									return `${pokemon.error}`;
								}}
							</pre>
						</section>
					</Matcher>
					<Matcher
						when={
							!(pokemon.loading && pokemon.error && pokemon.error !== null)
						}>
						<div class="h-full grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 overflow-scroll pb-6 contain-content scrollbar-thin scrollbar-track-transparent scrollbar-thumb-dark-700 dark:scrollbar-thumb-gray-100">
							<For each={pokemon()}>
								{(pokemon, i) => (
									// FIXME: The layout moves from 88 to 96 and we have padding on the bottom because else it gets cut off.
									<PokemonPreview pokemon={pokemon} index={i() + 1} />
								)}
							</For>
						</div>
					</Matcher>
				</Match>
			</main>
		</div>
	);
};

export default PokemonPage;
