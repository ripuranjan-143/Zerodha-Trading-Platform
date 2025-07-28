import React from 'react';

function Awards() {
  return (
    <div className="container my-5 p-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <img src="media/images/largestBroker.svg" alt="Largest Broker" className="img-fluid" />
        </div>

        <div className="col-12 col-md-6 g-3">
          <h1>Largest stock broker in India</h1>
          <p className="pt-2">
            2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by
            trading and investing in:
          </p>

          <div className="row my-4">
            <div className="col-12 col-sm-6">
              <ul>
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>
            <div className="col-12 col-sm-6">
              <ul>
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>

          <img src="media/images/pressLogos.png" alt="Press Logos" className="img-fluid px-5" />
        </div>
      </div>
    </div>
  );
}

export default Awards;
