import React from "react";

const PageNotFound: React.FC = () => {
    return (
        <div className="container vh-100 d-flex align-items-center justify-content-center">
            <div className="row w-100">
                <div className="col-md-8 offset-md-2">
                    <div className="card shadow-lg border-0 text-center">
                        <div className="card-body">
                            <img src="https://img.icons8.com/color/480/000000/error--v1.png" alt="404 Not Found" className="img-fluid mb-4" style={{maxHeight: '120px'}} />
                            <h1 className="display-4 text-danger">404</h1>
                            <h2 className="mb-3">Oops! Page Not Found</h2>
                            <p className="lead text-secondary mb-4">
                                The page you are looking for does not exist or has been moved.
                            </p>
                            <a href="/" className="btn btn-primary btn-lg shadow">Go to Home</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound;