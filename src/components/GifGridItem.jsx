import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'primereact/card';


export const GifGridItem = ({  title, images }) => {


    return (
            <Card 
                className="animate__animated animate__bounceIn"
                title={ title } 
                header={ <img 
                    alt={ title } 
                    src={ images }
                    style={{ 
                        borderRadius: '15px',
                        width: "250px",
                        height: '300px',
                        boxShadow: '5px 5px 4px grey',
                        marginBottom: '6px',
                        border: '2px solid grey'
                    }}
                /> }
                style={{ 
                    padding: '10px', 
                    width: 'auto', 
                    display: 'inline-block',
                    textAlign: 'center',
                    margin: '10px'
                }} 
            />
    );
}

GifGridItem.propsTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    images: PropTypes.string.isRequired
}
