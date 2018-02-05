import React, { Component } from 'react'
import PropTypes from 'prop-types'
import VisibilitySensor from 'react-visibility-sensor'

import './VisibilityAnimation.css'
import classNames from 'classnames'

class VisibilityAnimation extends Component {
  static defaultProps = {}

  state = { activeChildren: [] }

  static propTypes = {}

  onChange = isVisible => {
    if (isVisible) this.setState({ activeChildren: false })
  }

  render () {
    const { children } = this.props
    const { activeChildren } = this.state

    return React.Children.map(children, (child, index) => (
      <VisibilitySensor
        minTopValue={80}
        partialVisibility
        onChange={isVisible => {
          if (isVisible) {
            this.setState(prevState => ({
              activeChildren: [...prevState.activeChildren, index]
            }))
          }
        }}
        active={activeChildren.indexOf(index) === -1}
      >
        <div
          className={
            activeChildren.indexOf(index) != -1
              ? 'VisibilityAnimation--visible'
              : 'VisibilityAnimation--hidden'
          }
        >
          {child}
        </div>
      </VisibilitySensor>
    ))
  }
}

export default VisibilityAnimation
