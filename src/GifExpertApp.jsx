import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    return (
        <>
            <h1>GifExpert App</h1>
            <AddCategory setCategories={ setCategories } />

            <ol>
                {
                    categories.map( (c, index) => <GifGrid key={ index } category={ c } />)
                }
            </ol>
        </>

    )
};

export default GifExpertApp;


