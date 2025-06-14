import B from "./B";

const A: React.FC = () => {
    return (
        <main className="page-a" style={{ padding: "2rem", maxWidth: 1000, margin: "0 auto" }}>
            <header>
                <h1>Page A</h1>
                <h2 className="text-success" style={{ marginTop: "1rem" }}>
                    This is Page A
                </h2>
            </header>
            <hr />
            <section>
                <p>This page serves as a demonstration of using context in React.</p>
            </section>
            <B />
        </main>
    );
}

export default A;