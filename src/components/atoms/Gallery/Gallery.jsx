import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Сarousel from './components/Сarousel/Сarousel'
import './Gallery.css'

class Gallery extends Component {
  static propTypes = {}

  static defaultProps = {
    children: []
  }
  state = {
    activeIndex: this.props.currentImageIndex || 0
  }

  nextSlide = () => {
    const slidesLength = this.props.children && this.props.children.length
    this.setState(prevState => {
      if (prevState.activeIndex < slidesLength - 1) {
        return { activeIndex: prevState.activeIndex + 1 }
      } else {
        return { activeIndex: 0 }
      }
    })
  }

  prevSlide = () => {
    const slidesLength = this.props.children && this.props.children.length
    this.setState(prevState => {
      if (prevState.activeIndex > 0) {
        return { activeIndex: prevState.activeIndex - 1 }
      } else {
        return { activeIndex: slidesLength - 1 }
      }
    })
  }

  render () {
    const { children } = this.props
    const { activeIndex } = this.state

    if (!children.length) return <div>Empty</div>

    return (
      <div className='Gallery'>
        <div className='Gallery__carousel'>
          <Сarousel
            activeIndex={activeIndex}
            nextSlide={this.nextSlide}
            prevSlide={this.prevSlide}
          >
            {children}
          </Сarousel>
        </div>
      </div>
    )
  }
}

export default Gallery
