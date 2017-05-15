import React, { Component } from 'react'
import ContainerHeader from './ContainerHeader'
import ContainerBody from './ContainerBody'
import data from '../data/data'

const fullCourse = data.getTree()
let currentCourse = fullCourse[0]

class Container extends Component {
  constructor (props) {
    super(props)

    this.state = {
      currentCourse: currentCourse
    }

    this.handler = this.handler.bind(this)
  }

  handler (e) {
    e.preventDefault()
    this.setState({
      currentCourse: fullCourse[e.target.value]
    })
  }

  render () {
    return (

      <div className='ch-container'>
        <ContainerHeader handler={this.handler} />
        <ContainerBody course={this.state.currentCourse} />
      </div>

    )
  }
}

export default Container
