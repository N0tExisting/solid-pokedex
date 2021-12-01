/* eslint-disable react/no-multi-comp */
import {
	Component,
	createContext,
	useContext,
	PropsWithChildren,
	Show,
	createEffect,
	createSignal,
	on,
	untrack,
} from 'solid-js';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type switchContext<T = any> = {
	matched: boolean;
	value: T;
};

const SwitchContext = createContext<switchContext>({
	matched: false,
	value: undefined,
});

export const Default: Component = (props) => {
	const ctx = useContext(SwitchContext);
	const matched = () => {
		if (!ctx.matched) {
			ctx.matched = true;
			return true;
		} else {
			return false;
		}
	};
	return <Show when={matched()}>{props.children}</Show>;
};

type CaseProps<T = unknown> = {
	value: T;
};

export function Case<T = unknown>(props: PropsWithChildren<CaseProps<T>>) {
	const ctx = useContext(SwitchContext);
	const matched = () => {
		if (!ctx.matched) {
			const retVal = props.value === ctx.value;
			ctx.matched = retVal;
			return retVal;
		} else {
			return false;
		}
	};
	return <Show when={matched()}>{props.children}</Show>;
}

type SwitchProps<T = unknown> = {
	value: T;
};

export function Switch<T = unknown>(props: PropsWithChildren<SwitchProps<T>>) {
	const [matched, setMatched] = createSignal(false);
	const [value, setValue] = createSignal(props.value);

	//const { value } = destructure(props);
	createEffect(() => {
		const val = props.value;
		untrack(() => setValue(val as never));
	});
	createEffect(on(value, () => setMatched(false), { defer: true }));
	// TODO: Context
	return (
		<SwitchContext.Provider
			value={{
				get matched() {
					return matched();
				},
				set matched(val) {
					setMatched(val);
				},
				value: props.value,
			}}>
			{props.children}
		</SwitchContext.Provider>
	);
}
