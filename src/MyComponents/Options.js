import React from 'react'
import {Link} from 'react-router-dom';


export default function Options() {
  return (
    <>
    <div className='options'>
      {/* <img id="card" src="card.gif"/> */}
      <h1 id="emp">Empower Your Finances with Knowfin's Tools</h1>
      <p id="wel">Welcome to <strong><em>Knowfin</em></strong>, where we provide cutting-edge tools and resources to empower you in managing your finances effectively. Our platform combines intuitive Interfaces, Insighful analytics, and goal-oriented features to help you achieve financial success.</p>
      <img id="card" src="hand.gif" style={{opacity:"100%"}}/>
    </div>
    
    <div className='buttons-mis' id="ret">

    <Link to="/budget"><button type="button" class="btn btn-success">Budget</button></Link>
    <Link to="/investment"><button type="button" class="btn btn-success">Investment</button></Link>
    <Link to="/saving"><button type="button" class="btn btn-success">Saving</button></Link>
    <Link to="/insurance"><button type="button" class="btn btn-success">Insurance</button></Link>
    <Link to="/retirement"><button type="button" class="btn btn-success">Retirement</button></Link>
</div>
</>
  )
}

  
  
  
  