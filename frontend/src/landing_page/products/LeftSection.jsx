import React from 'react';

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
}) {
  return (
    <div className="container p-2 p-md-1">
      <div className="row mx-2 mx-md-5">
        <div className="col-12 col-md-8 ps-md-5 mb-4 mb-md-0 text-center text-md-start">
          <img src={imageURL} className="img-fluid" alt="" />
        </div>

        <div className="col-12 col-md-4 my-3 my-md-5">
          <h3 className="py-2 py-md-3">{productName}</h3>
          <p
            className="mt-3 mt-md-4 lh-lg"
            style={{
              fontSize: '1.1rem',
            }}
          >
            {productDescription}
          </p>

          <div className="row">
            {tryDemo && (
              <div className="col-12 col-md-4 mb-3 mb-md-4">
                <a
                  href={tryDemo}
                  style={{
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                  }}
                >
                  {tryDemo} <i className="fa-solid fa-arrow-right-long"></i>
                </a>
              </div>
            )}
            {learnMore && (
              <div className="col-12 col-md-8 mb-4">
                <a
                  href={learnMore}
                  style={{
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                  }}
                >
                  {learnMore} <i className="fa-solid fa-arrow-right-long"></i>
                </a>
              </div>
            )}
          </div>

          <a href="">
            <img
              style={{ height: '45px' }}
              src="media/images/googlePlayBadge.svg"
              alt="Google Play"
            />
          </a>
          <a href="">
            <img
              style={{ height: '45px' }}
              src="media/images/appstoreBadge.svg"
              className="ms-3 ms-md-4"
              alt="App Store"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
