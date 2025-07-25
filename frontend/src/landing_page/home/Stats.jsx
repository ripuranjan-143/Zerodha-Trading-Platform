import React from 'react';

function Stats() {
  return (
    <div className="container p-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 mb-5 mb-md-0">
          <h1 className="fs-1 text-center text-md-start">Trust with confidence</h1>

          <div className="mt-4 px-3 px-md-0">
            <h2 className="fs-3 mt-4 mb-2 text-center text-md-start">Customer-first always</h2>
            <p className="text-muted text-center text-md-start">
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 <br />lakh crores of equity investments,
              making us India’s largest <br />broker; contributing to 15% of daily retail exchange <br />volumes in India.
            </p>

            <h2 className="fs-3 mt-4 mb-2 text-center text-md-start">No spam or gimmicks</h2>
            <p className="text-muted text-center text-md-start">
              No gimmicks, spam, "gamification", or annoying push <br />notifications. High quality apps that you
              use at your pace, <br />the way you like. Our <a className="text-decoration-none"> philosophies</a>.
            </p>

            <h2 className="fs-3 mt-4 mb-2 text-center text-md-start">The Zerodha universe</h2>
            <p className="text-muted text-center text-md-start">
              Not just an app, but a whole ecosystem. Our investments <br />in 30+ fintech startups offer you
              tailored services specific <br />to your needs.
            </p>

            <h2 className="fs-3 mt-4 mb-2 text-center text-md-start">Do better with money</h2>
            <p className="text-muted text-center text-md-start">
              With initiatives like <a className="text-decoration-none">Nudge</a> and{' '}
              <a className="text-decoration-none">Kill</a> Switch, we don't just <br />facilitate transactions, but
              actively help you do better with <br /> your money.
            </p>
          </div>
        </div>

        <div className="col-12 col-md-6 text-center">
          <img src="media/images/ecosystem.png" alt="Ecosystem" className="img-fluid" />

          <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
            <a className="text-decoration-none text-primary fw-semibold" href="#">
              Explore our products <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a className="text-decoration-none text-primary fw-semibold" href="#">
              Try Kite demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
