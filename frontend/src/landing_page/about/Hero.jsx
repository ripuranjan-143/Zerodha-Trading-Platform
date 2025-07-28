import React from 'react';

function Hero() {
  return (
    <div className="container">
      <div className="row p-3 p-md-5 my-3 my-md-5">
        <h1 className="fs-4 fs-md-3 text-center pt-5 mt-5">
          We pioneered the discount broking model in India.
          <br />
          Now, we are breaking ground with our technology.
        </h1>
      </div>

      <div className="row px-3 px-md-5 mt-3 mt-md-5 border-top text-muted">
        <div className="col-12 col-md-6 mt-4 mt-md-5 ps-md-5" style={{ fontSize: '1.05rem' }}>
          <p className='ps-5' style={{ lineHeight: '1.8' }}>
            We kick-started operations on the 15th of August, 2010 <br /> with the goal of breaking
            all barriers that traders and <br />
            investors face in India in terms of cost, support, and <br />
            technology. We named the company Zerodha, a <br />
            combination of Zero and "Rodha", the Sanskrit word for <br />
            barrier.
          </p>
          <br />
          <p className='ps-5' style={{ lineHeight: '1.8' }}>
            Today, our disruptive pricing models and in-house <br />
            technology have made us the biggest stock broker <br /> in India.
          </p>
          <br />
          <p className='ps-5' style={{ lineHeight: '1.8' }}>
            Over 1.6+ crore clients place billions of orders every year <br /> through our powerful
            ecosystem of investment <br /> platforms, contributing over 15% of all Indian retail{' '}
            <br />
            trading volumes.
          </p>
        </div>

        <div className="col-12 col-md-6 mt-4 mt-md-5 pe-md-5" style={{ fontSize: '1.05rem' }}>
          <p className='' style={{ lineHeight: '1.8' }}>
            In addition, we run a number of popular open online <br />
            educational and community initiatives to empower retail <br /> traders and investors.
          </p>
          <br />
          <p style={{ lineHeight: '1.8' }}>
            <a href="" className='text-decoration-none'>
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested <br /> in several fintech startups with
            the goal of growing the <br /> Indian capital markets.
          </p>
          <br />
          <p style={{ lineHeight: '1.8' }}>
            And yet, we are always up to something new every day. <br /> Catch up on the latest
            updates on our{' '}
            <a href="" className='text-decoration-none'>
              blog
            </a>{' '}
            or see what <br /> the media is{' '}
            <a href="" className='text-decoration-none'>
              saying about us
            </a>{' '}
            or learn more about our <br /> business and product{' '}
            <a href="" className='text-decoration-none'>
              philosophies
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
