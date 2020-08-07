import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Image from 'components/atoms/Image/Image';
import './FixedIcons.css';
import behanceSvg from './assets/behance.svg';
import instagramSvg from './assets/instagram.svg';
import mediumSvg from './assets/medium.svg';

const FixedIcons = () => (
  <div className='FixedIcons'>
    <a href='https://behance.net/ykshev' className='FixedIcons__icon'>
      <Image src={behanceSvg} />
    </a>
    <a href='https://medium.com/@ykshev' className='FixedIcons__icon'>
      <Image src={mediumSvg} />
    </a>
    {/* <a href='https://instagram.com/ykshev/' className='FixedIcons__icon'>
      <Image src={instagramSvg} />
    </a> */}
    <a href='mailto:andrei@ykshev.com' className='FixedIcons__email'>
      <h5 className='FixedIcons__email-title'>andrei@ykshev.com</h5>
    </a>
  </div>
)

export default FixedIcons
