import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/auth/login', formData);
            console.log(response.data);
            navigate('/'); // Redirect to Home page on successful login
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Container
    className="d-flex justify-content-center align-items-center"
    style={{ borderRadius: '10px', padding: '20px', maxWidth: '400px', marginTop: '20px', backgroundColor: '#f8f9fa' }}
>
    <div>
        <h2 className="my-4 text-center">Login</h2>
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    onChange={handleChange}
                />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3 w-100">
                Login
            </Button>
        </Form>
    </div>
</Container>

    );
};

export default LoginPage;
