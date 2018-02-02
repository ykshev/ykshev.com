import React, { Component } from 'react'
import Hello from 'components/slides/Hello/Hello'
import LastProjects from 'components/slides/LastProjects/LastProjects'
import Coding from 'components/slides/Coding/Coding'
import Designbase from 'components/slides/Designbase/Designbase'
import FixedIcons from 'components/slides/FixedIcons/FixedIcons'
import Uideo from 'components/slides/Uideo/Uideo'
import Request from 'components/slides/Request/Request'

import './styles.css'

const Layout = () => (
  <div className='Layout'>
    <FixedIcons />
    <Hello />
    <LastProjects />
    <hr className='Layout__hr' />
    <Coding />
    <Designbase />
    <Uideo />
    <Request />
  </div>
)
export default Layout
