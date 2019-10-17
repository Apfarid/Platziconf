import React from 'react'

class BadgeForm extends React.Component{

   // state ={}



    /*handleChange = (e) => {
       //` console.log(e.target.name +' ' + e.target.value);  `  
       this.setState({
        [e.target.name]: e.target.value
       })   
    }*/

    handleClick = (e) => {
        console.log('button was clicked');        
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state);
        
    }


    render(){

        return(
            <div className="">
                <h1>New Attendant</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="">First Name</label>
                        <input type="text" value={this.props.state.firstName} name="firstName" onChange={this.props.onChange} className="form-control"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Last Name</label>
                        <input type="text" value={this.props.state.lastName} name="lastName" onChange={this.props.onChange} className="form-control"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">email</label>
                        <input type="text" value={this.props.state.email} name="email" onChange={this.props.onChange} className="form-control"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Job Title</label>
                        <input type="text" value={this.props.state.jobTitle} name="jobTitle" onChange={this.props.onChange} className="form-control"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Twiter</label>
                        <input type="text" value={this.props.state.twitter} name="twitter" onChange={this.props.onChange} className="form-control"/>
                    </div>

                    <button  onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }
}

export default BadgeForm