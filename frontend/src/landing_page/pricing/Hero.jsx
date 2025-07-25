import React from 'react';

function Hero() {
  return (
    <div className="container mt-5 pt-1">
      <div className="row">
        {/* Heading Section */}
        <div className="text-center my-4 my-md-5 py-4 py-md-5">
          <h3>Charges</h3>
          <p className="fs-5 text-muted">List of all charges and taxes</p>
        </div>

        {/* Cards Section */}
        <div className="row m-3 m-md-5 px-3 px-md-5 text-center gy-5">
          {/* Card 1 */}
          <div className="col-12 col-md-4 px-3 px-md-5">
            <img style={{ height: '200px' }} src="media/images/pricing-eq.svg" />
            <h3 className="mb-3 mt-3">Free equity delivery</h3>
            <p className='text-muted'>
              All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
            </p>
          </div>

          {/* Card 2 */}
          <div className="col-12 col-md-4 px-3 px-md-5">
            <img style={{ height: '200px' }} src="media/images/other-trades.svg" />
            <h3 className="mb-3 mt-3">Intraday and F&O trades</h3>
            <p className='text-muted'>
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity,
              currency, and commodity trades. Flat ₹20 on all option trades.
            </p>
          </div>

          {/* Card 3 */}
          <div className="col-12 col-md-4 px-3 px-md-5">
            <img style={{ height: '200px' }} src="media/images/pricing-eq.svg" />
            <h3 className="mb-3 mt-3">Free direct MF</h3>
            <p className='text-muted'>
              All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
