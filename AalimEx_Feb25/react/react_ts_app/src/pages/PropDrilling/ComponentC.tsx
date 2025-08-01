import React from "react";
import { data, data1 } from "../LandingPage";
interface IComponentCProps {
    Count: number;
}

const ComponentC: React.FC<IComponentCProps> = (props: IComponentCProps) => {
    const { Count }: IComponentCProps = props;
    return (
        <>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quia?
            </p>
            <h3>
                Count from Component C - {Count}
            </h3>
            <data.Consumer>
                {
                    (user) => {
                        return (

                            <data1.Consumer>
                                {
                                    (address) => {
                                        return (
                                            <>
                                                <h3>User name in C component - {user}</h3>
                                                <h3>Address name in C component - {address}</h3>
                                            </>
                                        )
                                    }
                                }
                            </data1.Consumer>
                        )
                    }
                }
            </data.Consumer>

        </>
    )
}

export default ComponentC;
