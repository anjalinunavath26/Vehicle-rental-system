import React, { useState } from 'react';
import { Card, Button, Modal, Form } from 'react-bootstrap';

const VehicleCard = ({ vehicle }) => {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        details: ''
    });
    const [bookingConfirmed, setBookingConfirmed] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => {
        setShowModal(false);
        setBookingConfirmed(false); // Reset booking confirmation state
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleConfirmBooking = () => {
        // Handle booking confirmation logic here
        setBookingConfirmed(true);
    };

    return (
        <>
            <Card className="mb-4 p-3 shadow-sm border-light">
                <Card.Img 
                    variant="top" 
                    src={vehicle.imageUrl} 
                    alt={vehicle.model} 
                    className="img-fluid" 
                    style={{ height: '150px', width: '100%', objectFit: 'cover' }}
                />
                <Card.Body>
                    <Card.Title>{vehicle.brand} {vehicle.model}</Card.Title>
                    <Card.Text>
                        <strong>Description:</strong> {vehicle.description}
                    </Card.Text>
                    <Card.Text>
                        <strong>Location:</strong> {vehicle.location}
                    </Card.Text>
                    <Card.Text>
                        <strong>Price Per Hour:</strong> ${vehicle.pricePerHour}
                    </Card.Text>
                    <Card.Text>
                        <strong>Price Per Day:</strong> ${vehicle.pricePerDay}
                    </Card.Text>
                    <Card.Text>
                        <strong>Price Per Week:</strong> ${vehicle.pricePerWeek}
                    </Card.Text>
                    <Button 
                        variant="primary" 
                        disabled={!vehicle.availability}
                        onClick={handleShow}
                    >
                        {vehicle.availability ? 'Available' : 'Not Available'}
                    </Button>
                </Card.Body>
            </Card>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{bookingConfirmed ? 'Booking Confirmed' : 'Booking Confirmation'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {bookingConfirmed ? (
                        <div>
                            <h4>Booking Confirmed!</h4>
                            <p><strong>Name:</strong> {formData.name}</p>
                            <p><strong>Email:</strong> {formData.email}</p>
                            <p><strong>Details:</strong> {formData.details}</p>
                        </div>
                    ) : (
                        <Form>
                            <Form.Group controlId="formBasicName">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange} 
                                    placeholder="Enter your name" 
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control 
                                    type="email" 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange} 
                                    placeholder="Enter email" 
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicDetails">
                                <Form.Label>Booking Details</Form.Label>
                                <Form.Control 
                                    as="textarea" 
                                    rows={3} 
                                    name="details"
                                    value={formData.details}
                                    onChange={handleInputChange}
                                    placeholder="Additional details (e.g., rental period)" 
                                />
                            </Form.Group>
                        </Form>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    {bookingConfirmed ? (
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    ) : (
                        <>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleConfirmBooking}>
                                Confirm Booking
                            </Button>
                        </>
                    )}
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default VehicleCard;