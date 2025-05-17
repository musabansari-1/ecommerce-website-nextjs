import React, {useRef, useState} from 'react'
import leaderBoard from '@/components/LeaderBoard';
import {usersData} from '@/data/users';
import {BiCoinStack} from 'react-icons/bi';
import { useStateContext } from '@/context/StateContext';
import {AiFillCloseCircle} from 'react-icons/ai'


const LeaderBoard = () => {
  const {setShowLeaderBoard, showLeaderBoard} = useStateContext();
  const leaderBoardRef = useRef();
  let [count, setCount] = useState(1);

  if(showLeaderBoard) {
  return (
    <div className='leaderboard-wrapper' ref={leaderBoardRef}>
    <div className='leaderboard'>
      <div className='d-flex'>
       <h4 style={{marginRight: '25px'}} onClick={() => setShowLeaderBoard(false)}><AiFillCloseCircle/></h4>
       <h4 style={{marginLeft: '25px'}} className='text-center'>LEADERBOARD</h4>
       </div> 
       {usersData.map((user,index) => {
        return (
        <div className={`d-flex leaderboard-item`}>
            <p className='rank'>{count++}</p>
            <img className='img' src={user.image} width='50px' height='50px'/>
            <p className='name'>{user.realName}</p>
            <p className='points'>{user.points} <BiCoinStack color='orange' /> </p>
        </div>
        )
       })}
    </div>
    </div>
  )
      }
      
}

export default LeaderBoard
