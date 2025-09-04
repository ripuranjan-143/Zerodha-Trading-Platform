import { useState } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  let handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = 'menu';
  const activeMenuClass = 'menu selected';

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: '25px' }} />
      <div className="menus">
        <ul className="mt-2">
          <li>
            <Link
              to="/"
              className={`text-decoration-none ${
                selectedMenu === 0 ? activeMenuClass : menuClass
              }`}
              onClick={() => handleMenuClick(0)}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/orders"
              className={`text-decoration-none ${
                selectedMenu === 1 ? activeMenuClass : menuClass
              }`}
              onClick={() => handleMenuClick(1)}
            >
              Orders
            </Link>
          </li>
          <li>
            <Link
              to="/holdings"
              onClick={() => handleMenuClick(2)}
              className={`text-decoration-none ${
                selectedMenu === 2 ? activeMenuClass : menuClass
              }`}
            >
              Holdings
            </Link>
          </li>
          <li>
            <Link
              to="/positions"
              onClick={() => handleMenuClick(3)}
              className={`text-decoration-none ${
                selectedMenu === 3 ? activeMenuClass : menuClass
              }`}
            >
              Positions
            </Link>
          </li>
          <li>
            <Link
              to="/funds"
              onClick={() => handleMenuClick(4)}
              className={`text-decoration-none ${
                selectedMenu === 4 ? activeMenuClass : menuClass
              }`}
            >
              Funds
            </Link>
          </li>
          <li>
            <Link
              to="/apps"
              onClick={() => handleMenuClick(5)}
              className={`text-decoration-none ${
                selectedMenu === 5 ? activeMenuClass : menuClass
              }`}
            >
              Apps
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username mt-3">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;

// import React, { useState } from 'react';

// import { Link } from 'react-router-dom';

// const Menu = () => {
//   const [selectedMenu, setSelectedMenu] = useState(0);
//   const [isProfileDropdownOpen, setIsProfileDropdownOpen] =
//     useState(false);

//   const handleMenuClick = (index) => {
//     setSelectedMenu(index);
//   };

//   const handleProfileClick = (index) => {
//     setIsProfileDropdownOpen(!isProfileDropdownOpen);
//   };

//   const menuClass = 'menu';
//   const activeMenuClass = 'menu selected';

//   return (
//     <div className="menu-container">
//       <img src="logo.png" style={{ width: '25px' }} />
//       <div className="menus">
//         <ul>
//           <li>
//             <Link
//               style={{ textDecoration: 'none' }}
//               to="/"
//               onClick={() => handleMenuClick(0)}
//             >
//               <p
//                 className={
//                   selectedMenu === 0
//                     ? activeMenuClass
//                     : menuClass
//                 }
//               >
//                 Dashboard
//               </p>
//             </Link>
//           </li>
//           <li>
//             <Link
//               style={{ textDecoration: 'none' }}
//               to="/orders"
//               onClick={() => handleMenuClick(1)}
//             >
//               <p
//                 className={
//                   selectedMenu === 1
//                     ? activeMenuClass
//                     : menuClass
//                 }
//               >
//                 Orders
//               </p>
//             </Link>
//           </li>
//           <li>
//             <Link
//               style={{ textDecoration: 'none' }}
//               to="/holdings"
//               onClick={() => handleMenuClick(2)}
//             >
//               <p
//                 className={
//                   selectedMenu === 2
//                     ? activeMenuClass
//                     : menuClass
//                 }
//               >
//                 Holdings
//               </p>
//             </Link>
//           </li>
//           <li>
//             <Link
//               style={{ textDecoration: 'none' }}
//               to="/positions"
//               onClick={() => handleMenuClick(3)}
//             >
//               <p
//                 className={
//                   selectedMenu === 3
//                     ? activeMenuClass
//                     : menuClass
//                 }
//               >
//                 Positions
//               </p>
//             </Link>
//           </li>
//           <li>
//             <Link
//               style={{ textDecoration: 'none' }}
//               to="/funds"
//               onClick={() => handleMenuClick(4)}
//             >
//               <p
//                 className={
//                   selectedMenu === 4
//                     ? activeMenuClass
//                     : menuClass
//                 }
//               >
//                 Funds
//               </p>
//             </Link>
//           </li>
//           <li>
//             <Link
//               style={{ textDecoration: 'none' }}
//               to="/apps"
//               onClick={() => handleMenuClick(5)}
//             >
//               <p
//                 className={
//                   selectedMenu === 5
//                     ? activeMenuClass
//                     : menuClass
//                 }
//               >
//                 Apps
//               </p>
//             </Link>
//           </li>
//         </ul>
//         <hr />
//         <div
//           className="profile"
//           onClick={handleProfileClick}
//         >
//           <div className="avatar">ZU</div>
//           <p className="username">USERID</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Menu;
