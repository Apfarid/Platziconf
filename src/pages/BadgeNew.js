import React, {Component, Fragment} from 'react'
import header from '../images/badge-header.svg'
import Navbar from '../component/Navbar'
import Badge from '../component/Badge'
import BadgeForm from '../component/BadgeForm'
import './style/BadgeNew.css'



class BadgeNew extends Component {

    state = { 
        form:{
            firstName:'',
            lastName:'',
            email:'',
            jobTitle:'',
            twitter:''
        }
    }

    handleChange = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        }) 
    }

    render(){

        return(
            <Fragment>

                <div className="">
                    <Navbar/>
                    <div className="BadgeNew__hero">
                        <img src={header} alt="Logo" className="img-fluid"/>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                        <Badge
                            firstName={this.state.form.firstName}
                            lastName={this.state.form.lastName}
                            jobTitle={this.state.form.jobTitle}
                            twitter = {this.state.form.twitter}
                            avatarUrl ="https://www.gravatar.com/avatar?d=identicon"
                            />
                        </div>

                        <div className="col-6">
                            <BadgeForm
                                onChange={this.handleChange}
                                state = {this.state}
                            />
                        </div>

                    </div>
                    
                </div>
            </Fragment>
        )
    }
}

export default BadgeNew
