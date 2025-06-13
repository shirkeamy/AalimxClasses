import ComponentC from "./ComponentC";

const ComponentB: React.FC = () => {
    return (
        <div className="component-a" style={{ padding: "1rem", backgroundColor: "#f0f4ff", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
            <h2>Component B</h2>
            <ComponentC />
        </div>
    );
}

export default ComponentB;