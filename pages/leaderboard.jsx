// import React, {useRef, useState} from 'react'
// import leaderBoard from '@/components/leaderBoard';
// import {usersData} from '@/data/users';
// import {BiCoinStack} from 'react-icons/bi';
// import { useStateContext } from '@/context/StateContext';


// const leaderboard = () => {
//   const {setShowLeaderBoard, showLeaderBoard} = useStateContext();
//   const leaderBoardRef = useRef();
//   let [count, setCount] = useState(1);

//   if(showLeaderBoard) { 
//   return (
//     <div className='leaderboard-wrapper' ref={leaderBoardRef}>
//     <div className='leaderboard'>
//        <h4 onClick={() => setShowLeaderBoard(false)}>{'<'}</h4>
//        <h4 className='text-center'>LEADERBOARD</h4>
//        {usersData.map(user => {
//         return (
//         <div className='d-flex leaderboard-item'>
//             <p className='rank'>{count++}</p>
//             <img className='img' src={user.image} width='50px' height='50px'/>
//             <p className='name'>{user.username}</p>
//             <p className='points'>{user.points} <BiCoinStack color='orange' /> </p>
//         </div>
//         )
//        })}
//     </div>
//     </div>
//   )
//       }
//       else {
//         return null;
//       }
// }

// export default leaderboard
