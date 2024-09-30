import React from 'react';
import styled from 'styled-components';

const HomePageContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('https://st2.depositphotos.com/1022214/5248/i/450/depositphotos_52489449-stock-photo-man-offering-a-car-key.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  color: #fff;
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50;
  left: 0;
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  padding: 20px;
 /* Adjusted to move the container down */
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  margin-bottom: 40px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const Button = styled.button`
  background-color: ${(props) => (props.primary ? '#ff4a00' : '#fff')};
  color: ${(props) => (props.primary ? '#fff' : '#ff4a00')};
  padding: 12px 24px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  gap: 20px;
`;

const Input = styled.input`
  padding: 10px 15px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Select = styled.select`
  padding: 10px 15px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const SearchButton = styled.button`
  background-color: #ff4a00;
  color: #fff;
  padding: 12px 24px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
`;

const HomePage = () => {
  return (
    <HomePageContainer>
      <Overlay />
      <ContentContainer>
        <Title>Looking to save more on your rental car?</Title>
        <Subtitle>
          Whether you're planning a weekend getaway, a business trip, or just need a reliable ride for the day, we offer a wide range of vehicles to suit your needs.
        </Subtitle>
        <ButtonGroup>
          <Button primary>Book A Rental</Button>
          <Button>Learn More</Button>
        </ButtonGroup>
        <FormContainer>
          <Select>
            <option>Car Type</option>
          </Select>
          <Input type="text" placeholder="Pick Up Location" />
          <Input type="date" placeholder="Pick Up Date" />
          <Input type="text" placeholder="Drop Off Location" />
          <Input type="date" placeholder="Return Date" />
          <SearchButton>Search</SearchButton>
        </FormContainer>
      </ContentContainer>
    </HomePageContainer>
  );
};

export default HomePage;
