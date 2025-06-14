import React, { useContext } from 'react';
import { data } from './ParentPage';

const B: React.FC = () => {
    const userName = useContext(data);

    return (
        <main className="page-a" style={{ padding: "2rem", maxWidth: 1000, margin: "0 auto" }}>
            <header>
                <h1>Page B</h1>
                <h2 className="text-success" style={{ marginTop: "1rem" }}>
                    This is Page B
                </h2>
                <p>User Name from Context: { userName}</p>
            </header>
            <hr />
            <section>
                <p>This page serves as a demonstration of using context in React.</p>
            </section>
        </main>
    );
}

export default B;