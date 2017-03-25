import React from 'react';

export class Input extends React.Component {
    render() {
        return (
            <div className="form-group">
                    <label htmlFor={this.props.inputId}>
                        {this.props.inputLabel}
                    </label>
                    <div className={this.props.hasError}>
                        {this.props.errorMesssage}
                    </div>
                    <input
                        type="text"
                        className="form-control" 
                        name={this.props.name}
                        placeholder={this.props.placeholder}
                        onChange={this.props.handleChange} />
            </div>
        );
    }
}