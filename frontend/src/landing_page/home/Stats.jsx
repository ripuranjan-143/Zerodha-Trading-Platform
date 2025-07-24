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
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments,
              making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.
            </p>

            <h2 className="fs-3 mt-4 mb-2 text-center text-md-start">No spam or gimmicks</h2>
            <p className="text-muted text-center text-md-start">
              No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you
              use at your pace, the way you like.<a className="text-decoration-none"> Our philosophies</a>.
            </p>

            <h2 className="fs-3 mt-4 mb-2 text-center text-md-start">The Zerodha universe</h2>
            <p className="text-muted text-center text-md-start">
              Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you
              tailored services specific to your needs.
            </p>

            <h2 className="fs-3 mt-4 mb-2 text-center text-md-start">Do better with money</h2>
            <p className="text-muted text-center text-md-start">
              With initiatives like <a className="text-decoration-none">Nudge</a> and{' '}
              <a className="text-decoration-none">Kill</a> Switch, we don't just facilitate transactions, but
              actively help you do better with your money.
            </p>
          </div>
        </div>

        <div className="col-12 col-md-6 text-center">
          <img src="media/images/ecosystem.png" alt="Ecosystem" className="img-fluid mb-4" />

          <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
            <a className="text-decoration-none text-primary fw-semibold" href="#">
              Explore our products
            </a>
            <a className="text-decoration-none text-primary fw-semibold" href="#">
              Try Kite demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
