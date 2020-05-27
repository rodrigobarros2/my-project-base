import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import Routes from './routes';
import history from './services/history';

import GlobalStyled from './styles/global';

// o import do store tem que vim depois do Reacttotron,
import store from './store';

/* o histori é colocado na div Routes para que pegue toda a plicação */
function App() {
	return (
		<Provider store={store}>
			<Router history={history}>
				<Routes />
				<GlobalStyled />
			</Router>
		</Provider>
	);
}

export default App;
