import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #000;
  color: #fff;
  padding: 40px 0;
  border-radius: 25px;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  position: relative;
  margin-top: 50px;
`;

const BrandSection = styled.div`
  flex: 2;
  margin-left: 60px;
`;

const BrandLogo = styled.h1`
  font-size: 24px;
  color: #ff4a00;
`;

const BrandDescription = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: #fff;
`;

const FooterLinkSection = styled.div`
  flex: 1;
`;

const FooterTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 20px;
`;

const FooterLink = styled.a`
  display: block;
  color: #fff;
  text-decoration: none;
  margin-bottom: 10px;
  font-size: 14px;
  &:hover {
    text-decoration: underline;
  }
`;

const SubscribeSection = styled.div`
  flex: 1;
`;

const SubscribeInput = styled.input`
  padding: 10px 15px;
  font-size: 14px;
  border: none;
  border-radius: 25px;
  margin-right: 10px;
  width: 70%;
`;

const SubscribeButton = styled.button`
  background-color: #ff4a00;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 50px;
  font-size: 18px;
  cursor: pointer;
`;

const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const SocialIcon = styled.a`
  color: #fff;
  font-size: 20px;
  margin: 0 10px;
  text-decoration: none;
  &:hover {
    color: #ff4a00;
  }
`;

const CopyrightSection = styled.div`
  text-align: center;
  margin-top: 30px;
  font-size: 14px;
  color: #fff;
  width: 100%;
  position: absolute;
  bottom: 10px;
  left: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <BrandSection>
        <BrandLogo>RIDE<span style={{color: '#fff'}}>QUEST</span></BrandLogo>
        <BrandDescription>
          Experience the ease and convenience of renting a car with Novaride.
        </BrandDescription>
      </BrandSection>

      <FooterLinkSection>
        <FooterTitle>Legal Policy</FooterTitle>
        <FooterLink href="#">Term & Condition</FooterLink>
        <FooterLink href="#">Privacy Policy</FooterLink>
        <FooterLink href="#">Legal Notice</FooterLink>
        <FooterLink href="#">Accessibility</FooterLink>
      </FooterLinkSection>

      <FooterLinkSection>
        <FooterTitle>Quick Links</FooterTitle>
        <FooterLink href="#">Home</FooterLink>
        <FooterLink href="#">About Us</FooterLink>
        <FooterLink href="#">Cars</FooterLink>
        <FooterLink href="#">Services</FooterLink>
      </FooterLinkSection>

      <SubscribeSection>
        <FooterTitle>Subscribe To The Newsletters</FooterTitle>
        <div>
          <SubscribeInput type="email" placeholder="Email ..." />
          <SubscribeButton>➡️</SubscribeButton>
        </div>
      </SubscribeSection>

      <SocialIconsContainer>
        <SocialIcon href="#"><i className="fab fa-youtube"></i></SocialIcon>
        <SocialIcon href="#"><i className="fab fa-facebook-f"></i></SocialIcon>
        <SocialIcon href="#"><i className="fab fa-x-twitter"></i></SocialIcon>
        <SocialIcon href="#"><i className="fab fa-instagram"></i></SocialIcon>
        <SocialIcon href="#"><i className="fab fa-linkedin-in"></i></SocialIcon>
      </SocialIconsContainer>

      <CopyrightSection>
        © 2024 RideQuest. All rights reserved.
      </CopyrightSection>
    </FooterContainer>
  );
};

export default Footer;
