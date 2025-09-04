import React, { useEffect, useState } from 'react';
// import { positions } from '../data/data';
import axios from 'axios';

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3002/allPositions').then((res) => {
      // console.log(res.data);
      setAllPositions(res.data);
    });
  }, []);
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
            <th>
              LTP
              <br />
              (Last Traded Price)
            </th>
            <th>P&L</th>
            <th>
              Chg.
              <br />
              (Day Change)
            </th>
          </tr>
          {allPositions.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? 'profit' : 'loss';
            const dayClass = stock.day.startsWith('-') ? 'loss' : 'profit';
            return (
              <tr key={index}>
                <td>{stock.product}</td>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td className={profClass}>
                  {(curValue - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Positions;
