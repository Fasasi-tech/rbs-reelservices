
// import React, {useState} from 'react'
// import { AiOutlineClockCircle } from 'react-icons/ai';

// const Tooltip = ({text, children}) => {
//     const [isVisible, setIsVisible ] = useState(false)
//   return (
//     <div className="relative inline-block"
//         onMouseEnter={() => setIsVisible(true)}
//         onMouseLeave={() => setIsVisible(false)}
//     >
//         {children}
//         <div className="absolute z-10 -left-full bg-gray-800 text-white px-2 py-1 rounded-md whitespace-nowrap opacity-0 transition-opacity duration-300 group-hover:opacity-100">
//            {isVisible && (
//             <div className="absolute  z-10 top-72 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded-md whitespace-nowrap opacity-100 transition-opacity duration-300">
//                 {text}
//             </div>)}
           
//         </div>
//     </div>
//   )
// }

// export default Tooltip