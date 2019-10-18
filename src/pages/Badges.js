import React from 'react'
import BadgetList from '../component/BadgetList'
import PageLoading from '../component/PageLoading'
import PageError from '../component/PageError'
import './style/Badges.css'
import confLogo from '../images/logo.svg'
import {Link} from 'react-router-dom'
import api from '../component/api'



class Badges extends React.Component{
    state = {
        data: undefined,
        loading: true,
        error: null
    };

    componentDidMount(){
        this.fetchData()
    }

    fetchData = async () => {
        this.setState({ loading: true, error:null })

        try{
            const data = await api.badges.list()
            this.setState({ loading:false, data: data})
        }catch(error){
            this.setState({ loading:false, error: error})
        }
    }



    render(){

        if( this.state.loading === true){
            return <PageLoading/>
        }

        if( this.state.error){
            return <PageError error = {this.state.error}/>
             //this.state.error.message
        }

        return(
            <div className="">
                

                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_comf-logo" src={confLogo} alt="Conf Logo"/>
                        </div>
                    </div>
                </div>

                <div className="Badge__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">New Badge</Link>
                    </div>
                </div>

                <div className="Badges__list">
                    <div className="Badges__container">
                        <BadgetList
                            Badges = {this.state.data}
                        />
                        
                    </div>
                </div>

            </div>
        )
    }
}
export default Badges