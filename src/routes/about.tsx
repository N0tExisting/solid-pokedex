import { Suspense } from 'solid-js';
import { useData, RouteDataFunc } from 'solid-app-router';

export const data: RouteDataFunc = () => {
	return {
		name: 'about',
	};
};

export default function About() {
	const data = useData();

	return (
		<section class='bg-pink-100 text-gray-700 p-8'>
			<h1 class='text-2xl font-bold'>About</h1>

			<p class='mt-4'>A page all about this website.</p>

			<Suspense>
				<pre class='mt-4'>
					<code>{JSON.stringify(data, null, 2)}</code>
				</pre>
			</Suspense>
		</section>
	);
}
