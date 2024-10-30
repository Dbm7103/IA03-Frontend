import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { registerUser } from '../api/api';
import Popup from './Popup';
import "../../public/css/Register.css";

const Register: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const response = await registerUser({ email, password });
            setMessage(response);
            setShowPopup(true);
        } catch (error) {
            setMessage((error as Error).message);
            setShowPopup(true);
        }
    };

    const closePopup = () => {
        setShowPopup(false);
        if (message === 'User registered successfully') {
            navigate('/login');
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title text-center">Register</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Register</button>
                            </form>
                            <div className="text-center mt-3">
                                <p>Already have an account? <Link to="/login">Login here</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showPopup && <Popup message={message} onClose={closePopup} />}
        </div>
    );
};

export default Register;