import { data, data1 } from "../LandingPage";

const ComponentC: React.FC = () => {
    return (
        <div className="component-a" style={{ padding: "1rem", backgroundColor: "#f0f4ff", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
            <h2>Component C</h2>
            <p>This is Component C, which can pass data to Component B.</p>
            <data.Consumer>
                {
                    (userName) => {
                        return (
                            <data1.Consumer>
                                {
                                    (addr) => {
                                        return (
                                            <>
                                                <p>User Name: {userName}</p>
                                                <p>Address: {addr}</p>
                                            </>
                                        )

                                    }
                                }
                            </data1.Consumer>
                        )
                    }
                }
            </data.Consumer>

        </div>
    );
}

export default ComponentC;