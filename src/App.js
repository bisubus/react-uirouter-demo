import React from 'react';
import { UIRouter, UISref, UIView, hashLocationPlugin } from '@uirouter/react';

const rootState = {
	name: 'root',
	url: '/',
	component: () => <div/>
};

const barState = {
	name: 'bar',
	url: '/bar',
	component: () => <div/>
};

export default class App extends React.Component {
  render() {
    return (
		<UIRouter plugins={[hashLocationPlugin]} states={[rootState, barState]}>
			<div>
				<UISref to="bar"><a>bar</a></UISref>
				<UIView/>
			</div>
		</UIRouter>
      );
    }
}
