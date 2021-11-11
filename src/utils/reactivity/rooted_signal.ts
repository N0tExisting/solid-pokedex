import type { ArgumentsType } from '@antfu/utils';
import { createSignal, createRoot } from 'solid-js';
import type { Accessor, Setter } from 'solid-js';

const createRootedSignal = <T>(
	initialValue: T,
	fn?: (val: Accessor<T>, getVal: Setter<T>) => void,
	options?: {
		root: ArgumentsType<typeof createRoot>[1];
		signal: ArgumentsType<typeof createSignal>[1];
	},
) => {
	return createRoot((dispose) => {
		const [value, setValue] = createSignal(initialValue, options?.signal);
		if (typeof fn === 'function') {
			fn(value, setValue);
		}
		return [value, setValue, dispose] as const;
	}, options?.root);
};

export default createRootedSignal;
