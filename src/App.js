
import React, {useState, useEffect} from "react";
import './App.css';
import axios from 'axios';
// import Beer from "./Beer.js"



export default function App() {
  const [beer, setBeer] = useState(null); 

  useEffect(()=>{
    const fetchData = async () => {
      const response = await axios.get('https://api.punkapi.com/v2/beers')
      const beerArray = response.data
     
      setBeer(beerArray)

      // console.log(beerArray)
    };
    fetchData();
  },[]); 

  if(!beer) return null

  return (
    <>
    <h2>beers</h2>
    <ul className="beers">
    
    {beer.map((beer)=> {
      return(
    <li className="beer" key = {beer.id}>
          <img src={beer.image_url} alt={beer.name} />
          <h3>{beer.name}</h3>
         
        </li>
      )

    })
  }
    </ul>
    </>
   
  );

}

// {beer.map((beer)=> {
//   return <Beer beer= {beer} />
// }
 

// function BeerCard({}) {
//   const [beerDisplay, setBeerDisplay] = useState(null);

    

//   return (
//     <div>

//     </div>
//   )

// }
