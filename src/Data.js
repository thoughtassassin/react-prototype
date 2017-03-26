export function Data() {
    return [
            {
                type: 'input',
                label: 'First name',
                name: 'firstName',
                placeholder: 'Enter your first name',
                validation: {required: true, minLength: 8}
            },
            {
                type: 'input',
                label: 'Last name',
                name: 'lastName',
                placeholder: 'Enter your last name',
                validation: {required: true}
            },
            {
                type: 'select',
                label: 'Favourite Food',
                name: 'food',
                options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
                placeholder: 'Select an option',
                validation: {required: true}
            },
            {
                type: 'input',
                label: 'Test Value',
                name: 'testValue',
                placeholder: 'Enter your test value',
                validation: ''
            },
        ];
} 