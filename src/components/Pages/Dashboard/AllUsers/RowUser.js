import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

const RowUser = ({ user, index }) => {
    const { email, role, refetch } = user;
    const [users, setUsers] = useState([]);




    // Make Admin 
    const makeAdmin = () => {
        const proceed = window.confirm('Are you sure make admin?');
        if (proceed) {
            fetch(`http://localhost:5000/users/admin/${email}`, {
                method: 'PUT',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    refetch();
                    console.log(data)
                });
        }

    }

    // Delete Order 
    const handleUserDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete this user?');
        if (proceed) {
            const url = `http://localhost:5000/users/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = users.filter(list => list._id !== id);
                    setUsers(remaining);
                    toast('User Deleted Success!')
                })
        }
    }


    return (
        <>
            <tr>
                <td>{index + 1}</td>
                <td>{email}</td>
                <td>{role !== 'admin' && <Button onClick={makeAdmin} variant="success">Make Admin</Button>}</td>
                <td><Button onClick={() => handleUserDelete(user._id)} variant="danger">Delete</Button></td>
            </tr>
        </>
    );
};

export default RowUser;