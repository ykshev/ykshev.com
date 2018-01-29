import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Button.css'
import classNames from 'classnames'

const Button = ({
  isReal,
  isOutline,
  className,
  isResponsive,
  href,
  children,
  ...props
}) => {
  const buttonClassName = classNames('Button', className, {
    'Button--real': isReal,
    'Button--outline': isOutline,
    'Button--responsive': isResponsive
  })

  if (isReal) {
    return (
      <button className={buttonClassName} {...props}>
        {children}
      </button>
    )
  }

  if (href) {
    return (
      <a href={href} className={buttonClassName} {...props}>
        {children}
      </a>
    )
  }

  return (
    <div className={buttonClassName} {...props}>
      {children}
    </div>
  )
}

export default Button
