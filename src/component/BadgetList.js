import React from 'react'

class BadgetList extends React.Component{


    render(){

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