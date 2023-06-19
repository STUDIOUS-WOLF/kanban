import React from 'react'
import './Task.css'
import HorizontalMenu from '../../icons/horizontalMenu.svg'
import UserIcon from '../UserIcon/UserIcon'
import CommentIcon from '../../icons/commentBoxIcon.svg'
import FileIcon from '../../icons/folder-2.svg'
import { useDrag } from 'react-dnd'





function Task(props) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "div",
     item: { taskid:props.taskid,
              containerid:props.containerid },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  console.log(`${props.title}`)
  console.log(props.title)
  return (
    <div className='task' ref={drag}>
        <div className='taskHeader'>
        <div className='taskLable'>{props.lable}</div>
        <img src={HorizontalMenu}/>
        </div>
      <h1 className='taskHeading'>{props.title}</h1>  
      <p className='taskDescription'>{props.description}</p>
      {props.image&&<div className='image'>
      <img src={props.image}/>
      </div>}
      <div className='footer'>
      <div className='footerLeft'>
                <UserIcon/>
                <UserIcon/>
            </div>
          <div className='footerRight'>
            <div className='comments'>
              <img className='footerIcon' src={CommentIcon}/>
              <span className='footerText'>comments</span>
            </div>
            <div className='files'>
              <img className='footerIcon' src={FileIcon}/>
              <span  className='footerText'>files</span>
            </div>
            </div> 
      </div>
  </div>
  )
}

export default Task