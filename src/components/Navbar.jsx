// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <div className="bg-gray-800 h-full w-48 fixed left-0 top-0 overflow-y-auto">
//       <ul className="py-4">
//         <h3>Contact Managemnt App</h3>
//         <li><Link to='/' className="text-black block py-2 px-4">Home</Link></li>
//         <li><a href="#" className="text-black block py-2 px-4">Contact From</a></li>
//         <li><a href="#" className="text-black block py-2 px-4">Chart</a></li>
//         {/* <li><a href="#" className="text-black block py-2 px-4">Contact</a></li> */}
//       </ul>
//     </div>
   
//   );
// };

// export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

const Navbar = () => {
  return (
    <div className="bg-gray-800 h-full w-48 fixed left-0 top-0 overflow-y-auto" style={{ position: 'fixed' ,borderRadius: '5px',backgroundColor: '#E5E7E9 ' ,height:'100%'}}>
      <ul className="py-4">
        <li><Link to="/" className="text-black block py-3 px-4 mb-2">Contact From</Link></li>
        <li><Link to="/chart" className="text-black block py-3 px-4 mb-2">Chart</Link></li>
        <li><Link to="/services" className="text-black block py-2 px-4">Services</Link></li>
        
      </ul>
    </div>
  );
};

export default Navbar;


