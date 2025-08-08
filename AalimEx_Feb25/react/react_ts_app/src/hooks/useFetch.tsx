import { useState, useEffect } from "react";

const useFetch = (url: string) => {
    const [todo, setTodo] = useState<any>(null);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => { setTodo(data) })
            .catch((err) => {
                console.log("error while fetching data", err)
            })
    }, [])

    return [todo]
}

export const useGet = (url: string) => {
    const [todo, setTodo] = useState<any>(null);

    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setTodo(data)
            })
            .catch((err) => {
                console.log("error while fetching data", err)
            })
    }, [])

    return [todo]
}

export default useFetch;