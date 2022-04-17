import React from 'react'
import RowCoins from './RowCoins'        //RowCoins component

const titles_row = ['#', 'Coin', 'Price', 'Change 24H', 'Volume 24h']

//props object contains the params
const TableCoins = ({coins, search}) => {

  //we apply the filter
  const filteredTokens = coins.filter( (c) => 
    c.name.toLowerCase().includes(search.toLowerCase())|
    c.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <table className='table table-dark mt-4 table-over'>
      <thead>
        <tr>
          { titles_row.map((item, index) => (
            <td key={index}>{item}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredTokens.map( (coin, index) => (
          <RowCoins coin={coin} key={index}  index={index+1} />
        ))}
      </tbody>
    </table>
  )
}

export default TableCoins