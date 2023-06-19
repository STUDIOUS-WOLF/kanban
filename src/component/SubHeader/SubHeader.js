import React from 'react'
import './SubHeader.css'
import ArrowDown from '../../icons/arrow-down.svg'
import FilterIcon from '../../icons/filter.svg'
import Calender from '../../icons/calendar.svg'
import AddUser from '../../icons/profile-2user.svg'
import HorizontalDivider from '../../icons/horizontalDivider.svg'
import EqualsIcon from '../../icons/equals.svg'
import MenuIcon from '../../icons/menu.svg'
function Subheader() {
  return (

    <div className='subHeader'>
    <div className='subHeaderLeft'>
        <div className='filter'>
            <img src={FilterIcon}/>
            <text>filter</text>
            <img src={ArrowDown}/>
        </div>
        <div className='calender'>
            <img src={Calender}/>
            <text>Today</text>
            <img src={ArrowDown}/>
        </div>
    </div>
    <div className='subHeaderRight'>
        <div className='share'>
            <img src={AddUser}/>
            <text>Share</text>
        </div>
            <img src={HorizontalDivider}/>
            <img src={EqualsIcon}/>
            <img src={MenuIcon}/>
        
    </div>
    </div>
  )
}

export default Subheader