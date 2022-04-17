import './App.css';
              
import { useEffect, useState } from 'react'         // Hook useEffect: execute method in the beginnings of this component.
import axios from 'axios';                          // For HTTP petitions
import TableCoins from './components/TableCoins'    //Tablecoins component



function App() {

  const [coins_data, setCoins] = useState([])  //Define and update variable
  const [search, setsearch] = useState('')  

  const prices_values =async ()=>{
    const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100& page=1&sparkline=false')
    
    setCoins(res.data)  //Update the value of coins_data
    //console.log(res.data)
  }


  useEffect(()=> {
    prices_values()
  }, [])

  return (
    <div className="container">
      <div className='row'>
        <input type='text' placeholder='Search Token' className='form-control bg-dark text-light border-0 mt-4 text-center' onChange={e => setsearch(e.target.value)}/>
        <TableCoins coins={coins_data} search={search} />  
      </div>
      
    </div>
  );
}

export default App;
