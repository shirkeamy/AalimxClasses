import React from "react";

const About: React.FC = () => {

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="card shadow-lg border-0">
                        <div className="card-header bg-info text-white text-center">
                            <h1 className="mb-0">About This App</h1>
                        </div>
                        <div className="card-body">
                            <p className="lead text-secondary">
                                This is a <strong>CRUD (Create, Read, Update, Delete)</strong> application built with React. It demonstrates how to manage and manipulate data using a RESTful API.
                            </p>
                            <div className="row mb-4">
                                <div className="col-md-6">
                                    <h2 className="h4 text-primary">What is CRUD?</h2>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item"><strong>Create:</strong> Add new records to the system (e.g., adding a new employee).</li>
                                        <li className="list-group-item"><strong>Read:</strong> View or retrieve existing records (e.g., viewing the list of employees).</li>
                                        <li className="list-group-item"><strong>Update:</strong> Modify existing records (e.g., editing employee details).</li>
                                        <li className="list-group-item"><strong>Delete:</strong> Remove records from the system (e.g., deleting an employee).</li>
                                    </ul>
                                </div>
                                <div className="col-md-6 d-flex align-items-center justify-content-center">
                                    <img src="https://img.icons8.com/color/480/000000/data-configuration.png" alt="CRUD Illustration" className="img-fluid rounded shadow" style={{maxHeight: '200px'}} />
                                </div>
                            </div>
                            <h2 className="h4 text-success">Employee API</h2>
                            <p>
                                This application uses an Employee API to perform all CRUD operations. The API allows us to fetch, add, update, and delete employee data, making it easy to manage employee information efficiently.
                            </p>
                            <div className="alert alert-info mt-4 text-center">
                                <strong>Explore the app to see how CRUD operations work in a real-world scenario!</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default About;