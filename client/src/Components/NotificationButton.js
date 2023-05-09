// import {useState} from 'react';
// import '../style/NotificatonButton.css';
// import { FaBell } from 'react-icons/fa';
// const INITIAL_STATE = [
  
    
//   { id: 2, text: 'Raheem ahmed requested for a new job!' },
//   { id: 3,  text: 'yahia ahmed requested for a new job!' },
  
 
  
  
// ]
// export default function Pop() {
//   const [isShown, setIsShown] = useState();
//   const [notification, setNotification] = useState(INITIAL_STATE);
//   const renderNotification = () => {
//     return notification.map(({ id, text }) => {
       
//       return <ul  key={id}>
         
  
//       {/* <button id='three-dots'> */}
      
      
//               <li className='notification-list'>{text}</li>
        
//              </ul>
    
//     })
//   };
//   const handleClick = event => {
//     // 👇️ toggle shown state
//     setIsShown(current => !current);
   

//     // 👇️ or simply set it to true
//     // setIsShown(true);
//   };

//   return (
//     <div>
//       <button className='icon-button' onClick={handleClick}><FaBell></FaBell></button>

//       {/* 👇️ show elements on click */}
//       {isShown ? (
//         <div className='Contianer'>
//             <div className='title'>
//           <h2>Notification</h2>
//           <hr></hr>
//           </div>
//           <div className='content'>
//           {renderNotification()}
//           </div>
//         </div>
//       ) : null}

    
//       {isShown ? <> </> : null}
//     </div>
//   );
// }

// function Box() {
//   return (
//     <div>
//       <h2>Box</h2>
//     </div>
//   );
// }
