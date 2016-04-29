import React from 'react';
import marked from 'marked'

class RenderArea extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'RenderArea';
    }
    render() {
    	const parsed = marked(this.props.text)

        return <div className="renderAreaDiv">
        	<div className="header">Its rendered!</div>
        	<div className="renderArea" dangerouslySetInnerHTML={{__html: parsed}} />
        </div>
    }
}

export default RenderArea;
