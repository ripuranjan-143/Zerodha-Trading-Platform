import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../custom.css';

function Navbar() {
  // Function to close collapse after clicking a nav link
  const closeMenu = () => {
    const menu = document.getElementById(
      'navbarSupportedContent'
    );
    if (menu && menu.classList.contains('show')) {
      // Bootstrap's collapse API
      window.bootstrap.Collapse.getInstance(menu).hide();
    }
  };

  return (
    <nav
      className="navbar navbar-expand-md border-bottom fixed-top"
      style={{ backgroundColor: '#FFF' }}
    >
      <div className="container p-2">
        <Link
          className="navbar-brand"
          to="/"
          onClick={closeMenu}
        >
          <img
            src="media/images/logo.svg"
            alt="Logo"
            style={{ width: '100px', height: 'auto' }}
          />
        </Link>

        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            <li className="nav-item me-4">
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  'nav-link' + (isActive ? ' active' : '')
                }
                onClick={closeMenu}
              >
                Signup
              </NavLink>
            </li>
            <li className="nav-item me-4">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  'nav-link' + (isActive ? ' active' : '')
                }
                onClick={closeMenu}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item me-4">
              <NavLink
                to="/product"
                className={({ isActive }) =>
                  'nav-link' + (isActive ? ' active' : '')
                }
                onClick={closeMenu}
              >
                Product
              </NavLink>
            </li>
            <li className="nav-item me-4">
              <NavLink
                to="/pricing"
                className={({ isActive }) =>
                  'nav-link' + (isActive ? ' active' : '')
                }
                onClick={closeMenu}
              >
                Pricing
              </NavLink>
            </li>
            <li className="nav-item me-4">
              <NavLink
                to="/support"
                className={({ isActive }) =>
                  'nav-link' + (isActive ? ' active' : '')
                }
                onClick={closeMenu}
              >
                Support
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

// import React from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import '../../custom.css';

// function Navbar() {
//   return (
//     <nav
//       className="navbar navbar-expand-md border-bottom fixed-top"
//       style={{ backgroundColor: '#FFF' }}
//     >
//       <div className="container p-2">
//         <Link className="navbar-brand" to="/">
//           <img
//             src="media/images/logo.svg"
//             alt="Logo"
//             style={{ width: '100px', height: 'auto' }}
//           />
//         </Link>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div
//           className="collapse navbar-collapse"
//           id="navbarSupportedContent"
//         >
//           <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
//             <li className="nav-item me-4">
//               <NavLink
//                 to="/signup"
//                 className={({ isActive }) =>
//                   'nav-link' + (isActive ? ' active' : '')
//                 }
//               >
//                 Signup
//               </NavLink>
//             </li>
//             <li className="nav-item me-4">
//               <NavLink
//                 to="/about"
//                 className={({ isActive }) =>
//                   'nav-link' + (isActive ? ' active' : '')
//                 }
//               >
//                 About
//               </NavLink>
//             </li>
//             <li className="nav-item me-4">
//               <NavLink
//                 to="/product"
//                 className={({ isActive }) =>
//                   'nav-link' + (isActive ? ' active' : '')
//                 }
//               >
//                 Product
//               </NavLink>
//             </li>
//             <li className="nav-item me-4">
//               <NavLink
//                 to="/pricing"
//                 className={({ isActive }) =>
//                   'nav-link' + (isActive ? ' active' : '')
//                 }
//               >
//                 Pricing
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink
//                 to="/support"
//                 className={({ isActive }) =>
//                   'nav-link' + (isActive ? ' active' : '')
//                 }
//               >
//                 Support
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
