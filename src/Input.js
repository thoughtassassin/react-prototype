import React from 'react';

export class Input extends React.Component {
    constructor(props) {
        super(props);
        this.valid = false;

        this.handleBlur = this.handleBlur.bind(this);
    }
    
    validate(value) {
        if (value === null || value === '') {
            return false;
        }
        return true;
    }
    
    handleBlur(event) {
        this.valid = this.validate(event.target.value);
        console.log("input valid is: ", this.valid);
    }

    render() {
        return (
            <div className="form-group">
                    <label htmlFor={this.props.id}>
                        {this.props.label}
                    </label>
                    <div className={this.props.hasError}>
                        {this.props.errorMesssage}
                    </div>
                    <input
                        type="text"
                        className="form-control" 
                        name={this.props.name}
                        placeholder={this.props.placeholder}
                        onBlur={this.handleBlur}
                        onChange={this.props.handleChange} />
            </div>
        );
    }
}