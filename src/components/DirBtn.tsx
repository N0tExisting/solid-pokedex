import type { Component } from 'solid-js';
import { Switch, Case } from './Switch';

export type Ref<T extends Element> = (el: T) => void | T | undefined;

export type Dir = 'up' | 'down' | 'left' | 'right';

export type DirBtnProps = {
	dir: Dir;
	ref?: Ref<HTMLButtonElement>;
};

const DirBtn: Component<DirBtnProps> = (props) => {
	return (
		<button ref={props.ref} type="button">
			{props.children || props.dir.toUpperCase()}
			<Switch value={props.dir}>
				<Case value="left">
					<span innerHTML="&larr;" />
				</Case>
				<Case value="right">
					<span innerHTML="&rarr;" />
				</Case>
			</Switch>
		</button>
	);
};

export default DirBtn;
