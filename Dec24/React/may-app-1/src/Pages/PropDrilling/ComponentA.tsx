import ComponentB from "./ComponentB";

const ComponentA: React.FC = () => {
    return (
        <div className="component-a" style={{ padding: "1rem", backgroundColor: "#f0f4ff", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
            <h2>Component A</h2>
            <ComponentB />
        </div>
    );
}

export default ComponentA;