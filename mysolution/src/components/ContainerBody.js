import React, { Component } from 'react'
class ContainerBody extends Component {

  getCircle = (type, count) => {
    let circles = [];
    for (var i = 0; i < count; i++) {
      circles.push(<div key={i} className={'circle ' + type} />);
    }
    return circles;
  };

  render() {
    return (

      <div className='ch-container-body' >
        <div className='ch-container-body-table'>
           <div className='table-head'>
            <div className='firstcolumn textHeader'>
              <div className='cell'>Learning Objective <svg id="4277e692-56ed-4859-b091-d691c1a257d8" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>Down</title><path d="M27.78,9.51a2,2,0,0,0-2.85,0L16,18.45l-8.86-9a2,2,0,0,0-2.85,0,2,2,0,0,0,0,2.85L14.61,22.58a2,2,0,0,0,2.85,0L27.78,12.26a2,2,0,0,0,0-2.75Z"/></svg></div>
            </div>
            <div className='secondcolumn textHeader'>
              <div className='cell'>Pupils</div>
            </div>
            <div className='thirdcolumn column'></div>
          </div>
          {this.props.course.map((item, index) =>
              <div key={index} className='table-row'>
                <div className='firstcolumn column'>
                  <div className='objectiveText cell'>{item.objective}</div>
                </div>
                <div className='secondcolumn column'>
                  <div className='objectiveProgress cell'>
                    {this.getCircle('done', item.done)}
                    {this.getCircle('todo', item.todo)}
                    {this.getCircle('optional', item.optional)}
                  </div>
                </div>
                <div className='thirdcolumn column'>
                  <button type='button' className='objectiveDetailsButton boxshades' alt='Show Details'>
                    <span className='details-button-text'>Show details</span>
                  </button>
                </div>
              </div>
            )}
        </div>
      </div>

    )
  }
}

export default ContainerBody
