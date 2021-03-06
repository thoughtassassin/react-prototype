import React from 'react';

export class Input extends React.Component {
    constructor(props) {
        super(props);

        this.errorMessage = '';
        this.state = {hasError: false, hasSuccess: false, dirty: false};
        this.handleBlur = this.handleBlur.bind(this);
    }
    
    _hasError(value) {
        if (this.props.required && (value === null || value === '')) {
            this.errorMessage = ' is required.';
            return true;
        }
        if (this.props.minLength && (value.length < this.props.minLength)) {
            this.errorMessage = ' must be at least ' + this.props.minLength + ' characters.';
            return true;
        }
        return false;
    }
    
    handleBlur(event) {
        if (this._hasError(event.target.value)) {
            this.setState({hasError: true, hasSuccess: false});
        } else {
            this.setState({hasError: false});
            if (event.target.value !== '') {
                this.setState({hasSuccess: true});
            } else {
                this.setState({hasSuccess: false});
            }
        }
        this.setState({dirty: true});
    }

    render() {
        return (
            <div className={this.state.dirty ? (this.state.hasError ? 'form-group has-error' : (this.state.hasSuccess ? 'form-group has-success' : 'form-group')) : 'form-group'}>
                <label htmlFor={this.props.id}>
                        {this.props.label}<span className={this.props.required ? '' : 'hidden'}>*</span>
                        <span className={this.state.hasError? '' : 'hidden'} >
                             {this.errorMessage}
                        </span>
                    </label>
                    <input
                        type="text"
                        className="form-control" 
                        name={this.props.name}
                        placeholder={this.props.placeholder}
                        onBlur={this.handleBlur}
                        onChange={this.props.handleChange} 
                        required={this.props.required} 
                        minLength={this.props.minLength}/>
            </div>
        );
    }
}