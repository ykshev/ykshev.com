import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Swipe from 'react-easy-swipe'

import './Сarousel.css'

class Сarousel extends Component {
  static propTypes = {}

  static defaultProps = {
    children: []
  }
  state = {
    activeIndex: this.props.activeIndex || 1,
    translateX: 0
  }

  prevPositionX = 0

  nextSlide = () => {
    if (!this.isActive) return
    const slidesLength = this.props.children.length
    this.setState(prevState => {
      if (prevState.activeIndex < slidesLength - 1) {
        return { activeIndex: prevState.activeIndex + 1 }
      } else {
        return { activeIndex: 0 }
      }
    }, () => (this.isActive = false))
  }

  prevSlide = () => {
    if (!this.isActive) return
    const slidesLength = this.props.children.length
    this.setState(prevState => {
      if (prevState.activeIndex > 0) {
        return { activeIndex: prevState.activeIndex - 1 }
      } else {
        return { activeIndex: slidesLength - 1 }
      }
    }, () => (this.isActive = false))
  }

  onSwipeMove = ({ x }) => {
    this.setState({ translateX: x })
    return true
  }

  onSwipeEnd = props => {
    const { translateX } = this.state
    if (translateX === 0) return
    this.isActive = true

    if (translateX > 0) {
      this.prevSlide()
    } else {
      this.nextSlide()
    }
    this.setState({ translateX: 0 })
  }

  render() {
    const { children, width = 80 } = this.props
    const { activeIndex, translateX } = this.state

    if (!children.length) return <div>Empty</div>

    const translateXWidth = `${translateX}px`
    const translateXPercentage = `-${activeIndex * width}%`

    return (
      <div className='Сarousel'>
        <Swipe
          onSwipeStart={this.onSwipeStart}
          onSwipeMove={this.onSwipeMove}
          onSwipeEnd={this.onSwipeEnd}
          className='Сarousel__carousel'
          allowMouseEvents
        >
          <ul
            className='Сarousel__container'
            style={{
              transform: `translate3d(${translateXPercentage}, 0px, 0px) ${
                translateX !== 0 ? `translateX(${translateXWidth})` : ''
                }`,
              transitionDuration: translateX === 0 ? '350ms' : '50ms'
            }}
            onDragStart={e => e.preventDefault()}
          >
            {children.map((child, index) => (
              <li
                key={index}
                className='Сarousel__slide'
                style={{
                  minWidth: `${width}%`,
                  marginLeft: index === 0 ? (100 - width) / 2 + '%' : '0',
                  marginRight:
                    index + 1 === children.length
                      ? (100 - width) / 2 + '%'
                      : '0'
                }}
                onClick={() => {
                  this.isActive = true
                  if (activeIndex + 1 === index) {
                    this.nextSlide()
                  } else if (activeIndex - 1 === index) {
                    this.prevSlide()
                  }
                }}
              >
                {child}
              </li>
            ))}
          </ul>
        </Swipe>
      </div>
    )
  }
}

export default Сarousel
