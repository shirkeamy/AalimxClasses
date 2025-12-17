import React, { createContext } from "react"
import Heading from "../Components/Heading"
import Welcome from "../Components/Welcome"
import ButtonWrapper from "../Components/Button"
import ComponentA from "../PropDrilling/ComponentA"

export const data = createContext<string>(""); // step 1: create context
export const address = createContext<string>(""); // step 1: create context

const Home = () => {
    const userName: string = "Peter Parker";
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

            <data.Provider value={userName}>
                <address.Provider value={"New York, USA"}>
                    <ComponentA />
                </address.Provider>
            </data.Provider>
        </>
    )
}

export default Home;