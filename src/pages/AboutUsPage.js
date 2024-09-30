import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 60px 120px;
  background-color: #f9f9f9;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 50%;
`;

const RoundedImage = styled.div`
  border-radius: 25px;
  overflow: hidden;
  width: 400px;
  height: 400px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextContainer = styled.div`
  width: 50%;
  padding-left: 60px;
`;

const AboutTitle = styled.h2`
  font-size: 36px;
  color: #000;
  margin-bottom: 20px;
`;

const AboutSubtitle = styled.h4`
  color: #ff4a00;
  font-size: 18px;
  margin-bottom: 10px;
`;

const AboutDescription = styled.p`
  color: #666;
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 30px;
`;

const ProcessList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ProcessItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const ProcessIcon = styled.div`
  font-size: 30px;
  color: #ff4a00;
  margin-right: 20px;
`;

const ProcessContent = styled.div``;

const ProcessTitle = styled.h5`
  font-size: 18px;
  color: #000;
  margin-bottom: 10px;
`;

const ProcessDescription = styled.p`
  color: #666;
  font-size: 14px;
  line-height: 1.4;
`;

const Aboutus = () => {
  return (
    <AboutContainer>
      <ImageContainer>
        <RoundedImage>
          <Image src="https://i.pngimg.me/thumb/f/720/comdlpng6950412.jpg" alt="Rounded Image" />
        </RoundedImage>
      </ImageContainer>
      <TextContainer>
        <AboutSubtitle>About Us</AboutSubtitle>
        <AboutTitle>Your trusted partner in reliable car rental</AboutTitle>
        <AboutDescription>
          Aqestic Optio Amet A Ququam Saepe Aliquid Voluate Dicta Fuga Dolor Saerror Sed Earum A Magni Soluta Quam Minus Dolor Dolor
        </AboutDescription>
        <ProcessList>
          <ProcessItem>
            <ProcessIcon>📱</ProcessIcon>
            <ProcessContent>
              <ProcessTitle>Easy Booking Process</ProcessTitle>
              <ProcessDescription>
                We Have Optimized The Booking Process So That Our Clients Can Experience The Easiest And The Safest Service.
              </ProcessDescription>
            </ProcessContent>
          </ProcessItem>
          <ProcessItem>
            <ProcessIcon>🚗</ProcessIcon>
            <ProcessContent>
              <ProcessTitle>Convenient Pick-Up & Return Process</ProcessTitle>
              <ProcessDescription>
                We Have Optimized The Booking Process So That Our Clients Can Experience The Easiest And The Safest Service.
              </ProcessDescription>
            </ProcessContent>
          </ProcessItem>
        </ProcessList>
      </TextContainer>
    </AboutContainer>
  );
};

export default Aboutus;
