import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../../firebase.init';
import useAdmin from '../../../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)
    return (
        <div className='container py-5 mt-5'>
            <div>
                <h1 className='text-center pb-4'>Your Dashboard</h1>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto">
                                <Nav.Link className='fs-5 fw-bold text-info' as={Link} to="/dashboard">My Orders</Nav.Link>
                                <Nav.Link className='fs-5 fw-bold text-info' as={Link} to='/dashboard/allReviews'>All Reviews</Nav.Link>
                                <Nav.Link className='fs-5 fw-bold text-info' as={Link} to='/dashboard/myProfile'>My Profile</Nav.Link>
                                {admin && <Nav.Link className='fs-5 fw-bold text-info' as={Link} to='/dashboard/allUsers'>All Users</Nav.Link>}
                                {admin && <Nav.Link className='fs-5 fw-bold text-info' as={Link} to="/dashboard/manageProducts">Manage Products</Nav.Link>}
                                {admin && <Nav.Link className='fs-5 fw-bold text-info' as={Link} to="/dashboard/deleteProducts">Delete Products</Nav.Link>}

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;