import React, {useState} from 'react';
import Beer from './Beer';


export default function BeerList({beers}) {

    const [selectedBeer, setSelectedBeer] =useState(null)
    const [isClick, setClick] = useState(false);

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
              
              <img src={beer.image_url} alt={beer.name} />
              <h3>{beer.name}</h3>
              <button onClick={()=>handleClick(beer)}>View</button>
             
            </li>
          )
    
        })
      }
        </ul>
        
</div>
    )
}}

