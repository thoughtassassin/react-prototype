import React from 'react';
import { Data } from './Data'
import { Input } from './Input'
import { Button } from './Button';

export class Form2 extends React.Component {
    constructor(props) {
        super(props);
        this.data = Data();
        let stateValues = {};
        this.data.forEach( item => stateValues[item.name] = '');   
        this.state = stateValues;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputValueChange = this.handleInputValueChange.bind(this);
    }

    handleInputValueChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name] : value
        })
    }

    handleSubmit(event) {
        alert("First Name: " + this.state.firstName + "\nLast Name: " + this.state.lastName);
        event.preventDefault();
    }

    render() {
        const elements = 
            this.data.map((element, index) =>
                    <Input key={index}
                           placeholder={element.placeholder} 
                           name={element.name} 
                           handleChange={this.handleInputValueChange} />
                );
    
        return (
            <form onSubmit={this.handleSubmit} className="form-horizontal">
                 { elements }
                <Button 
                    type="submit"
                    label="Submit" />
            </form>
        );
    }
}