import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Image from 'components/atoms/Image/Image'
import Button from 'components/atoms/Button/Button'
import Container from 'components/atoms/Container/Container'

import uideoImg from './assets/uideo.png'
import './Uideo.css'

const Uideo = () => (
  <Container className='Uideo'>
    <div className='Uideo__left'>
      <h1 className='Uideo__title'>Uideo</h1>

      <div className='Uideo__text-block'>
        <h5 className='Uideo__text-heading'>About</h5>
        <p>
          For a long time I saved links to talks from design conferences and
          when I started to learn Ruby on Rails I decided why not to build a pet
          project with all the major conferences and best design talks, rate
          them, put some meta tags, etc
        </p>
      </div>
      <div className='Uideo__text-block'>
        <h5 className='Uideo__text-heading'>technology</h5>
        <p>Ruby on Rails</p>
      </div>
      <div className='Uideo__buttons'>
        <Button
          href='https://uideo.net'
          target='_blank'
          isWhite
          isResponsive
          style={{ color: 'black' }}
        >
          Check out the project
        </Button>
        <Button
          href='https://www.facebook.com/permalink.php?story_fbid=1498051100525578&id=1496110904052931'
          target='_blank'
          isOutline
          isResponsive
        >
          Read a story behind it
        </Button>
      </div>
    </div>
    <div className='Uideo__right'>
      <Image src={uideoImg} className='Uideo__right-image' isResponsive />
    </div>
  </Container>
)

export default Uideo
