import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { InputText } from 'primereact/inputtext';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue( e.target.value );    
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( inputValue.trim().length > 2 ) {
            setCategories( (c) => [ inputValue, ...c  ] );
            setInputValue('');
        }

    }

    return (
        <form onSubmit={ handleSubmit }>
            <span className="p-float-label">
                <InputText id="in" value={ inputValue } onChange={ handleInputChange } />
                <label htmlFor="in">Search</label>
            </span>
        </form>
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
