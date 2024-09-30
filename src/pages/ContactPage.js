import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  background-color: #f8f8f8;
  border-radius: 15px;
  margin-bottom: 50px; /* Space between sections */
`;

const InfoContainer = styled.div`
  background-color: #000;
  color: #fff;
  padding: 30px;
  border-radius: 15px;
  flex: 1;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const FormContainer = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 15px;
  flex: 1;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const FixedHeightContainer = styled.div`
  display: flex;
  height: 450px; /* Set fixed height for both containers */
`;

const InfoTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const InfoText = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

const FormGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const Input = styled.input`
  width: 48%;
  padding: 15px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 15px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 15px;
`;

const SendButton = styled.button`
  background-color: #ff4a00;
  color: #fff;
  padding: 15px 30px;
  border: none;
  border-radius: 50px;
  font-size: 18px;
  cursor: pointer;
  align-self: flex-start;
  display: flex;
  align-items: center;
`;

const ArrowIcon = styled.span`
  margin-left: 10px;
  font-size: 20px;
`;

const MapContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 100%;
`;

const MapTitle = styled.h2`
  color: #ff4a00;
  font-size: 18px;
  margin-bottom: 10px;
  text-align: center;
`;

const LocationTitle = styled.h3`
  font-size: 30px;
  margin-bottom: 30px;
  text-align: center;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 400px;
  border-radius: 15px;
  border: none;
`;

const ContactPage = () => {
  return (
    <><ContactContainer>
          <FixedHeightContainer>
              <InfoContainer>
                  <InfoTitle>Contact Information</InfoTitle>
                  <InfoText>Say something to start a live chat!</InfoText>
                  <InfoText>📞 (+01) 789 854 856</InfoText>
                  <InfoText>📧 ridequest@domain.com</InfoText>
                  <InfoText>📍 1234 Elm Street, Suite 567, Springfield, United States</InfoText>
              </InfoContainer>
              <FormContainer>
                  <FormGroup>
                      <Input type="text" placeholder="First Name" />
                      <Input type="text" placeholder="Last Name" />
                  </FormGroup>
                  <FormGroup>
                      <Input type="email" placeholder="Enter Your Email" />
                      <Input type="tel" placeholder="Enter Your Number" />
                  </FormGroup>
                  <TextArea rows="5" placeholder="Write Your Message"></TextArea>
                  <SendButton>
                      Send Message
                      <ArrowIcon>➡️</ArrowIcon>
                  </SendButton>
              </FormContainer>
          </FixedHeightContainer>
      </ContactContainer>
      <MapContainer>
              <MapTitle>📍 Location</MapTitle>
              <LocationTitle>How to reach our location</LocationTitle>
              <Iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.726867126557!2d-74.00594138459457!3d40.712776979330!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDQyJzQ2LjAiTiA3NMKwMDAnMTcuNyJX!5e0!3m2!1sen!2sus!4v1586011249522!5m2!1sen!2sus"
                  allowFullScreen=""
                  loading="lazy"
              ></Iframe>
          </MapContainer></>
    
  );
};

export default ContactPage;
