import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let notifnum = 0
  const [count, setCount] = useState(0)
  const [notifications , setnotifications] = useState([
    {profile:"./images/avatar-mark-webber.webp", name:"Mark Webber " , description:"reacted to your recent post " , topic:"My first tournament today " ,time:"1m ago", isSeen:false },
    {profile:"./images/avatar-angela-gray.webp", name:"Angela Gray " , description:"followed you " ,time:"5m ago", isSeen:false },
    {profile:"./images/avatar-jacob-thompson.webp", name:"Jacob Thompso " , description:"has joined your group " , topic:"Chess Club " ,time:"1 day ago", isSeen:false },
    {profile:"./images/avatar-rizky-hasanuddin.webp", name:"Rizky Hasanuddin " , description:"sent you a private message " , message:"Hello, thanks for setting up the Chess Club. I’ve been a member for a few weeks now and I’m already having lots of fun and improving my game." ,time:"5 days ago", isSeen:true },
    {profile:"./images/avatar-kimberly-smith.webp", name:"Kimberly Smith " , description:"commented on your picture " , image:"./images/image-chess.webp",time:"1 week ago", isSeen:true },
    {profile:"./images/avatar-nathan-peterson.webp", name:"Nathan Peterson " , description:"reacted to your recent post " , topic:"5 end-game strategies to increase your win rate " ,time:"2 weeks ago", isSeen:true },
    {profile:"./images/avatar-anna-kim.webp", name:"Anna Kim " , description:"left the group " , topic:"Chess Club " ,time:"2 weeks ago", isSeen:true }
  ])
  
  notifications.forEach((item) => {if(item.isSeen == false){notifnum += 1}})
  console.log(notifnum)

  function isSeen(index){
    notifications[index].isSeen = true
    setnotifications([...notifications])
  }

  function allSeen(){
    notifications.forEach((item) => {item.isSeen = true})
    setnotifications([...notifications])
  }

  return (
    <>
      <div id="application" >
        <div id="heading">
          <h1 id="head">Notifications <div id="notificationsNum" style={{ display: notifnum > 0 ? 'flex' : 'none' }}><p id="num">{notifnum}</p></div></h1>
          <p id="allRead" onClick={() => allSeen()}>Mark all as read</p>
          
        </div>
        <div id="notifications">
          {notifications.map((item,index) => {
              return  <div kay={index} class="singleNotification" style={{backgroundColor: item.isSeen == false ? "#F7FAFD" : undefined}} onClick={() => isSeen(index) } >
                        <img class="profile" src= {item.profile} />
                        <div class="notificationMain" >
                          <div class="notificationHead">
                            <div><span class="name" >{item.name}</span><span class="description" >{item.description}</span><span class="topic" style={{color:item.topic == "Chess Club " ? "#0A327B" : undefined }} >{item.topic}</span><span class="isSeen" style={{display: item.isSeen ? "none": "inline-block"}} ></span><div class="time" >{item.time}</div></div>
                            <img class="MainImg" style={{display:item.image ? 'block':"none"}} src={item.image}/>
                          </div>
                          <div class="messageBox" style={{display:!item.message ? "none" : "block"}}>
                            <p class="message">{item.message}</p>
                          </div>
                        </div>
                        
                      </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App
