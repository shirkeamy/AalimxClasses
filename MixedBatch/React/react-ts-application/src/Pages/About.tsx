import React, { useState } from 'react';
import ButtonWrapper from '../Components/Button';
import InputWrapper from '../Components/InputWrapper';

const About: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    const [userName, setUserName] = useState<string>("");

    return (
        <>
            <h2>About Us</h2>
            <p>
                This is the About page of our React TypeScript application. Here we share information about our mission and values.
            </p>
            <h3>{count}</h3>
            {/* <ButtonWrapper value='Click' id={"btnClick"} className='btn-primary' /> */}
            <input type="button" value="Click" onClick={()=>{setCount(count => count+1)}} />

            <hr />
            <InputWrapper
                label={'User Name'}
                type={'text'}
                className={''}
                value={userName}
                id={'txtUserName'}
                OnChange={(event) => {
                    console.log(event.target.value);
                    setUserName(event.target.value);
                }}
            />
        </>
    )
}

export default About;