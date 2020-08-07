import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from 'components/atoms/Container/Container';
import JsLogosSvg from './assets/Js-logos.svg';
import './Coding.css';
import Image from 'components/atoms/Image/Image';

const Coding = () => (
  <Container isFixed isText>
    <div className='Coding'>
      {/* <h5>Pet projects</h5> */}
      <h2 className='Coding__text'>
        Besides a classic design job, We're keen on creating personal digital
        products, that's fun. There are a few below
      </h2>
      <h5 className='Coding__build-heading'>We build with:</h5>
      <Image className='Coding__logos' src={JsLogosSvg} isResponsive />
    </div>
  </Container>
)
export default Coding
