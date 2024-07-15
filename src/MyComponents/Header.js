import React from 'react'

export default function Header() {
  return (
    <nav className="navbar">
        <div className="container-fluid">
          <img className="imga" src="fin.png" style={{opacity:"100%"}}/>
          <a className="navbar-brand" href="/" style= {{color: "white",fontFamily:"neon"}}>KNOWFIN</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent" >
            <ul className="navbar-nav finz">
              <hr/>
              <li className="nav-item finz">
                <a className="nav-link active" aria-current="page" href="/" style={{color: "white"}}>Home</a>
              </li>
              <hr/>
              <li className="nav-item finz">
                <a className="nav-link" href="https://github.com/shrivastavanolo/Knowfin"target='_blank' style={{color: "white"}}>Code</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}


