import React, {useState} from 'react';
import {AiOutlineHeart, AiFillHeart} from "react-icons/ai"


export default function HeartButton () {

    const [like, setLike] = useState(false);
    
  return (
    <div className="heart" onClick={() => setLike(!like)}>
    {like ? <AiFillHeart /> : <AiOutlineHeart />}
</div>
  );
}

//   
// export default function HeartButton () {

//     const [heartClicked, setHeartClicked] = useState(null);

//     const handleHeartClick =()=> {
//         setHeartClicked(!heartClicked)
//         console.log(heartClicked)

//         if(heartClicked) {
//             return {icon.classList.toggle('active')}
//         }
//     }


//     return (
//         <div className='large-font text-center top-20'>
//         <ion-icon onClick={handleHeartClick} name="heart-button">
//           <div className='red-bg'></div>
//         </ion-icon>
//       </div>
   
//     )
// }