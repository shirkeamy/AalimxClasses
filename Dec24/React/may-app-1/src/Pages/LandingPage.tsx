import ListOfNumbers from "../Components/ListOfNumbers";
import MainHeading from "../Components/MainHeading";
import UserList from "../Components/UserList";
import { IUserList } from "../Interface/Interfaces";

const LandingPage: React.FC = () => {

    const userName: string = "John";
    const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const userList: IUserList[] = [
      { userName: "Alice", userAge: 25, userEmail: 'exmaple@example.com'},
      { userName: "Peter", userAge: 23, userEmail: 'peter@example.com'},
      { userName: "sam", userAge: 30, userEmail: 'sam@example.com'},
    ];
    
    return (
        <div className="landing-page">
            <h1>Welcome to Our Application</h1>
            <p>
                This is the landing page of our application. Here you can find an overview of what we offer and how to get started.
            </p>
            <p>
                Explore the features, learn more about us, and get ready to dive into the application!
            </p>
            <MainHeading />
            <h1 key={"welcome-msg"} className='text-success'>
                Welcome, {userName}
            </h1>
            <hr />
            <UserList />
            <ListOfNumbers numbers={numbers} users={userList} />
            <hr />
            <ul key={"numbers"}>
                {
                    numbers.map((num: number, index: number) => {
                        return (
                            <li key={`number-${index}`}>{num}</li>
                        )
                    })
                }
            </ul>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatum modi, pariatur totam id eius beatae facilis eligendi blanditiis tempora adipisci enim consectetur maxime doloremque dolor nobis commodi accusantium quaerat?
            </p>
        </div>
    );

}
export default LandingPage;