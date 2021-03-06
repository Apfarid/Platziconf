import React from 'react'
import confLogo from '../images/badge-header.svg'
import './styles/Badge.css'

class Badge extends React.Component{


    render(){



        return(
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLogo} alt="Logo de la conferencia"/>
                </div>
                <div className="Badge__section-name">
                    
                </div>
                <div className="Badge__section-info">
                    <h3>{this.props.jobTitle}</h3>
                    <div>@{this.props.twitter}</div>    
                </div>
                <div className="Badge__footer">
                    Footer
                </div>
            </div>
        )
    }
}

export default Badge;