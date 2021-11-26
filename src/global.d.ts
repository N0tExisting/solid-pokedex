import { JSX } from 'solid-js';

declare module '[name].svg' {
	const SvgS: Record<
		string,
		Promise<{ default: JSX.SvgSVGAttributes<SVGSVGElement> }>
	>;
	export default SvgS;
}

declare module '*.svg' {
	const Svg: JSX.SvgSVGAttributes<SVGSVGElement>;
	export default Svg;
}

declare module '*.svg?component' {
	const Svg: JSX.SvgSVGAttributes<SVGSVGElement>;
	export default Svg;
}
