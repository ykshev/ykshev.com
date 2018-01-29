import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './LastProjects.css'
import projects from './data.js'
import BehancePreview from './components/BehancePreview/BehancePreview'
import Container from 'components/atoms/Container/Container'

const LastProjects = () => (
  <Container isFixed>
    <div className='LastProjects'>
      <h5 className='LastProjects__title'>My Latest freelance projects:</h5>
      <div className='LastProjects__items'>
        {projects.map(project => (
          <BehancePreview
            title={project.title}
            tag={project.tag}
            likes={project.likes}
            views={project.views}
            link={project.link}
            img={project.img}
          />
        ))}
        <a
          href='https://www.behance.net/ykshev'
          target='_blank'
          className='LastProjects__last-item'
        >
          <h3 className='LastProjects__last-item-title'>
            See more projects on Behance ›
          </h3>
        </a>
      </div>
    </div>
  </Container>
)

export default LastProjects
