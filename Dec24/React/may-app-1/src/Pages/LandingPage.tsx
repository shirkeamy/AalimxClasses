import React from "react";
import ListOfNumbers from "../Components/ListOfNumbers";
import MainHeading from "../Components/MainHeading";
import UserList from "../Components/UserList";
import { IUserList } from "../Interface/Interfaces";

const LandingPage: React.FC = () => {
    // Example user and data for entry page
    const userName: string = "John";
    const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const userList: IUserList[] = [
        { userName: "Alice", userAge: 25, userEmail: "exmaple@example.com" },
        { userName: "Peter", userAge: 23, userEmail: "peter@example.com" },
        { userName: "Sam", userAge: 30, userEmail: "sam@example.com" },
    ];

    return (
        <main className="landing-page" style={{ padding: "2rem" }}>
            <header>
                {/* <h1>Welcome to May App 1</h1> */}
                <MainHeading />
                <h2 className="text-success" style={{ marginTop: "1rem" }}>
                    Hello, {userName}!
                </h2>
            </header>
            <section style={{ margin: "2rem 0" }}>
                <p>
                    This is the entry page of your application. Here you can find an overview of what we offer and how to get started.
                </p>
                <p>
                    Explore the features, learn more about us, and get ready to dive into the application!
                </p>
            </section>
            <hr />
            <section>
                <h3>User List</h3>
                <div className="row">
                    <div className="col-4">
                        <section style={{ marginTop: "2rem" }}>
                            <UserList />
                        </section>
                    </div>
                    <div className="col-4">
                        <section style={{ marginTop: "2rem" }}>
                            <h3>Numbers List (Component)</h3>
                            <ListOfNumbers numbers={numbers} users={userList} />
                        </section>

                    </div>
                    <div className="col-4">
                        <section style={{ marginTop: "2rem" }}>
                            <h3>Numbers List (Direct Render)</h3>
                            <ul>
                                {numbers.map((num, idx) => (
                                    <li key={`number-${idx}`}>{num}</li>
                                ))}
                            </ul>
                        </section>
                    </div>
                </div>
            </section>

            <footer style={{ marginTop: "2rem" }}>
                <p>
                    &copy; {new Date().getFullYear()} May App 1. All rights reserved.
                </p>
            </footer>
        </main>
    );
};

export default LandingPage;