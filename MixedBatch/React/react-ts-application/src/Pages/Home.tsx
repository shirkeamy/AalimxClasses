import React from "react"
import Heading from "../Components/Heading"
import Welcome from "../Components/Welcome"
import ButtonWrapper from "../Components/Button"

const Home = () => {
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
        </>
    )
}

export default Home;