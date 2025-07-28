import React from 'react';

function Hero() {
  return (
    <div className="container mb-5 pb-5 mt-5 pt-5">
      <div className="row justify-content-center mt-5">
        <div className="col-12 col-md-10 col-lg-8 text-center">
          <img
            src="media/images/homeHero.png"
            alt="Hero"
            className="img-fluid w-75 mb-4"
          />
          <h1 className="px-3 fs-2 fs-md-1">Invest in everything</h1>
          <p className="fs-5 fs-md-5 px-3">
            Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
          </p>
          <button className="btn btn-primary fs-5 fs-md-5 mt-3 px-4">
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;

