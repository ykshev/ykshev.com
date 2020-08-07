import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from 'components/atoms/Container/Container';
import './Request.css';

const data = [
  {
    title: 'expertise',
    content: 'Interface design, User centered design, E-commerce'
  },
  {
    title: 'downsides',
    content: `Graphic Design. We're more designer engineers, rather than graphic designers `
  }
  // {
  //   title: 'experience',
  //   content:
  //     '3 years in an IT-company, 2 years in E-commerce, 2 years in various freelance projects'
  // }
]

const Request = () => (
  <Container className='Request' isFixed>
    <div className='Request__left'>
      <h2 className='Request__title'>
        Feel free to request an estimate for your design project
      </h2>
      <h5 className='Request__sub-title'>or just say hello:</h5>
      <a href='mailto:andrei@ykshev.com' className='Request__email'>
        andrei@ykshev.com
      </a>
    </div>
    <div className='Request__right'>
      {data.map((item, index) => (
        <div key={index}>
          <h5 className='Request__sub-title'>{item.title}</h5>
          <p className='Request__right-text'>{item.content}</p>
        </div>
      ))}
    </div>
  </Container>
)
export default Request
