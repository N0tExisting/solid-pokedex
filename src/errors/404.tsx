import { Meta } from 'solid-meta';

export default function NotFound() {
	return (
		<main class='flex h-full w-full items-center content-center justify-center justify-items-center'>
			<section class='text-gray-700 p-8'>
				<Meta name='robots' content='noindex follow' />
				<h1 class='text-2xl font-bold'>404: Not Found</h1>
				<p class='mt-4'>It's gone 😞</p>
			</section>
		</main>
	);
}
