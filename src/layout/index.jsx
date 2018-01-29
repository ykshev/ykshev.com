import React, { Component } from 'react'
import './styles.css'
import Hello from 'components/slides/Hello/Hello'
import LastProjects from 'components/slides/LastProjects/LastProjects'
import Coding from 'components/slides/Coding/Coding'
import Designbase from 'components/slides/Designbase/Designbase'
import FixedIcons from 'components/slides/FixedIcons/FixedIcons'

const Layout = () => (
  <div className='Layout'>
    <FixedIcons />
    <Hello />
    <LastProjects />
    <hr className='Layout__hr' />
    <Coding />
    <Designbase />
  </div>
)
export default Layout
