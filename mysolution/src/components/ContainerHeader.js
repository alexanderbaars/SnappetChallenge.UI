import React, { Component } from 'react'
import balls from '../assets/icons/balls.svg'
import person from '../assets/icons/person.svg'

class ContainerHeader extends Component {

  render () {
    return (

      <div className='ch-container-header'>
        {/* <div className='toggle'>

          <div className='togglebutton leftbutton active'>
            <label className='button'>
              <input type='radio' id='option' name='toggle' defaultChecked />
              <span><img className='balls' src={balls} alt='balls?' /></span>
            </label>
            <label className='button'>
              <input type='radio' id='option2' name='toggle' />
              <span><img className='person' src={person} alt='about me' /></span>
            </label>

          </div>

        </div> */}
        <div className='toggle-drop'>
          <div className='toggle'>
            <a href='#' id='balls' className='togglebutton leftbutton active'>
              <img className='balls' src={balls} alt='balls?' />
            </a>
            <a href='#' id='person' className='togglebutton rightbutton notactive'>
              <img className='person' src={person} alt='about me' />
            </a>
          </div>
          <select className='dropdown button boxshades' id='dropdown' onChange={this.props.handler} >
            <option value='0'>Math Grade 1</option>
            <option value='1'>Math Grade 2</option>
            <option value='2'>Math Grade 3</option>

          </select>
        </div>
        <div className='flexspace' />
        <button className='button action-button ch-blue' type='button'>
          <div className='action-button-container'>
            <div className='action-button-text'>Add learning objective</div>

            <div className='add-objective action-button-svg'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
                <title>Plus</title>
                <g id='6f243fd7-c556-47e1-8f68-0331adaf55b1' data-name='Layer 2'>
                  <g id='2eca55ae-b0da-4acb-a077-deef613d2c13' data-name='path102'>
                    <path d='M18.11,28.42c0-3.81,0-6.63,0-10.31H28.42c2.72,0,2.72-4.22,0-4.22H18.11V3.58c0-2.72-4.22-2.72-4.22,0,0,3.81,0,6.63,0,10.31H3.58c-2.72,0-2.72,4.22,0,4.22H13.89V28.42C13.89,31.14,18.11,31.14,18.11,28.42Z' />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </button>

        <button className='button action-button ch-red' type='button' >
          <div className='action-button-container'>
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

      </div>

    )
  }
}

export default ContainerHeader
