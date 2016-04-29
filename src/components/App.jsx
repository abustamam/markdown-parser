import React from 'react'
import classnames from 'classnames'
import Textarea from './Textarea'
import RenderArea from './RenderArea'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.displayName = 'App'
        this.state = {
        	text: 'This is _markdown!_'
        }
    }

    updateText(text) {
    	this.setState({text})
    }

    render() {
        return <div className="main">
        	<Textarea text={this.state.text} updateText={::this.updateText}/>
        	<RenderArea text={this.state.text}/>
        </div>
    }
}

export default App;