
import './App.css';
import axios from 'axios';

import React, {useState, useEffect} from "react";


export default function App() {
  const [beer, setBeer] = useState(null); 

  useEffect(()=>{
    const fetchData = async () => {
      const response = await axios.get('https://api.punkapi.com/v2/beers')
      
      setBeer(response.data)

      console.log(response.data)
    };
    fetchData();
  },[]); 


  return (
    <div>
      {beer ? beer.map(beer => <p key={beer.id}>{beer.name + ": " + beer.tagline}</p>) : 'Loading...'}
    </div>
  );

}
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

