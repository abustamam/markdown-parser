import React from 'react'
import classnames from 'classnames'
import Textarea from './Textarea'
import RenderArea from './RenderArea'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.displayName = 'App'
        this.state = {
        	text: `
Heading
=======

Sub-heading
-----------
 
### Another deeper heading
 
Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a  
line break

Text attributes *italic*, **bold**, 
\`monospace\`, ~~strikethrough~~ .

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

The rain---not the reign---in
Spain.

 *[Rasheed Bustamam](http://github.com/abustamam)*
        	`
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