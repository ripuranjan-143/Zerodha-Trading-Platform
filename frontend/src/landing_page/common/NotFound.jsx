import React from 'react';

function NotFound() {
  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="row w-100">
        <div className="col-12 col-md-8 col-lg-6 mx-auto text-center">
          <h1 className="fs-1 fw-bold mb-3">404 - Page Not Found</h1>
          <p className="fs-5 text-muted mb-4">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <a href="/" className="btn btn-primary px-4 py-2">
            Go to Home
          </a>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
