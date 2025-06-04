function UserList() {
    const numbers: number[] = [10, 20, 30, 40];
    return (
        <>
            <h4>User list component</h4>
            <ul key={"numbers-from-component"}>
                {
                    numbers.map((num: number, index: number) => {
                        return (
                            <li key={`number-from-component-${index}`}>{num}</li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default UserList;