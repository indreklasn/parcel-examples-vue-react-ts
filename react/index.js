import './styles.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

const rootDiv = document.getElementById('reactapp');

ReactDOM.render(<App />, rootDiv)

if (module.hot) {
	module.hot.accept();
}
