import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <Link to='/manageProducts'>Manage Products</Link>
                        <Link to='/deleteProducts'>Delete Products</Link>
                        <h1>Dashboard</h1>
                    </div>
                    <div className="col-lg-8"></div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;