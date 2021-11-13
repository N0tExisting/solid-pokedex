import { onMount } from 'solid-js';

export default function ErrorDisplay(err: unknown, reset: () => void) {
	const handleClick = (e: MouseEvent) => {
		e.preventDefault();
		reset();
	};
	onMount(() => console.error('Caught An Error:\n', err));
	return (
		<main class='flex h-full w-full items-center content-center justify-center justify-items-center bg-gray-100 text-gray-700 dark:(text-gray-100 bg-gray-700)'>
			<section class='p-8'>
				<h1 class='text-6xl font-bold'>Error: Something went Horribly wrong</h1>
				<button
					onclick={handleClick}
					type='reset'
					class='p-2 rounded-sm bg-red-600'>
					Retry
				</button>
				<pre class='mt-4 rounded-lg p-4 font-mono bg-dark-50 dark:bg-dark-200'>
					<code>
						{typeof err === 'string'
							? err
							: JSON.stringify(err, undefined, '\t')}
					</code>
				</pre>
			</section>
		</main>
	);
}
