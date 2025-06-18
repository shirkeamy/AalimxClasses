import React, { createContext } from "react";
import ListOfNumbers from "../Components/ListOfNumbers";
import MainHeading from "../Components/MainHeading";
import UserList from "../Components/UserList";
import { IUserList } from "../Interface/Interfaces";
import ComponentA from "./PropDrilling/ComponentA";
import Employees from "./Employee/Employees";

export const data = createContext("");
export const data1 = createContext("");

const LandingPage: React.FC = () => {
    // Example user and data for entry page
    const userName: string = "John";
    const address: string = "Pune, India";
    const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const userList: IUserList[] = [
        { userName: "Alice", userAge: 25, userEmail: "exmaple@example.com" },
        { userName: "Peter", userAge: 23, userEmail: "peter@example.com" },
        { userName: "Sam", userAge: 30, userEmail: "sam@example.com" },
    ];

    return (
        <main className="landing-page" style={{ padding: "2rem", maxWidth: 1000, margin: "0 auto" }}>
            <header>
                <h1>Welcome to the Demo Application</h1>
                <MainHeading />
                <h2 className="text-success" style={{ marginTop: "1rem" }}>
                    Hello, {userName}!
                </h2>
            </header>
            <Employees />
            <hr />
            <h2>Prop Drilling</h2>
            <div>
                {
                    <data.Provider value={userName}>
                        <data1.Provider value={address}>
                            <ComponentA />
                        </data1.Provider>
                    </data.Provider>
                }
            </div>
            <section style={{ margin: "2rem 0" }}>
                <p>
                    This is a generic entry page for a demo React + TypeScript application. It is designed for learning, experimentation, and demonstration purposes only.
                </p>
                <ul>
                    <li>Showcases component-based architecture</li>
                    <li>Demonstrates use of TypeScript interfaces</li>
                    <li>Displays reusable UI components</li>
                    <li>Simple data display and list rendering</li>
                    <li>Not intended for production or any specific client</li>
                </ul>
            </section>
            <section style={{ margin: "2rem 0" }}>
                <h3>How to Use This Demo</h3>
                <ol>
                    <li>Explore the code and see how components are structured.</li>
                    <li>Modify the data or UI to experiment with React features.</li>
                    <li>Use this as a starting point for your own learning projects.</li>
                </ol>
            </section>
            <hr />
            <section>
                <h3>User List (Component Example)</h3>
                <UserList />
            </section>
            <section style={{ marginTop: "2rem" }}>
                <h3>Numbers List (Component Example)</h3>
                <ListOfNumbers numbers={numbers} users={userList} />
            </section>
            <section style={{ marginTop: "2rem" }}>
                <h3>Numbers List (Direct Render Example)</h3>
                <ul>
                    {numbers.map((num, idx) => (
                        <li key={`number-${idx}`}>{num}</li>
                    ))}
                </ul>
            </section>
            <section style={{ marginTop: "2rem", background: "#f9f9f9", padding: "1rem", borderRadius: 8 }}>
                <h3>About This Page</h3>
                <p>
                    This page is a demonstration of how to build a simple, clean, and maintainable entry page using React and TypeScript. It includes examples of passing props, rendering lists, and organizing code for clarity.
                </p>
            </section>
            <footer style={{ marginTop: "2rem" }}>
                <p>
                    &copy; {new Date().getFullYear()} Demo Application. All rights reserved.
                </p>
            </footer>
        </main>
    );
};

export default LandingPage;