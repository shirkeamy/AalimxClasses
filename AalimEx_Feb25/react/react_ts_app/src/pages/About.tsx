import React, { useState } from "react"
import InputWrapper from "../components/InputWrapper";

function About() {

    const [userName, setUserName] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <h1>About Page</h1>
                    <div className="row">
                        <div className="col-4">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus saepe odio sapiente rerum esse et quas illum doloribus expedita libero?
                            </p>
                        </div>
                        <div className="col-4">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis, nobis veniam laborum distinctio expedita, consequuntur nihil vel ducimus sed dolorem recusandae molestias quo possimus ipsum, amet suscipit delectus vero?
                            </p>
                        </div>
                        <div className="col-4">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita veniam accusamus minima voluptatibus ducimus excepturi.
                            </p>
                        </div>
                    </div>
                    <h3>user Name: {userName}</h3>
                    <div className="row">
                        <div className="col-6">
                            <InputWrapper
                                LabelText={"User Name"}
                                Id={"txtUserName"}
                                Type={"text"}
                                Name={"userName"}
                                Value={userName}
                                OnChange={(event) => {
                                    const { value } = event.target;
                                    setUserName(value)
                                }}
                            />

                            <label htmlFor="txtPassword">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="txtPassword"
                                className="form-control"
                                value={password}
                                onChange={(e) => { 
                                    setPassword(e.target.value)
                                }} />

                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default About;