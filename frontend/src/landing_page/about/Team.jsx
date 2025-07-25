import React from 'react';

function Team() {
  return (
    <div className="container">
      <div className="row">
        <h1 className="fs-4 fs-md-3 text-center mt-5">People</h1>
      </div>

      <div className="row pt-4 pt-md-5 mt-3 mt-md-2">
        <div className="col-12 col-md-5 ps-md-5 text-center text-muted mb-5 mb-md-0">
          <img
            className="ms-md-5 mb-4 mb-md-0"
            style={{ height: '300px', width: '260px', borderRadius: '50%' }}
            src="media/images/ripuranjan1.jpg"
            alt="Ranjan Kumar"
          />
          <h5 className="mt-4">Ranjan Kumar ( Ripu )</h5>
          <p className='mb-5 pb-5'>Founder, CEO</p>
        </div>

        <div className="col-12 col-md-7 ps-md-5 pt-md-5" style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
          <p>
            Ranjan Kumar bootstrapped and founded Dreamz in 2010 to overcome the <br />
            hurdles he faced during his decade long stint as a trader. Today, <br />
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee <br />
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on &nbsp;
            <a href=""  className='text-decoration-none'>
              Homepage
            </a>
            &nbsp;/&nbsp;
            <a href="" className='text-decoration-none'>
              TradingQnA
            </a>
            &nbsp;/&nbsp;
            <a href="" className='text-decoration-none'>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
