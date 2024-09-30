import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form } from 'react-bootstrap';
import VehicleCard from '../components/VehicleCard'; // Ensure the path is correct

const VehicleListingsPage = () => {
    const [vehicles, setVehicles] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState({
        category: [],
        pickupLocation: '',
        dropoffLocation: ''
    });

    useEffect(() => {
        const fetchVehicles = async () => {
            try {
                const response = await axios.get('/api/vehicles'); // Adjust the URL to match your API endpoint
                setVehicles(response.data);
            } catch (error) {
                console.error('Error fetching vehicles:', error);
            }
        };

        fetchVehicles();
    }, []);

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleFilterChange = (event) => {
        const { name, value, checked } = event.target;
        if (name === 'category') {
            if (checked) {
                setFilters((prevFilters) => ({
                    ...prevFilters,
                    category: [...prevFilters.category, value]
                }));
            } else {
                setFilters((prevFilters) => ({
                    ...prevFilters,
                    category: prevFilters.category.filter(cat => cat !== value)
                }));
            }
        } else {
            setFilters((prevFilters) => ({
                ...prevFilters,
                [name]: value
            }));
        }
    };

    const filteredVehicles = vehicles.filter(vehicle => {
        const matchesSearch = vehicle.model?.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = filters.category.length === 0 || filters.category.includes(vehicle.type);
        const matchesPickupLocation = filters.pickupLocation === '' || vehicle.location === filters.pickupLocation;
        const matchesDropoffLocation = filters.dropoffLocation === '' || vehicle.location === filters.dropoffLocation;

        return matchesSearch && matchesCategory && matchesPickupLocation && matchesDropoffLocation;
    });

    return (
        <Container fluid className="vh-100 p-0">
            <Row className="h-100">
                {/* Left Side - Search and Filters */}
                <Col md={3} className="bg-light p-3">
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Search</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Search vehicles..." 
                                value={searchQuery}
                                onChange={handleSearch}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Categories</Form.Label>
                            {['Sport Cars', 'Electric Car', 'Convertible', 'Luxury Cars', 'Sedan', 'Coupe Cars'].map(category => (
                                <Form.Check 
                                    type="checkbox"
                                    label={category}
                                    value={category}
                                    name="category"
                                    onChange={handleFilterChange}
                                    key={category}
                                />
                            ))}
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Pickup Location</Form.Label>
                            <Form.Select name="pickupLocation" onChange={handleFilterChange}>
                                <option value="">Select Location</option>
                                {['Abu Dhabi', 'Alain', 'Dubai', 'Sharjah'].map(location => (
                                    <option key={location} value={location}>{location}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Dropoff Location</Form.Label>
                            <Form.Select name="dropoffLocation" onChange={handleFilterChange}>
                                <option value="">Select Location</option>
                                {['Abu Dhabi', 'Alain', 'Dubai', 'Sharjah'].map(location => (
                                    <option key={location} value={location}>{location}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </Col>

                {/* Right Side - Vehicle Listings */}
                <Col md={9} className="d-flex flex-column p-3">
                    <h2 className="my-4">Available Vehicles</h2>
                    <Row>
                        {filteredVehicles.length > 0 ? (
                            filteredVehicles.map((vehicle) => (
                                <Col key={vehicle._id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                                    <VehicleCard vehicle={vehicle} />
                                </Col>
                            ))
                        ) : (
                            <Col xs={12}>
                                <p>No vehicles available</p>
                            </Col>
                        )}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default VehicleListingsPage;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Container, Row, Col, Form } from 'react-bootstrap';
// import VehicleCard from '../components/VehicleCard'; // Make sure this path is correct

// const VehicleListingsPage = () => {
//     const [vehicles, setVehicles] = useState([]);
//     const [searchQuery, setSearchQuery] = useState('');
//     const [filters, setFilters] = useState({
//         category: [],
//         pickupLocation: '',
//         dropoffLocation: ''
//     });

//     useEffect(() => {
//         const fetchVehicles = async () => {
//             try {
//                 const response = await axios.get('/api/vehicles'); // Adjust the URL to match your API endpoint
//                 setVehicles(response.data);
//                 console.log(response.data)
//             } catch (error) {
//                 console.error('Error fetching vehicles:', error);
//             }
//         };

//         fetchVehicles();
//     }, []);

//     const handleSearch = (event) => {
//         setSearchQuery(event.target.value);
//     };

//     const handleFilterChange = (event) => {
//         const { name, value, checked } = event.target;
//         if (name === 'category') {
//             if (checked) {
//                 setFilters((prevFilters) => ({
//                     ...prevFilters,
//                     category: [...prevFilters.category, value]
//                 }));
//             } else {
//                 setFilters((prevFilters) => ({
//                     ...prevFilters,
//                     category: prevFilters.category.filter(cat => cat !== value)
//                 }));
//             }
//         } else {
//             setFilters((prevFilters) => ({
//                 ...prevFilters,
//                 [name]: value
//             }));
//         }
//     };

//     const filteredVehicles = vehicles.filter(vehicle => 
//         vehicle.name?.toLowerCase().includes(searchQuery.toLowerCase()) &&
//         (filters.category.length === 0 || filters.category.includes(vehicle.category)) &&
//         (filters.pickupLocation === '' || vehicle.pickupLocation === filters.pickupLocation) &&
//         (filters.dropoffLocation === '' || vehicle.dropoffLocation === filters.dropoffLocation)
//     );

//     return (
//         <Container fluid>
//             <Row>
//                 {/* Left Side - Search and Filters */}
//                 <Col md={3} className="bg-light p-3">
//                     <Form>
//                         <Form.Group className="mb-3">
//                             <Form.Label>Search</Form.Label>
//                             <Form.Control 
//                                 type="text" 
//                                 placeholder="Search vehicles..." 
//                                 value={searchQuery}
//                                 onChange={handleSearch}
//                             />
//                         </Form.Group>

//                         <Form.Group className="mb-3">
//                             <Form.Label>Categories</Form.Label>
//                             {['Sport Cars', 'Electric Car', 'Convertible', 'Luxury Cars', 'Sedan', 'Coupe Cars'].map(category => (
//                                 <Form.Check 
//                                     type="checkbox"
//                                     label={category}
//                                     value={category}
//                                     name="category"
//                                     onChange={handleFilterChange}
//                                     key={category}
//                                 />
//                             ))}
//                         </Form.Group>

//                         <Form.Group className="mb-3">
//                             <Form.Label>Pickup Location</Form.Label>
//                             <Form.Select name="pickupLocation" onChange={handleFilterChange}>
//                                 <option value="">Select Location</option>
//                                 {['Abu Dhabi', 'Alain', 'Dubai', 'Sharjah'].map(location => (
//                                     <option key={location} value={location}>{location}</option>
//                                 ))}
//                             </Form.Select>
//                         </Form.Group>

//                         <Form.Group className="mb-3">
//                             <Form.Label>Dropoff Location</Form.Label>
//                             <Form.Select name="dropoffLocation" onChange={handleFilterChange}>
//                                 <option value="">Select Location</option>
//                                 {['Abu Dhabi', 'Alain', 'Dubai', 'Sharjah'].map(location => (
//                                     <option key={location} value={location}>{location}</option>
//                                 ))}
//                             </Form.Select>
//                         </Form.Group>
//                     </Form>
//                 </Col>

//                 {/* Right Side - Vehicle Listings */}
//                 <Col md={9}>
//                     <h2 className="my-4">Available Vehicles</h2>
//                     <Row>
//                         {filteredVehicles.map((vehicle) => (
//                             <Col key={vehicle._id} md={4} className="mb-4">
//                                 <VehicleCard vehicle={vehicle} />
//                             </Col>
//                         ))}
//                     </Row>
//                 </Col>
//             </Row>
//         </Container>
//     );
// };

// export default VehicleListingsPage;
