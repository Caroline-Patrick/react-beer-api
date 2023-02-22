import React from 'react';
import BeerList from './BeerList';

export default function Beer({selectedBeer, onBackClick}) {

    const handleClickBack =()=> {
       onBackClick()
    }

   
    return (
        <>
        <div className = "BeerCard">
        <h1>{selectedBeer.name}</h1>
        <img src={selectedBeer.image_url} alt={selectedBeer.name} />
        <p>{selectedBeer.tagline}</p>
        <p>ABV: {selectedBeer.abv} || IBU: {selectedBeer.ibu}</p>
        <p>{selectedBeer.description}</p>
        <button onClick={handleClickBack}>Back</button>
        </div>
        </>
    )
}