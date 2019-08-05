import React from 'react';
import { NavLink } from 'react-router-dom'

export default () => (
  <header>
      <div>
        <img
            height={60}
            src= { '/images/Stoneburner-Software-2-cropped.png' }
        />
          <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
          <NavLink to="/cart" activeClassName="is-active">Cart</NavLink>
          <NavLink to="/help" activeClassName="is-active">Help</NavLink> 
      </div>
      <h1>Sophia's Bookstore</h1>
  </header>
);

// <header class="main-header">
// <!-- <div style="display: inline-block"> -->
//   <button class="toggle-button">
//     <span class="toggle-button__bar"></span>
//     <span class="toggle-button__bar"></span>
//     <span class="toggle-button__bar"></span>
//   </button>
//   <div class="main-header__brand">
//     <a href="index.html"><img src="Stoneburner-Software-2-cropped.png" alt=""></a>
//   </div>
// <!-- </div> -->

// <nav class="main-nav">
//   <ul class="main-nav__items">
//     <li class="main-nav__item">
//       <a href="">HOME</a>
//     </li>
//     <li class="main-nav__item">
//       <a href="">CONTACT US</a>
//     </li>
//     <li class="main-nav__item">
//         <a href="">GET A QUOTE</a>
//     </li>
//   </ul>
// </nav>

// <nav class="mobile-nav">
//   <ul class="mobile-nav__items">
//       <li class="mobile-nav__item">
//           <a href="">HOME</a>
//       </li>
//       <li class="mobile-nav__item">
//           <a href="">CONTACT US</a>
//       </li>
//       <li class="mobile-nav__item">
//           <a href="">GET A QUOTE</a>
//       </li>
//   </ul>
// </nav>

// </header>