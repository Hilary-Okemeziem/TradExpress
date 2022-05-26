import React, { useEffect, useState} from 'react'
import './Home.css'

const Data = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('https://api.coinlore.net/api/tickers/?start=100&limit=5')
          .then(response => response.json())
          .then(json => setData(json.data))
      }, [])
  return (
    <div className='data'>
        {data.map((x)=>{
            const{id, symbol, percent_change_24h, market_cap_usd} = x
            return(
                <div className='text position-relative' key={id}>
                    <ul className='data-list'>
                        <li className='symbol'>
                            <h6>{symbol}/NGN</h6>
                            <p className='fw-bold'>{market_cap_usd} NGN</p>
                        </li>
                        <li className='percent'>
                            <p className='fw-bold'>{percent_change_24h}</p>  
                        </li>
                    </ul>
                    <div className='line'></div>
                </div>
            )
        })}
    </div>
  )
}

export default Data