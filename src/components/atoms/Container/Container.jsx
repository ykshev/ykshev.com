import React from 'react'
import classNames from 'classnames'
import './Container.css'

const Container = ({ children, isFixed, isText, className, ...props }) => {
  return (
    <div
      className={classNames('Container', className, {
        'Container--fixed': isFixed,
        'Container--text': isText
      })}
      {...props}
    >
      {children}
    </div>
  )
}

export default Container
