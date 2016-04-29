import React from 'react';

class Textarea extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Textarea';
        this.state = {
        	value: 'This is _markdown!_'
        }
    }
    
    render() {
        return <div className="textareaDiv">
        	<div className="header">Type in text to be rendered here</div>
        	<div className="textarea">
        		<textarea className="textbox" value={this.props.text} onChange={(e) => this.props.updateText(e.target.value)}/>
        	</div>
        </div>
    }
}

export default Textarea;
