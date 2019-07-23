import React from 'react';
import {Route, Link} from 'react-router-dom'
import InnerNav from './InnerNav'


const TopNav = (props) => {
    const {topdata} = props;
    console.log(props);
    
    return (
        <>
        <div>
            <ul>
                <>
                <li><img src={''/*PLACEHOLDER FOR APPLE ICON*/}/></li>
                {topdata.map(item => (<li key={item.name}><Link to="/:itemName">{item.name}</Link></li>))}
                <li><img src={''/*PLACEHOLDER FOR SEARCH ICON*/}/></li>
                <li><img src={''/*PLACEHOLDER FOR CHECKOUT ICON */}/></li>
                </>
            </ul>
        </div>
        <Route path={'/:itemName'} render={(props) => <InnerNav {...props} topdata={topdata}/>}/>
        </>
    )
}

export default TopNav;