import React, {useState} from 'react';
import Beer from './Beer';
import HeartButton from './HeartButton'
import MaterialUIBeerCard from './MaterialUIBeerCard';


export default function BeerList({beers}) {

    const [selectedBeer, setSelectedBeer] =useState(null)

    const handleClick=(beer)=>{
        
        setSelectedBeer(beer)   
    }

    const handleBackClick =()=> {
        setSelectedBeer(null)
    }
    
    if (selectedBeer)
    //if a beer is selected, show Beer component of selected beer, and also pass in handleBackClick function so user can return to BeerList component
         return<Beer selectedBeer={selectedBeer} onBackClick={handleBackClick} />

    else {
    return(
        <div>
         
        <ul className="beers">
       
        
        {beers.map((beer)=> {
          return(
        <li className="beer" key={beer.id}>
              
              
             <MaterialUIBeerCard beer={beer}/>
            </li>
          )
    
        })
      }
        </ul>
        
</div>
    )
}}

