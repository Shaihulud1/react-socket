import React, {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import openSocket from 'socket.io-client'

export const Navbar = () => {
    
    
    const initialServerStorage = () => {
        let storValue = localStorage.getItem("serverMode") == 1 ? 1 : 0
        return storValue
    }
    let [serverMode, setServerMode] = useState(initialServerStorage)
    
    useEffect( () => {
        let storValue = serverMode == 1 ? 1 : 0
        localStorage.setItem("serverMode", storValue)
        if(storValue == 1){
            const socket = openSocket('http://localhost:8000')
			console.log('test');
        }
    }, [serverMode])

    let [connect, setConnect] = useState(0)



    return (
		<nav>
			<div className="nav-wrapper">
                {connect == 1 &&
                    <a href="#!" className="brand-logo" style={{marginLeft:"23px"}}>
                        Device connected
                    </a>
                }
				<ul className="right hide-on-med-and-down">
					<li>
						<NavLink to="/list">
							<i className="material-icons">List</i>
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/wi-fi"
							onClick={() => {
								setServerMode(serverMode == 1 ? 0 : 1)
							}}
						>
							<span
								className={`badge ${serverMode == 1 ? 'green' : 'red'} server-mode`}
								style={{ color: "#fff" }}
							>
								Wi-fi mode
							</span>
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	)
}