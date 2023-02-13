
import './App.css';
import axios from 'axios';

import React, {useState, useEffect} from "react";


export default function App() {
  const [beer, setBeer] = useState(null); 

  useEffect(()=>{
    const fetchData = async () => {
      const response = await axios.get('https://api.punkapi.com/v2/beers')
      const beerArray = response.data
     
      setBeer(beerArray)

      console.log(beerArray)
    };
    fetchData();
  },[]); 

  if(!beer) return null

  return (
    <ul>
      {beer.map((beer)=> (
        <li key = {beer.id}>
          <h3>{beer.name}</h3>
          <h6>{beer.tagline}</h6>
        </li>
      ))}
    </ul>
   
  );

}

// function BeerCard({}) {
//   const [beerDisplay, setBeerDisplay] = useState(null);



//   return (
//     <div>

//     </div>
//   )

// }
// export default function App() {
//   const [beer, setBeer] =React.useState(null);

//   React.useEffect(()=> {
//     axios.get(baseURL).then((response)=> {
//       const beerArray =response.data;
//       let beertype = beerArray.map(beer => beer)
//       console.log(beertype);
//       setBeer(beertype);
//     });
//   }, []);
  
//   if(!beer) return null;

//   return (
//     <div className="App">
//       <header className="App-header">
//        <div>
//         <div>Beer: {beer.name}</div>
//         <div>Tagline: {beer.tagline}</div>
//        </div>
      
       
//       </header>
//     </div>
//   );
// }

