import React from 'react'
import confLogo from '../images/badge-header.svg'

class Badge extends React.Component{


    render(){
        return(
            <div className="">
                <div className="">
                    <img src={confLogo} alt="Logo de la conferencia"/>
                </div>
                <div className="">
                    <img src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar"/>
                    <h1>Anderson <br/>Palacio</h1>
                </div>
                <div className="">
                    <p>Frontend Engineer</p>
                    <p>@socrates</p>    
                </div>
                <div className="">
                    Footer
                </div>
            </div>
        )
    }
}

export default Badge;