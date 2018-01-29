import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Сarousel.css'

const Сarousel = ({
  children,
  activeIndex,
  nextSlide,
  prevSlide,
  width = 80
}) => (
  <div className='Сarousel'>
    <ul
      className='Сarousel__container'
      style={{
        transform: `translate3d(-${activeIndex * width}%, 0px, 0px)`
      }}
    >
      {children.map((child, index) => (
        <li
          key={index}
          className='Сarousel__slide'
          style={{
            minWidth: `${width}%`,
            marginLeft: index === 0 ? (100 - width) / 2 + '%' : '0',
            marginRight:
              index + 1 === children.length ? (100 - width) / 2 + '%' : '0'
          }}
          onClick={() => {
            if (activeIndex + 1 === index) {
              nextSlide()
            } else if (activeIndex - 1 === index) {
              prevSlide()
            }
          }}
        >
          {child}
        </li>
      ))}
    </ul>
  </div>
)

Сarousel.defaultProps = {
  activeIndex: 0,
  children: []
}

export default Сarousel
