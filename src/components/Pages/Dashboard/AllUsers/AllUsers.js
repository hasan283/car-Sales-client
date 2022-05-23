import React from 'react';
import { Table } from 'react-bootstrap';
import useUsers from '../../../../hooks/useUsers';
import RowUser from './RowUser';

const AllUsers = () => {
    const [users, setUsers] = useUsers();


    return (
        <div className='container'>
            <h4 className='text-center py-5'>All Users: {users.length}</h4>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Email</th>
                        <th>Make A Admin</th>
                        <th>Delete Users</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <RowUser key={user._id}
                            user={user}
                            index={index}
                            setUsers={setUsers}
                        ></RowUser>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default AllUsers;