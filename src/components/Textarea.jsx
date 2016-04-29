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
        	<textarea className="textarea" value={this.props.text} onChange={(e) => this.props.updateText(e.target.value)}/>
        </div>
    }
}

export default Textarea;
