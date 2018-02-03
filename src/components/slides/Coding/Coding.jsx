import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Container from 'components/atoms/Container/Container'
import JsLogosSvg from './assets/Js-logos.svg'
import './Coding.css'
import Image from 'components/atoms/Image/Image'

const Coding = () => (
  <Container isFixed isText>
    <div className='Coding'>
      <h2 className='Coding__intro'>
        Cool thing is that a few years ago I dived in a technology world and
        right now <i>I can build</i> a whole product from an idea to a
        production ready service on my own. And that’s fun.
      </h2>
      <h5 className='Coding__build-heading'>I build with:</h5>
      <Image className='Coding__logos' src={JsLogosSvg} isResponsive />
    </div>
  </Container>
)
export default Coding
