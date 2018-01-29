import React from 'react'
import classNames from 'classnames'
import './Container.css'

const Container = ({ children, isFixed, isText }) => {
  return (
    <div
      className={classNames('Container', {
        'Container--fixed': isFixed,
        'Container--text': isText
      })}
    >
      {children}
    </div>
  )
}

export default Container
