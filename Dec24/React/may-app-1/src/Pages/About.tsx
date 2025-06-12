import React from "react";

const About: React.FC = () => {
    return (
        <div className="about-page" style={{ padding: "2rem", maxWidth: 800, margin: "0 auto" }}>
            <h1>About This Demo Application</h1>
            <p>
                Welcome to the May App 1 demo! This application is built for learning and demonstration purposes using React and TypeScript.
            </p>
            <section style={{ marginTop: "1.5rem" }}>
                <h2>Features</h2>
                <ul>
                    <li>Component-based architecture</li>
                    <li>TypeScript interfaces for type safety</li>
                    <li>Reusable UI components</li>
                    <li>Simple data display and list rendering</li>
                    <li>Basic routing and navigation</li>
                </ul>
            </section>
            <section style={{ marginTop: "1.5rem" }}>
                <h2>Purpose</h2>
                <p>
                    The main goal of this app is to provide a hands-on example for beginners to understand the structure and flow of a React project. 
                    It is not intended for production or any specific client.
                </p>
            </section>
            <section style={{ marginTop: "1.5rem" }}>
                <h2>Technologies Used</h2>
                <ul>
                    <li>React (with functional components)</li>
                    <li>TypeScript</li>
                    <li>Basic CSS/Bootstrap for layout</li>
                </ul>
            </section>
            <section style={{ marginTop: "1.5rem" }}>
                <h2>Get Involved</h2>
                <p>
                    Feel free to explore, modify, and experiment with the code to enhance your learning experience!
                </p>
            </section>
        </div>
    );
};

export default About;