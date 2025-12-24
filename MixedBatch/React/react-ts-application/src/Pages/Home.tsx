import React, { createContext, useEffect } from "react"
import Heading from "../Components/Heading"
import Welcome from "../Components/Welcome"
import ButtonWrapper from "../Components/Button"
import ComponentA from "../PropDrilling/ComponentA"
import useToggle from "../hooks/useToggle";
import { GetAllEmployees, GetEmployeeById } from "../Utils/Services/EmployeeServices"
import { IEmployee, IEmployees } from "../Utils/Interfaces/EmployeeInterfaces"

export const data = createContext<string>(""); // step 1: create context
export const address = createContext<string>(""); // step 1: create context

const Home = () => {
    const userName: string = "Peter Parker";

    const [count, setCount] = React.useState<number>(0);
    const [apiCalled, setApiCalled] = React.useState<boolean>(false);
    const [isToggle, setToggle] = useToggle(false);

    useEffect(() => {
        console.log("Home Component rendered");
    })

    useEffect(() => {
        console.log("Home Component rendered on first load only");
    }, [])

    useEffect(() => {
        console.log("Home Component rendered on dependency change: count = ", count);
    }, [apiCalled])

    useEffect(() => {
        GetAllEmployees()
            .then((res: IEmployees[]) => {
                console.log("Employees Data: ", res);
            })
            .catch((err: Error) => {
                console.error("Error while fetching employees: ", err.message);
            })

        GetEmployeeById(1)
            .then((res: IEmployee) => {
                console.log("Employee Data: ", res);
            })
            .catch((err: Error) => {
                console.error("Error while fetching employees: ", err.message);
            })
    }, [])

    return (
        <>
            <Welcome userName="Peter" />
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum minus recusandae esse accusamus sequi excepturi voluptate similique, animi iure ex dignissimos dolor nam non quas debitis perspiciatis quo saepe. Nesciunt!
            </p>
            <Heading />
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex eaque odit perspiciatis officia harum dolor ducimus ad voluptatum? Veritatis possimus dolor nostrum fuga ad unde perspiciatis distinctio ullam, nihil quaerat numquam atque voluptatibus ex vitae eum optio quasi a facilis et consectetur ab magni. Aspernatur pariatur magnam eaque ex perspiciatis!
            </p>

            <ButtonWrapper value={"Save Form"} className={"btn-primary btn-sm"} id={"btnSave"} />

            <h4>{count}</h4>
            <input
                type="button"
                value="Click Me"
                className="btn-secondary btn-md"
                id="btnClick"
                onClick={() => { setCount(count + 1) }} />

            <input
                type="button"
                value="Click Me"
                className="btn-secondary btn-md"
                id="btnClick"
                onClick={() => { setApiCalled(!apiCalled) }} />

            <data.Provider value={userName}>
                <address.Provider value={"New York, USA"}>
                    <ComponentA />
                </address.Provider>
            </data.Provider>
            {
                isToggle ?
                    <h1>This is from if statement</h1>
                    :
                    <h1>This is from else statement</h1>
            }

            <button onClick={() => setToggle()} >
                Toggle Button
            </button>
        </>
    )
}

export default Home;