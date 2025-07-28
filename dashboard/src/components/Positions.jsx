import React from 'react';
// import { positions } from '../data/data';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';


const Positions = () => {
  const [allPositions, setAllPositions] = useState([])
  
  useEffect(() => {
    axios.get("http://localhost:3002/allPositions").then((res) => {
      console.log(res.data);
      setAllPositions(res.data)
    })
  })
  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>

          {allPositions.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? 'profit' : 'loss';
            const dayClass = stock.isLoss ? 'loss' : 'profit';

            return (
              <tr key={index}>
                <th>{stock.product}</th>
                <th>{stock.name}</th>
                <th>{stock.qty}</th>
                <th>{stock.avg.toFixed(2)}</th>
                <th>{stock.price.toFixed(2)}</th>
                <th className={profClass}>{(curValue - stock.avg * stock.qty).toFixed(2)}</th>
                <th className={dayClass}>{stock.day}</th>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Positions;
