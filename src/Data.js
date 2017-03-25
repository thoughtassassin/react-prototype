export function Data() {
    return [
            {
                type: 'input',
                label: 'First name',
                name: 'firstName',
                placeholder: 'Enter your first name'
            },
            {
                type: 'input',
                label: 'Last name',
                name: 'lastName',
                placeholder: 'Enter your last name'
            },
            {
                type: 'select',
                label: 'Favourite Food',
                name: 'food',
                options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
                placeholder: 'Select an option'
            }
        ];
} 