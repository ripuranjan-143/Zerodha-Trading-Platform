import React from 'react';

function Hero() {
  return (
    <div className="heroComponent mt-5">
      <div className="container">
        <div className="row">
          <div className="col-6 heroRight">
            <h5 className='mt-5'>Support Portal</h5>
            <h4 className="mt-5 pt-5 mb-4">Search for an answer or browse help topics to create a ticket</h4>
            <input
              placeholder=" Eg. how do I activate F&O, why is my order getting rej.."
              style={{ height: '50px', width: '400px', borderRadius: '3px', border: 'none' }}
            />
            <br />
            <div className="anchorTab mt-3">
              <a className="text-light" href="">
                Track account opening
              </a>{' '}
              &nbsp;
              <a className="text-light" href="">
                Track segment activation
              </a>{' '}
              &nbsp;
              <a className="text-light" href="">
                Intraday margins
              </a>{' '}
              &nbsp;
              <br />
              <a className="text-light" href="">
                Kite user manual
              </a>
            </div>
          </div>

          <div className="col-6 heroLeft ">
            <a
              className="text-light mt-5 pt-4"
              style={{ display: 'block', textAlign: 'right', paddingRight: '70px' }}
              href=""
            >
              Track Tickets
            </a>
            <h4 className=" mt-5 pt-5 ms-5 ps-5">Featured</h4>
            <p className='ms-5 ps-5'>
              1. &nbsp; 
              <a className="text-light" href="" style={{}}>
                Current Takeovers and Delisting – January 2024
              </a>{' '}
            </p>

            <p className='ms-5 ps-5'>
              2. &nbsp; 
              <a className="text-light" href="" style={{ lineHeight: '2.4' }}>
                Latest Intraday leverages – MIS & CO
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;