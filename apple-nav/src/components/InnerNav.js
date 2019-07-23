import React from 'react';
import {Route, Link} from 'react-router-dom'


const InnerNav = (props) => {
    const {topdata} = props;
    //have it loop through topdata and compare each topdata.name against the :/itemName prop
    //then if it matches, render the below cards using the sublink data within the named item.
    const itemNames = props.match.params;
    console.log(props)
    console.log('props.match.params: ' + props.match.params)
    console.log(itemNames);
    
    // const macLinks = topdata[0].sublinks;
    // const iPadLinks = topdata[1].sublinks;
    // const iPhoneLinks = topdata[2].sublinks;
    // const watchLinks = topdata[3].sublinks;
    // const TVLinks = topdata[4].sublinks;
    // const musicLinks = topdata[5].sublinks;
    // const sublinkArray = [macLinks,iPadLinks,iPhoneLinks,watchLinks,TVLinks,musicLinks ]
    
    topdata.forEach(item => {
        let sublinkArr;
        if (item.name === itemNames) {
           sublinkArr = item.sublinks;
        } else {
            return null;
        }
    })

    return (
        <>
        {sublinkArr.map(item => {
            <div>
                <div>
                    <img src={item.img}/>
                    <span>{item.name}</span>
                </div>
            </div>
            })
        }
        </>
        )
}

export default InnerNav;