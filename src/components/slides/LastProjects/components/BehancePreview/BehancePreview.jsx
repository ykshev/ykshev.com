import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Image from 'components/atoms/Image/Image'
import LikeIcon from './assets/likes.svg'
import ViewsIcon from './assets/views.svg'
import './BehancePreview.css'

class BehancePreview extends Component {
  static defaultProps = {}

  state = {}

  static propTypes = {}

  render () {
    const { title, tag, img, likes, views, link } = this.props
    return (
      <a href={link} className='BehancePreview' target='_blank'>
        <div className='BehancePreview__image'>
          <Image src={img} alt={title + ' preview'} isResponsive />
        </div>
        <h6 className='BehancePreview__title'>{title}</h6>
        <div className='BehancePreview__name'>Andrei Yakushau</div>
        <div className='BehancePreview__tag'>{tag}</div>
        <div className='BehancePreview__stats'>
          <span className='BehancePreview__stat'>
            <Image src={LikeIcon} className='BehancePreview__stats-icon' />
            <h6 className='BehancePreview__stats-number'>{likes}</h6>
          </span>
          <span className='BehancePreview__stat'>
            <Image src={ViewsIcon} className='BehancePreview__stats-icon' />
            <h6 className='BehancePreview__stats-number'>{views}</h6>
          </span>
        </div>
      </a>
    )
  }
}

export default BehancePreview
