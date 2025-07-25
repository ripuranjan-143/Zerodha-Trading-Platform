import React, { useState } from 'react';
import { Tooltip, Grow } from '@mui/material';
import { watchlist } from '../data/data';
import { BarChartOutlined, KeyboardArrowDown, KeyboardArrowUp, MoreHoriz } from '@mui/icons-material';

const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts">{watchlist.length}/50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchListActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchlistActions(true);
  };

  const handleMouseLeave = (e) => {
    setShowWatchlistActions(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? <KeyboardArrowDown className="down" /> : <KeyboardArrowUp className="up" />}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchListActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  return (
    <span className="actions">
      <span>
        <Tooltip title="Buy (B)" arrow placement="top" TransitionComponent={Grow}>
          <button className="buy">Buy</button>
        </Tooltip>
        <Tooltip title="Sell (S)" arrow placement="top" TransitionComponent={Grow}>
          <button className="sell">Sell</button>
        </Tooltip>
        <Tooltip title="Analytics (A)" arrow placement="top" TransitionComponent={Grow}>
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>
        <Tooltip title="More" arrow placement="top" TransitionComponent={Grow}>
          <button className="action" style={{ marginRight: '135px' }}>
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};
