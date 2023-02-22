import React from 'react';

export default function BeerList({beers}) {

    return(
        <ul className="beers">
    
        {beers.map((beer)=> {
          return(
        <li className="beer" key = {beer.id}>
              <img src={beer.image_url} alt={beer.name} />
              <h3>{beer.name}</h3>
             
            </li>
          )
    
        })
      }
        </ul>
    )
}

