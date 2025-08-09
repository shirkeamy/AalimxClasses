import React from "react";

const Contact: React.FC = () => {

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow-lg border-0">
                        <div className="card-header bg-warning text-dark text-center">
                            <h1 className="mb-0">Contact Us</h1>
                        </div>
                        <div className="card-body">
                            <div className="row align-items-center">
                                <div className="col-md-8">
                                    <p className="lead">
                                        You can reach us at:
                                    </p>
                                    <ul className="list-group list-group-flush mb-3">
                                        <li className="list-group-item"><i className="bi bi-envelope-at text-primary"></i> <strong>Email:</strong> info@example.com</li>
                                        <li className="list-group-item"><i className="bi bi-telephone text-success"></i> <strong>Phone:</strong> (123) 456-7890</li>
                                        <li className="list-group-item"><i className="bi bi-geo-alt text-danger"></i> <strong>Address:</strong> 123 Main Street, City, Country</li>
                                    </ul>
                                </div>
                                <div className="col-md-4 text-center">
                                    <img src="https://img.icons8.com/color/480/000000/contacts.png" alt="Contact" className="img-fluid rounded shadow" style={{maxHeight: '150px'}} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Contact;