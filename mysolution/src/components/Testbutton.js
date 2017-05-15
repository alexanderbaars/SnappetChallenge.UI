import React, { Component } from 'react'

class Testbutton extends Component {

  render () {
    return (
      <button className='button action-button ch-red' type='button' >
        <div className='button-content'>
          <div className='action-button-text'>Automatic update</div>
          <div className='refresh action-button-svg'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
              <title>Refresh</title>
              <g id='cad83917-f4af-40e8-a5a7-6e4782600ab2' data-name='Layer 2'>
                <path d='M7.53,7.85A12,12,0,0,1,22.37,6.17l1.91-2.25a.67.67,0,0,1,1.17.32l1.55,7a.67.67,0,0,1-.67.79l-7.19-.39a.67.67,0,0,1-.51-1.11l1.71-2A8.9,8.9,0,1,0,24.89,17a1.54,1.54,0,0,1,3.08.22A12,12,0,1,1,7.53,7.85Z' />
              </g>
            </svg>
          </div>
        </div>
      </button>
    )
  }
}

export default Testbutton
