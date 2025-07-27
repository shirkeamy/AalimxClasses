import React from "react";
import InputWrapper from "../components/InputWrapper";

const Contact: React.FC = () => {
    return (
        <>
            <h1>Contact Form</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae amet numquam alias architecto ratione ipsa rerum ut, incidunt unde repellendus, quos tempore minima eos enim debitis qui. Unde debitis accusamus aliquam? Velit deserunt iusto laborum. Modi voluptate rem eius enim tenetur, labore necessitatibus, id unde alias consequatur quidem fugiat consectetur!
            </p>

            <InputWrapper Id="txtUserName" LabelText="User Name" Name="txtUserName" Type="text" />
            <InputWrapper Id="txtPass" LabelText="Password" Name="txtPassword" Type="password" ClassName="text-danger" />

        </>
    )
}

export default Contact;