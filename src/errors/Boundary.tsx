/* eslint-disable react/no-multi-comp */
import { createEffect, ErrorBoundary, Component } from 'solid-js';

const defaultOnError = (err: unknown) =>
	console.error('Caught An Error:\n', err);

export type BoundaryProps = {
	onError?: (error: unknown) => void;
};

export const Boundary: Component<BoundaryProps> = function (props) {
	return (
		<ErrorBoundary
			fallback={(err, reset) => (
				<ErrorDisplay
					err={err}
					reset={reset}
					onError={
						typeof props.onError === 'function' ? props.onError : defaultOnError
					}
				/>
			)}>
			{props.children}
		</ErrorBoundary>
	);
};

export type ErrorDisplayProps = {
	err: unknown;
	reset: () => void;
	onError?: (error: unknown) => void;
};

export const ErrorDisplay: Component<ErrorDisplayProps> = function (props) {
	const handleClick = (e: MouseEvent) => {
		e.preventDefault();
		props.reset();
	};
	createEffect(() =>
		typeof props.onError === 'function'
			? props.onError(props.err)
			: defaultOnError(props.err),
	);
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
						{typeof props.err === 'string'
							? props.err
							: JSON.stringify(props.err, undefined, '\t')}
					</code>
				</pre>
			</section>
		</main>
	);
};

export function ErrorFallback(err: unknown, reset: () => void) {
	return <ErrorDisplay err={err} reset={reset} />;
}
