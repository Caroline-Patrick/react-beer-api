import React, {useState} from 'react';
import Beer from './Beer';

export default function BeerList({beers}) {

    const [selectedBeer, setSelectedBeer] =useState(null)

    const handleClick=(beer)=>{
        
        setSelectedBeer(beer)
        
    }

    const handleBackClick =()=> {
        setSelectedBeer(null)
    }
    
    if (selectedBeer)
         return<Beer selectedBeer={selectedBeer} onBackClick={handleBackClick} />

    else {
    return(
        <>
         
        <ul className="beers">
       
        
        {beers.map((beer)=> {
          return(
        <li className="beer" key = {beer.id}>
              <img src={beer.image_url} alt={beer.name} />
              <h3>{beer.name}</h3>
              <button onClick={()=>handleClick(beer)}>View</button>
             
            </li>
          )
    
        })
      }
        </ul>
        
</>
    )
}}

