import { IUserList } from "../Interface/Interfaces";

interface IListOfNumbersProps {
    numbers: number[];
    users: IUserList[];
}

// const ListOfNumbers: React.FC<IListOfNumbersProps> = ({ numbers, users }) => {
const ListOfNumbers: React.FC<IListOfNumbersProps> = (props: IListOfNumbersProps) => {
    const { numbers, users } = props;

    console.log("users", users);

    return (
        <>
            <h2>Numbers from Function Component</h2>

            {
                numbers.map((num: number, index: number) => {
                    return (
                        <h5 key={index}>{num}</h5>
                    )
                })
            }
            {
                users.map((user: IUserList, index: number) => {
                    return (
                        <p key={`user-${index}`}>{user.userName}, {user.userEmail}, {user.userAge}</p>
                    )
                })
            }

        </>
    )
}

export default ListOfNumbers;