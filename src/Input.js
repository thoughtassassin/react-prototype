import React from 'react';

export class Input extends React.Component {
    constructor(props) {
        super(props);

        this.errorMessage = this.props.label + " must be filled out";

        let initState = {hasError: false, dirty: false};
        for (let validation in this.props.validation) {
            initState[validation] = this.props.validation[validation];
        }
        this.state = initState;
        console.log(this.state);
        this.handleBlur = this.handleBlur.bind(this);
    }
    
    _validate(value) {
        if (value === null || value === '') {
            return true;
        }
        return false;
    }
    
    handleBlur(event) {
        if (this._validate(event.target.value)) {
            this.setState({hasError: true});
        } else {
            this.setState({hasError: false});
        }
        this.setState({dirty: true});
        console.log("This has error: ", this.state.hasError)
    }

    render() {
        return (
            <div className={this.state.dirty ? (this.state.hasError ? 'form-group has-error' : 'form-group has-success') : 'form-group'}>
                <label htmlFor={this.props.id}>
                        {this.props.label}&nbsp;
                        <span className={this.state.hasError? '' : 'hidden'} >
                             must be filled out.
                        </span>
                    </label>
                    <input
                        type="text"
                        className="form-control" 
                        name={this.props.name}
                        placeholder={this.props.placeholder}
                        onBlur={this.handleBlur}
                        onChange={this.props.handleChange} 
                        required={this.state.required} 
                        minLength={this.state.minLength}/>
            </div>
        );
    }
}