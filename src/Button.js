import React from 'react';

export class Button extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="form-group">        
                <button type={this.props.type} 
                        id={this.props.inputId} 
                        className="form-control btn btn-primary">
                    {this.props.label}
                </button>
            </div>
        );
    }
}