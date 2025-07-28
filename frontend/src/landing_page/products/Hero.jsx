import React from 'react';

function Hero() {
  return (
    <div className="container p-3 p-md-5 my-4 my-md-5 text-center">
      <div className="row pb-4 pb-md-5 mx-2 mx-md-5 border-bottom">
        <h2 className="fs-2 fs-md-2 mt-5 pt-3">Zerodha Products</h2>
        <h5 className="text-muted mt-2 mb-3 mb-md-4 fs-5">Sleek, modern, and intuitive trading platforms</h5>
        <p className="pb-3 pb-md-5">
          Check out our{' '}
          <a href="" style={{ textDecoration: 'none' }}>
            investment offerings <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;

