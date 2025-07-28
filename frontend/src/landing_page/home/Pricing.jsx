import React from 'react';

function Pricing() {
  return (
    <div className="container mb-5 p-4 p-md-5">
      <div className="row">
        <div className="col-12 col-md-4 mb-4">
          <h1>Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency in India. Flat fees and no
            hidden charges.
          </p>
          <a className="fs-5 text-decoration-none text-primary" href="#">
            See pricing <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>

        <div className="d-none d-md-block col-md-2"></div>

        <div className="col-12 col-md-6">
          <div className="row text-center">
            <div className="col-12 col-sm-6 mb-3 mb-sm-0 p-4 border">
              <h1 className="mb-2">&#8377;0</h1>
              <p>
                Free equity delivery and <br />
                direct mutual funds
              </p>
            </div>
            <div className="col-12 col-sm-6 p-4 border">
              <h1 className="mb-2">&#8377;20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
