import React from 'react';

function Universe() {
  return (
    <div className="container">
      <div className="row">
        <p
          className="text-center my-4 my-md-5 px-3 px-md-5 py-4 py-md-5"
          style={{ fontSize: '1.3rem' }}
        >
          Want to know more about our technology stack? Check out the{' '}
          <a href="" style={{ textDecoration: 'none' }}>
            Zerodha.tech
          </a>{' '}
          blog.
        </p>

        <div className="text-center">
          <h4 className="mb-3 mb-md-4" style={{ fontSize: '1.6rem' }}>
            The Zerodha Universe
          </h4>
          <p className="mb-4 mb-md-5 pb-3 pb-md-4" style={{ fontSize: '1.05rem' }}>
            Extend your trading and investment experience even further with our partner platforms
          </p>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-4 mt-2 mb-4 px-3 px-md-5 text-center">
          {/* Column 1 */}
          <div className="col">
            <div>
              <a href="">
                <img
                  className="mb-3 mb-md-4"
                  src="media/images/zerodhaFundhouse.png"
                  style={{ height: '40px' }}
                />
              </a>
              <a href="" style={{ textDecoration: 'none' }}>
                <p className="text-muted mb-4 mb-md-5 pb-2" style={{ fontSize: '0.9rem' }}>
                  Our asset management venture <br />
                  that is creating simple and transparent index <br />
                  funds to help you save for your goals.
                </p>
              </a>
            </div>

            <div>
              <a href="">
                <img
                  className="mb-3 mb-md-4"
                  src="media/images/streakLogo.png"
                  style={{ height: '40px' }}
                />
              </a>
              <a href="" style={{ textDecoration: 'none' }}>
                <p className="text-muted mb-4 mb-md-5 pb-2" style={{ fontSize: '0.9rem' }}>
                  Systematic trading platform <br />
                  that allows you to create and backtest <br />
                  strategies without coding.
                </p>
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col">
            <div>
              <a href="">
                <img
                  className="mb-3 mb-md-4"
                  src="media/images/sensibullLogo.svg"
                  style={{ height: '40px' }}
                />
              </a>
              <a href="" style={{ textDecoration: 'none' }}>
                <p className="text-muted mb-4 mb-md-5 pb-2" style={{ fontSize: '0.9rem' }}>
                  Options trading platform that lets you <br />
                  create strategies, analyze positions, and examine <br />
                  data points like open interest, FII/DII, and more.
                </p>
              </a>
            </div>

            <div>
              <a href="">
                <img
                  className="mb-3 mb-md-4"
                  src="media/images/smallcaseLogo.png"
                  style={{ height: '40px' }}
                />
              </a>
              <a href="" style={{ textDecoration: 'none' }}>
                <p className="text-muted mb-4 mb-md-5 pb-2" style={{ fontSize: '0.9rem' }}>
                  Thematic investing platform <br />
                  that helps you invest in diversified <br />
                  baskets of stocks on ETFs.
                </p>
              </a>
            </div>
          </div>

          {/* Column 3 */}
          <div className="col">
            <div>
              <a href="">
                <img
                  className="mb-3 mb-md-4"
                  src="media/images/tijori.svg"
                  style={{ height: '40px' }}
                />
              </a>
              <a href="" style={{ textDecoration: 'none' }}>
                <p className="text-muted mb-4 mb-md-5 pb-2" style={{ fontSize: '0.9rem' }}>
                  Investment research platform <br />
                  that offers detailed insights on stocks, <br />
                  sectors, supply chains, and more.
                </p>
              </a>
            </div>

            <div>
              <a href="">
                <img
                  className="mb-3 mb-md-4"
                  src="media/images/dittoLogo.png"
                  style={{ height: '40px' }}
                />
              </a>
              <a href="" style={{ textDecoration: 'none' }}>
                <p className="text-muted" style={{ fontSize: '0.9rem' }}>
                  Personalized advice on life <br />
                  and health insurance. No spam <br />
                  and no mis-selling.
                </p>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mb-4 mb-md-5 pb-4 pb-md-5">
          <button className="btn btn-primary fs-5 w-auto">Sign up for free</button>
        </div>
      </div>
    </div>
  );
}

export default Universe;
