import React from 'react';

function Brokerage() {
  return (
    <div className="container p-4 p-md-5 mb-4 border-top">
      <div className="row">
        {/* Left Section */}
        <div className="col-12 col-md-8">
          <a href="" style={{ textDecoration: 'none' }}>
            <h4 className="mb-4 mb-md-5 text-center text-md-start">Brokerage calculator</h4>
          </a>
          <ul className="text-muted ps-3">
            <li className="mb-3">
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.
            </li>
            <li className="mb-3">Digital contract notes will be sent via e-mail.</li>
            <li className="mb-3">
              Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.
            </li>
            <li className="mb-3">
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).
            </li>
            <li className="mb-3">
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).
            </li>
            <li className="mb-3">
              If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="col-12 col-md-4 mt-4 mt-md-0">
          <a href="" style={{ textDecoration: 'none' }}>
            <h4 className="text-center text-md-start">List of charges</h4>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
