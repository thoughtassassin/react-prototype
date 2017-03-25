import React from 'react';

export class Select extends React.Component {
    render() {
        let options = this.props.options.map((option, index) => {
            return (<option value={option} key={index}>{option}</option>);
        });

        return (
            <div className="form-group">
                <label htmlFor={this.props.id}>
                    {this.props.label}
                </label>
                <select value={this.props.value} name={this.props.name} id={this.props.inputId} onChange={this.props.handleChange} className="form-control">{options}</select>
            </div>
        );
    }
}