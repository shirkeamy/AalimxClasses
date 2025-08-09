import React from "react";

const HomePage: React.FC = () => {

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="card shadow-lg border-0">
                        <div className="card-header bg-gradient bg-primary text-white text-center">
                            <h1 className="display-4 mb-0">CRUD Application Home</h1>
                        </div>
                        <div className="card-body">
                            <div className="row align-items-center">
                                <div className="col-md-7">
                                    <p className="lead text-secondary">
                                        Welcome to the <strong>CRUD Application</strong>! You can create, read, update, and delete records easily.
                                    </p>
                                    <ul className="list-group list-group-flush mb-3">
                                        <li className="list-group-item"><i className="bi bi-plus-circle text-success"></i> Add new records</li>
                                        <li className="list-group-item"><i className="bi bi-list-ul text-primary"></i> View all records</li>
                                        <li className="list-group-item"><i className="bi bi-pencil-square text-warning"></i> Edit existing records</li>
                                        <li className="list-group-item"><i className="bi bi-trash text-danger"></i> Delete records</li>
                                    </ul>
                                    <a href="/records" className="btn btn-success btn-lg mt-2 shadow">
                                        <i className="bi bi-arrow-right-circle"></i> Go to Records
                                    </a>
                                </div>
                                <div className="col-md-5 text-center">
                                    <img src="https://img.icons8.com/color/480/000000/task.png" alt="CRUD Home" className="img-fluid rounded shadow" style={{maxHeight: '220px'}} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default HomePage;