import React from 'react';
import { Data } from './Data';
import { Input } from './Input';
import { Select } from './Select';
import { Button } from './Button';

export class Form extends React.Component {
    constructor(props) {
        super(props);

        this.data = Data();
        let stateValues = {};
        this.data.forEach( item => stateValues[item.name] = '' );
        this.state = stateValues;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputValueChange = this.handleInputValueChange.bind(this);
    }

    handleInputValueChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name] : value
        });
    }

    handleSubmit(event) {
        alert("First Name: " + this.state.firstName + 
              "\nLast Name: " + this.state.lastName +
              "\nFavourite Food: " + this.state.food);
        event.preventDefault();
    }

    render() {
        const elements = 
            this.data.map((element, index) => { 
                switch (element.type) {
                    case 'input' :
                        return <Input key={index}
                           id={element.name} 
                           label={element.label} 
                           placeholder={element.placeholder} 
                           name={element.name} 
                           handleChange={this.handleInputValueChange}
                           minLength={element.validation.minLength}
                           required={element.validation.required} />
                    case 'select' :
                        return <Select key={index}
                            id={element.name} 
                            label={element.label} 
                            placeholder={element.placeholder}
                            name={element.name}
                            options={element.options} 
                            handleChange={this.handleInputValueChange}
                            required={element.validation.required} />
                    default:
                        return ''; 
                    }
                }
                    
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