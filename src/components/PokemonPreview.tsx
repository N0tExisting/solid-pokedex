import { Component, createResource, Suspense } from 'solid-js';
import { Link as A } from 'solid-app-router';
import type { INamedApiResource, IPokemon } from 'pokeapi-typescript';
import PokeApi from 'pokeapi-typescript';

export type PokemonPreviewProps = {
	pokemon: INamedApiResource<IPokemon>;
	index: number;
};

const PokemonPreview: Component<PokemonPreviewProps> = (P) => {
	const [pokemon] = createResource(() =>
		PokeApi.Pokemon.resolve(P.pokemon.name),
	);
	return (
		<section class="m-5">
			<A
				href={`/pokemon/${P.pokemon.name}`}
				class="align-middle justify-center items-center content-center justify-items-center text-center transform-gpu flex flex-col filter p-4 bg-light-900 content-visibility-auto text-dark-200 rounded-md drop-shadow-md no-underline underline-blue-500 duration-50 transition hover:(underline underline-5 underline-blue-500 drop-shadow-xl -translate-x-1 -translate-y-1) dark:(bg-dark-200 text-light-50)"
				/*  */
				title={pokemon()?.name}>
				<h2 class="text-5xl uppercase">{`${P.index}. ${P.pokemon.name}`}</h2>
				<Suspense fallback={<h3 class="text-6xl">Loading ...</h3>}>
					<img
						class="image-render-pixel h-74 w-74 m-1"
						alt={pokemon() ? `${pokemon()?.name}'s sprite` : 'Pokemon sprite'}
						src={
							//pokemon.sprites['official-artwork']?.front_default ||
							pokemon()?.sprites.front_default
						}
					/>
				</Suspense>
			</A>
		</section>
	);
};

export default PokemonPreview;
