import { Meta } from 'solid-meta';
import { useNavigate, Link as A } from 'solid-app-router';

export default function NotFound() {
	useNavigate()('/404', { scroll: false, replace: false });
	return (
		<main class="flex h-full w-full align-center items-center content-center justify-center justify-items-center">
			<section class="text-gray-700 dark:text-gray-100 p-8 flex flex-col align-center items-center content-center justify-center justify-items-center">
				<Meta name="robots" content="noindex follow" />
				<h1 class="text-7xl font-bold">404: Not Found</h1>
				<p class="mt-4 text-4xl text-center">
					Couldn&apos;t find the page.
					<br />
					Did you type the URL wrong?
					<br />
				</p>
				<A
					href="/"
					class="mt-4 p-3 pt-1 text-5xl text-center link-simple-big rounded-md">
					Homepage
				</A>
			</section>
		</main>
	);
}
