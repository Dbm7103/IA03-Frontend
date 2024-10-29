import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        navigate('/login');
    };

    return (
        <div className="container mt-5">
            <h2>Welcome to the Home Page</h2>
            <p>This is the home page of the application.</p>
            <button className="btn btn-primary" onClick={handleSignOut}>Sign Out</button>
        </div>
    );
};

export default Home;