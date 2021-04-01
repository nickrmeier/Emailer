import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return(
        <div style={{ textAlign: 'center' }}>
            <h1>This is the Dashboard!</h1>
            <p>Here are your surveys</p>
             <div className="fixed-action-btn">
                <Link to="/surveys/new" className="btn-floating btn-large red">
                    <i className="material-icons">add</i>
                </Link>
             </div>
        </div>
    )
}

export default Dashboard;