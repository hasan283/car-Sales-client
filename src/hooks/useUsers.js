import { useEffect, useState } from "react";

const useUsers = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://obscure-fortress-38464.herokuapp.com/users', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);
    return [users, setUsers];
}
export default useUsers;