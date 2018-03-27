import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Hello.css'
import Container from 'components/atoms/Container/Container'

const Hello = () => (
  <Container isFixed isText>
    <div className='Hello'>
      <h5 className='Hello__name'>Andrei Yakushau</h5>
      <h2 className='Hello__intro'>
        I’m a <i>freelancer</i> and <i>user interface</i> designer in most broad
        sense of this title. I’m passionate about creating effective digital
        products.
      </h2>
    </div>
  </Container>
)

export default Hello
