import React from 'react'
import './Header.css'
import LinkIocn from '../../icons/link.svg'
import EditIcon from '../../icons/arrow-square-up.svg'
import AddIcon from '../../icons/add-square.svg'
import UserIcon from '../UserIcon/UserIcon'
function Header() {
  return (
    <div className='header'>
        <div className='headerLeft'>
        <div className='projectTitle'>
            <div className='projectName'>
                <text >project</text>
            </div>
            <div className='projectIcons'>
                <img src={LinkIocn}/>
                <img src={EditIcon}/>
            </div>
        </div>
        </div>
        <div className='spaceBetween'></div>
        <div className='headerRight'>
            <img src={AddIcon} className='addIcon'/>
            <text>invite</text>
            <div className='userIcon'>
                <UserIcon/>
                <UserIcon/>
                <UserIcon/>
                <UserIcon/>
            </div>
        </div>

    </div>
  )
}

export default Header