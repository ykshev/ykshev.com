import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Container from 'components/atoms/Container/Container'
import Image from 'components/atoms/Image/Image'
import Gallery from 'components/atoms/Gallery/Gallery'
import Button from 'components/atoms/Button/Button'

import './Designbase.css'
import logoSvg from './assets/designbase-logo.svg'
import backgroundImg from './assets/background.jpg'
import screen1Img from './assets/1.jpg'
import screen2Img from './assets/2.jpg'
import screen3Img from './assets/3.jpg'
import screen4Img from './assets/4.jpg'

const entities = [screen1Img, screen2Img, screen3Img, screen4Img]
const images = entities.map((entity, index) => (
  <div className='Designbase__site-container'>
    <Image
      key={index}
      src={entity}
      isResponsive
      className='Designbase__site-image'
    />
  </div>
))

const Designbase = () => (
  <Container>
    <div className='Designbase' style={{ background: `url(${backgroundImg})` }}>
      <div className='Designbase__logo'>
        <Image src={logoSvg} />
      </div>
      <div className='Designbase__gallery'>
        <Gallery activeIndex={1}>{images}</Gallery>
      </div>
      <div className='Designbase__description-container'>
        <div className='Designbase__description-col'>
          <h5 className='Designbase__description-title'>About</h5>
          <p>
            Simple tool to save pics on the web to your Dropbox account with
            blazing fast and customizable web interface
          </p>
        </div>
        <div className='Designbase__description-col'>
          <h5 className='Designbase__description-title'>technology</h5>
          <p>React, Mobx, Meteor, GraphQL, Apollo, Design in code.</p>
        </div>
        <div className='Designbase__description-col Designbase__description-buttons'>
          <Button href='https://designbase.us' target='_blank' isResponsive>
            Check out the project
          </Button>
          <Button
            href='https://medium.com/@ykshev/designers-code-story-dfa9b4cb4a1d'
            target='_blank'
            isOutline
            isResponsive
          >
            Read a story behind it
          </Button>
        </div>
      </div>
    </div>
  </Container>
)

export default Designbase
