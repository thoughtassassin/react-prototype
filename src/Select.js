import React from 'react';

export class Select extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let options = this.props.options.map((option, index) => {
            return (<option value={option} key={index}>{option}</option>);
        });

        return (
            <div className="form-group">
                <label htmlFor={this.props.inputId}>
                    {this.props.inputLabel}
                </label>
                <select value={this.state.value} id={this.props.inputId} className="form-control">{options}</select>
            </div>
        );
    }
}