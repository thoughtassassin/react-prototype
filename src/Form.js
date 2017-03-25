import React from 'react';
import {Input} from './Input.js';
import {Select} from './Select.js';
import {Button} from './Button.js';

export class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address1: '',
            address2: '',
            city: '',
            foodType: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        alert("this is event");
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('This form was submitted ' + this.state.value);
        event.preventDefault();
    }

    render() {
        let options = [
            'Pizza', 
            'Hot Dogs', 
            'Knakworstje', 
            'Coffee'
        ];
        const address1 = this.state.address1;
        const address2 = this.state.address2;
        const city = this.state.city;
        const foodType = this.state.foodType;
        return (
            <form onSubmit={this.handleSubmit}>
                <Input
                    inputType="text" 
                    inputId="address1" 
                    inputLabel="Address 1" 
                    value={address1} 
                    onChange={this.handleChange} />
                <Input
                    inputType="text" 
                    inputId="address2" 
                    inputLabel="Address 2"
                    value={address2} 
                    onChange={this.handleChange} />
                <Input
                    inputType="text" 
                    inputId="city" 
                    inputLabel="City"
                    value={city} 
                    onChange={this.handleChange} />
                <Select
                    inputId="foodtype"
                    inputLabel="Type of Food" 
                    options={options}
                    value={foodType} 
                    onChange={this.handleChange} />
                <Button
                    type="submit"
                    label="Submit"
                />
                
            </form>
        );
    }
}