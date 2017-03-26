import React from 'react';

export class Select extends React.Component {
    constructor(props) {
        super(props);

        this.state = {hasError: false, hasSuccess: false};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.handleChange(event);

        if (this.props.required) {
            if (event.target.value === '') {
                this.setState({hasError : true, hasSuccess: false});
            } else {
                this.setState({hasError : false, hasSuccess: true});
            }
        }
    }

    render() {
        let options = this.props.options.map((option, index) => {
            return (<option value={option} key={index + 1}>{option}</option>);
        });
        options.unshift((<option value="" key="0">Please Select</option>));

        return (
            <div className={this.state.hasError ? 'form-group has-error' : (this.state.hasSuccess ? 'form-group has-success' : 'form-group') }>
                <label htmlFor={this.props.id}>
                    {this.props.label} <span className="error-message"> is required</span>
                </label>
                <select value={this.props.value} 
                        name={this.props.name} 
                        id={this.props.inputId} 
                        onChange={this.handleChange} 
                        className="form-control"
                        required={this.props.required}>{options}</select>
            </div>
        );
    }
}