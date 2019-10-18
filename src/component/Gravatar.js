import React from React
import md5 from 'md5'

function Gravatar (props){
    const email = props.email
    const hash = md5(email)
    return(
        <div className="">
            <img className={props.className} src={this.props.avatarUrl} alt="Avatar"/>
            <h1>{this.props.firstName} <br/>{this.props.lastName}</h1>
        </div>
    )
}
export default Gravatar