import React, { useContext } from "react";
import { data, data1, userDetails } from "../LandingPage";
import { IUserDetails } from "../../Utils/Interfaces";
interface IComponentCProps {
    Count: number;
}

const ComponentC: React.FC<IComponentCProps> = (props: IComponentCProps) => {
    const { Count }: IComponentCProps = props;

    const address = useContext(data)
    const userName1 = useContext(data1)
    const user = useContext(userDetails)

    console.log(user);

    return (
        <>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quia?
            </p>
            <h3>
                Count from Component C - {Count}
            </h3>

            <h2>User Name is {userName1} and address is {address}</h2>
            <h3>Object = User Name is {user.userName} and age is {user.age}</h3>

            

        </>
    )
}

export default ComponentC;
