import React from 'react'
import {Link} from 'react-router-dom'

class BadgetList extends React.Component{


    render(){

        if(this.props.Badges.length === 0 ){
            return(
                <React.Fragment>
                    <h3>No Badge were found</h3>
                    <Link className="btn btn-primary" to="/badges/new">Create new Badge</Link>
                </React.Fragment>
            )
        }

        return(
            <ul className="list-unstyled">
                {this.props.Badges.map( (dato) => (
                    <li key={dato.id}> 
                        <p> 
                            {dato.firstName}
                        </p>
                    </li>
                ))}
            </ul>
        )
    }
}

export default BadgetList

/**
 * Pendiente organizar los estilos para esta lista
 */