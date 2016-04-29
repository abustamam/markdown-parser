import React from 'react';
import marked from 'marked'

class RenderArea extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'RenderArea';
    }
    render() {
    	const parsed = marked(this.props.text)

        return <div className="renderAreaDiv" dangerouslySetInnerHTML={{__html: parsed}}>
        </div>
    }
}

export default RenderArea;
