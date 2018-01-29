import React, { Component } from 'react'
import classNames from 'classnames'
import './Image.css'

export default class Image extends Component {
  render () {
    const { isResponsive, className, ...props } = this.props
    return (
      <img
        className={classNames(className, { Image__responsive: isResponsive })}
        {...props}
      />
    )
  }
}
