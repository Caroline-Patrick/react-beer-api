import './App.css';
import axios from 'axios';
import BeerList from './components/BeerList';
import React, {useState, useEffect} from "react";

export default function App() {
  const [beer, setBeer] = useState(null); 

  useEffect(()=>{
    const fetchData = async () => {
      const response = await axios.get('https://api.punkapi.com/v2/beers')
      const beerArray = response.data
     
      setBeer(beerArray)

     
    };
    fetchData();
  },[]); 

  if(!beer) return null

  return (
    <>
    
   <BeerList beers={beer} />
    </>
   
  );

}
// class App extends React.Component {
//   constructor(props) {
//     //takes all of the data from parent (react.component) and is able to use it
//     super(props)

//     this.state = {
//       beer: null,
//     }
//   }

//   componentDidMount() {
//     axios.get('https://api.punkapi.com/v2/beers').then(response => {const beerArray = response.data})
//     this.setState({beer: beerArray})
//   }
//   render(){
//     if(!this.state.beer) return <p>...Loading</p>
//     return(
//       <div className="App">

//       </div>
//     )
//   }
// }




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
