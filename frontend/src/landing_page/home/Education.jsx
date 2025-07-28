import React from 'react';

function Education() {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-12 col-md-6 g-5 mb-4 mb-md-0">
          <img className="img-fluid" src="media/images/education.svg" alt="Education" />
        </div>
        <div className="col-12 col-md-6 ps-md-5 pt-4 g-4">
          <h1 className="fs-2 mb-4 mt-4">Free and open market education</h1>
          <p className="">
            Varsity, the largest online stock market education book in the world covering everything
            from the basics to advanced trading.
          </p>
          <a className="fs-5 text-decoration-none" href="#">
            Varsity <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
          <p className="mt-3">
            TradingQ&A, the most active trading and investment community in India for all your
            market related queries.
          </p>
          <a className="fs-5 text-decoration-none" href="#">
            TradingQ&A <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
