
import './App.css';
import axios from 'axios';

import React, {Component} from "react";

// const baseURL = 'https://api.punkapi.com/v2/beers'

class App extends Component {
  constructor() {
    super();

    this.render();{
      
    }
  }
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

export default App;
