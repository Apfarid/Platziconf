import React, {Fragment} from 'react';
import Navbar from '../component/Navbar'


function Layout(props){
    return (
        <Fragment>
            <Navbar/>   
            {props.children}

        </Fragment>
        
        ) 
}

export default Layout
