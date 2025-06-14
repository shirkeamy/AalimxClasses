import { createContext } from "react";
import A from "./A";

export const data = createContext("");

const ParentPage: React.FC = () => {
    return (
        <main className="parent-page" style={{ padding: "2rem", maxWidth: 1000, margin: "0 auto" }}>
            <header>
                <h1>Parent Page</h1>
                <h2 className="text-success" style={{ marginTop: "1rem" }}>
                    This is the Parent Page
                </h2>
            </header>
            <hr />
            <section>
                <p>This page serves as a parent component for demonstrating context usage.</p>
            </section>
            <data.Provider value="Peter Parker">
                <A />
            </data.Provider>
        </main>
    );
}

export default ParentPage;