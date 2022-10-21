import React from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs( category );

    
    return (
        <div>
            <h3>{ category }</h3>

            { 
                loading && <ProgressSpinner 
                    style={{ width: "50px", height: "50px" }}
                    strokeWidth="5" 
                /> 
            }

            <ol>
                {
                   images.map((item) => {
                        return <GifGridItem 
                            key={ item.id } 
                            title={ item.title }
                            images={ item.images }
                        />
                   })
                }
            </ol>
        </div>
    );
}


