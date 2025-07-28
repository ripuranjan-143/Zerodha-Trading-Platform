import React from 'react';

function RightSection({ imageURL, productName, productDescription, learnMore, height }) {
  return (
    <div className="container">
      <div className="row flex-column-reverse flex-md-row">
        <div className="col-12 col-md-6">
          <div className="container">
            <div className="row" style={{ height: height }}>
              <div className="col">&nbsp;</div>
            </div>

            <div className="row">
              <div className="col py-3 py-md-5">
                <h3 className="ps-3 ps-md-5 ms-md-5">{productName}</h3>
                <p
                  style={{ lineHeight: '1.8', fontSize: '1.1rem' }}
                  className="ps-3 ps-md-5 ms-md-5"
                >
                  {productDescription}
                </p>
                <div className="row ps-3 ps-md-4 ms-md-5">
                  {learnMore && (
                    <a
                      href={learnMore}
                      style={{
                        textDecoration: 'none',
                        fontSize: '1.1rem',
                        marginLeft: '13px',
                      }}
                    >
                      {learnMore} <i className="fa-solid fa-arrow-right-long"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="row" style={{ height: '100px' }}>
              <div className="col">&nbsp;</div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 text-center text-md-start mb-4 mb-md-0">
          <img src={imageURL} className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
