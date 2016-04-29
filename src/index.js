import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { AppContainer } from 'react-hot-loader'

require('./stylesheets/main.sass')

ReactDOM.render(<AppContainer component={App} />, document.getElementById('root'))

if (module.hot) {
	module.hot.accept('./components/App', () => {
		ReactDOM.render(<AppContainer component={require('./components/App').default} />, document.getElementById('root'))
	})
}