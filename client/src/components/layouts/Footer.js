import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <span
        style={{
          color: '#fff',
          top: '1.5rem',
          left: '1rem',
          position: 'relative'
        }}
      >
        &copy;{new Date().getFullYear()} All right Reserved. My company.
      </span>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background: #344;
  height: 4rem;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
`;
