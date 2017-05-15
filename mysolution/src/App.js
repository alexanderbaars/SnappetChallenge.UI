import React, { Component } from 'react'
import Header from './components/Header'
import Container from './components/Container'
// import Testbutton from './components/Testbutton'
class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <Container />
        {/* <Testbutton /> */}
      </div>
    )
  }
}

export default App
