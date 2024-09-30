import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/auth/register', formData);
            console.log(response.data);
            navigate('/login'); // Redirect to Login page on successful registration
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Container
    className="d-flex justify-content-center align-items-center min-vh-100"
    style={{ borderRadius: '10px', padding: '20px', maxWidth: '500px', backgroundColor: '#f8f9fa' }}
>
    <div>
        <h2 className="my-4 text-center">Register</h2>
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    onChange={handleChange}
                />
            </Form.Group>

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

            <Form.Group controlId="formPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                    type="text"
                    name="phone"
                    placeholder="Enter your phone number"
                    onChange={handleChange}
                />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3 w-100">
                Register
            </Button>
        </Form>
    </div>
</Container>

    );
};

export default RegisterPage;
