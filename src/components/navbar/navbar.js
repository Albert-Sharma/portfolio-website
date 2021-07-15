import React from "react"
import {NavLink, Link} from "react-router-dom";
import "./navbar.css"
import Mail from "../statics/mail.svg"
import ContactSVG from "./contactSVG"

export default function Navbar() {

  return (
    <div className="navbar">
      <div className="nav">
        <Link to="/" className="logo"><h1>Kaustubh<span className="dot">.</span></h1></Link>
        <ul>
          <li className="home">
            <NavLink to="/" exact={true} id="home" activeStyle={{color:'#cf000f'}}>
              <span className="svgForMobile">
                <svg aria-label="Home" class="_8-yf5" fill="white" height="22" viewBox="0 0 48 48" width="22">
                  <path d="M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z">
                  </path>
                </svg>
                <br></br>
              </span>
              Home
            </NavLink>
          </li>
          <li className="project">
            <NavLink to="/project" id="project" activeStyle={{color:'#cf000f'}}>
              <span className="svgForMobile">
                <svg version="1.0"
                  width="40" height="22" viewBox="0 0 1280.000000 853.000000"
                  preserveAspectRatio="xMidYMid meet">
                  <g transform="translate(0.000000,853.000000) scale(0.100000,-0.100000)"
                    fill="white" stroke="none">
                    <path d="M2650 8043 c-8 -2 -26 -10 -38 -16 -55 -27 -52 130 -52 -2464 0
                      -2151 2 -2401 16 -2421 32 -46 41 -47 418 -52 l360 -5 0 -55 1 -55 -390 -5
                      c-317 -4 -395 -8 -419 -20 -21 -11 -232 -319 -802 -1175 -426 -638 -774 -1169
                      -775 -1180 -1 -11 -1 -71 -1 -132 2 -98 5 -116 22 -133 20 -20 33 -20 5693
                      -20 4881 0 5676 2 5693 14 16 13 20 32 26 148 l6 133 -359 540 c-931 1402
                      -1186 1780 -1212 1799 -27 20 -45 21 -379 26 l-350 5 -1 55 -1 55 319 5 c336
                      5 348 7 379 52 14 20 16 271 16 2429 l0 2407 -29 30 c-17 16 -44 32 -62 36
                      -37 7 -8057 7 -8079 -1z m6596 -5010 l-2 -58 -2529 0 -2530 0 -2 45 c-1 25 0
                      51 2 58 4 9 519 12 2534 12 l2529 0 -2 -57z"/>
                  </g>
                </svg>
                <br></br>
              </span>
              Project
            </NavLink>
          </li>
          <li className="about">
            <NavLink to="/about" id="about" activeStyle={{color:'#cf000f'}}>
              <span className="svgForMobile">
                <svg version="1.0" width="22" height="22" viewBox="0 0 1229.000000 1280.000000" preserveAspectRatio="xMidYMid meet">
                  <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                    fill="white" stroke="none">
                    <path d="M5905 12794 c-522 -42 -975 -168 -1420 -398 -1080 -556 -1803 -1608
                    -1941 -2821 -32 -277 -22 -670 22 -955 158 -1004 728 -1892 1579 -2457 1314
                    -872 3040 -792 4270 198 620 500 1056 1183 1245 1954 77 314 102 527 102 865
                    0 426 -58 780 -192 1173 -448 1314 -1613 2254 -3005 2423 -124 15 -551 26
                    -660 18z"/>
                    <path d="M2784 5554 c-301 -211 -536 -406 -808 -674 -527 -518 -921 -1061
                    -1255 -1730 -458 -917 -690 -1857 -718 -2903 l-6 -247 6146 0 6147 0 0 143
                    c-1 1144 -327 2357 -900 3352 -480 833 -1170 1584 -1913 2084 l-78 52 -42 -35
                    c-23 -19 -82 -70 -132 -111 -596 -503 -1357 -869 -2131 -1024 -336 -68 -605
                    -94 -949 -94 -260 0 -422 11 -660 44 -894 126 -1742 503 -2423 1077 -57 48
                    -119 99 -137 114 l-32 28 -109 -76z"/>
                  </g>
                </svg>
                <br></br>
              </span>
              About
            </NavLink>
          </li>
          <li className="contact">
            <NavLink to="/contact" className="" activeStyle={{color:'#cf000f'}}>
              <span className="svgForMobile">
                <ContactSVG />
                <br></br>
              </span>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <NavLink className="mail hover" to="/contact" activeStyle={{color:'#cf000f'}}>
        <img src={Mail} alt="My Logo" width="35px" height="35px" />
      </NavLink>
      <div className="social">
        <a href="https://www.instagram.com/v_kosco_28/" target="_blank" rel="noreferrer">
          <svg className="hover" xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="-100.7682 -167.947 873.3244 1007.682">
            <g fill="#100f0d">
              <path className="fill" d="M335.895 0c-91.224 0-102.663.387-138.49 2.021-35.752 1.631-60.169 7.31-81.535 15.612-22.088 8.584-40.82 20.07-59.493 38.743-18.674 18.673-30.16 37.407-38.743 59.495C9.33 137.236 3.653 161.653 2.02 197.405.386 233.232 0 244.671 0 335.895c0 91.222.386 102.661 2.02 138.488 1.633 35.752 7.31 60.169 15.614 81.534 8.584 22.088 20.07 40.82 38.743 59.495 18.674 18.673 37.405 30.159 59.493 38.743 21.366 8.302 45.783 13.98 81.535 15.612 35.827 1.634 47.266 2.021 138.49 2.021 91.222 0 102.661-.387 138.488-2.021 35.752-1.631 60.169-7.31 81.534-15.612 22.088-8.584 40.82-20.07 59.495-38.743 18.673-18.675 30.159-37.407 38.743-59.495 8.302-21.365 13.981-45.782 15.612-81.534 1.634-35.827 2.021-47.266 2.021-138.488 0-91.224-.387-102.663-2.021-138.49-1.631-35.752-7.31-60.169-15.612-81.534-8.584-22.088-20.07-40.822-38.743-59.495-18.675-18.673-37.407-30.159-59.495-38.743-21.365-8.302-45.782-13.981-81.534-15.612C438.556.387 427.117 0 335.895 0zm0 60.521c89.686 0 100.31.343 135.729 1.959 32.75 1.493 50.535 6.965 62.37 11.565 15.68 6.094 26.869 13.372 38.622 25.126 11.755 11.754 19.033 22.944 25.127 38.622 4.6 11.836 10.072 29.622 11.565 62.371 1.616 35.419 1.959 46.043 1.959 135.73 0 89.687-.343 100.311-1.959 135.73-1.493 32.75-6.965 50.535-11.565 62.37-6.094 15.68-13.372 26.869-25.127 38.622-11.753 11.755-22.943 19.033-38.621 25.127-11.836 4.6-29.622 10.072-62.371 11.565-35.413 1.616-46.036 1.959-135.73 1.959-89.694 0-100.315-.343-135.73-1.96-32.75-1.492-50.535-6.964-62.37-11.564-15.68-6.094-26.869-13.372-38.622-25.127-11.754-11.753-19.033-22.943-25.127-38.621-4.6-11.836-10.071-29.622-11.565-62.371-1.616-35.419-1.959-46.043-1.959-135.73 0-89.687.343-100.311 1.959-135.73 1.494-32.75 6.965-50.535 11.565-62.37 6.094-15.68 13.373-26.869 25.126-38.622 11.754-11.755 22.944-19.033 38.622-25.127 11.836-4.6 29.622-10.072 62.371-11.565 35.419-1.616 46.043-1.959 135.73-1.959" />
              <path className="fill" d="M335.895 447.859c-61.838 0-111.966-50.128-111.966-111.964 0-61.838 50.128-111.966 111.966-111.966 61.836 0 111.964 50.128 111.964 111.966 0 61.836-50.128 111.964-111.964 111.964zm0-284.451c-95.263 0-172.487 77.224-172.487 172.487 0 95.261 77.224 172.485 172.487 172.485 95.261 0 172.485-77.224 172.485-172.485 0-95.263-77.224-172.487-172.485-172.487m219.608-6.815c0 22.262-18.047 40.307-40.308 40.307-22.26 0-40.307-18.045-40.307-40.307 0-22.261 18.047-40.308 40.307-40.308 22.261 0 40.308 18.047 40.308 40.308" />
            </g>
          </svg>
        </a>
        <br></br>
        <a href="https://www.linkedin.com/in/vermakaustubh28/" target="_blank" rel="noreferrer">
          <svg className="hover" xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="-11.493675 -16.3118 99.61185 97.8708">
            <path className="fill" d="M72.865 61.1094a1.2 1.2 0 001.21-1.269c0-.9-.543-1.33-1.657-1.33h-1.8v4.712h.677v-2.054h.832l.019.025 1.291 2.029h.724l-1.389-2.1zm-.783-.472h-.785v-1.593h.995c.514 0 1.1.084 1.1.757 0 .774-.593.836-1.314.836m-16.873-5.433h-9.6v-15.034c0-3.585-.064-8.2-4.993-8.2-5 0-5.765 3.906-5.765 7.939v15.294h-9.6v-30.916h9.216v4.225h.129a10.1 10.1 0 019.093-4.994c9.73 0 11.524 6.4 11.524 14.726zm-40.79-35.143a5.571 5.571 0 115.57-5.572 5.571 5.571 0 01-5.57 5.572m4.8 35.143h-9.61v-30.917h9.61zm40.776-55.2H4.781A4.728 4.728 0 000 4.6744v55.439a4.731 4.731 0 004.781 4.675h55.21a4.741 4.741 0 004.8-4.675V4.6704a4.738 4.738 0 00-4.8-4.67" /><path d="M72.164 56.4114a4.418 4.418 0 10.085 0h-.085m0 8.33a3.874 3.874 0 113.809-3.938v.065a3.791 3.791 0 01-3.708 3.871h-.1" />
          </svg>
        </a>
        {/* <br></br>
        <a href="">
          <svg className="hover" xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="-35.20005 -41.33325 305.0671 247.9995">
            <path className="fill" d="M229.763 25.817c-2.699-10.162-10.65-18.165-20.747-20.881C190.716 0 117.333 0 117.333 0S43.951 0 25.651 4.936C15.554 7.652 7.602 15.655 4.904 25.817 0 44.237 0 82.667 0 82.667s0 38.43 4.904 56.85c2.698 10.162 10.65 18.164 20.747 20.881 18.3 4.935 91.682 4.935 91.682 4.935s73.383 0 91.683-4.935c10.097-2.717 18.048-10.72 20.747-20.88 4.904-18.422 4.904-56.851 4.904-56.851s0-38.43-4.904-56.85" fill="#282828" />
            <path fill="black" d="M93.333 117.558l61.334-34.89-61.334-34.893z" />
          </svg>
        </a> */}
        <br></br>
        <a href="https://twitter.com/KaustubhVerma14" target="_blank" rel="noreferrer">
          <svg className="hover" xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="-44.7006 -60.54775 387.4052 363.2865">
            <path className="fill" fill="#1da1f2" d="M93.719 242.19c112.46 0 173.96-93.168 173.96-173.96 0-2.646-.054-5.28-.173-7.903a124.338 124.338 0 0030.498-31.66c-10.955 4.87-22.744 8.148-35.11 9.626 12.622-7.57 22.313-19.543 26.885-33.817a122.62 122.62 0 01-38.824 14.841C239.798 7.433 223.915 0 206.326 0c-33.764 0-61.144 27.381-61.144 61.132 0 4.798.537 9.465 1.586 13.941-50.815-2.557-95.874-26.886-126.03-63.88a60.977 60.977 0 00-8.279 30.73c0 21.212 10.794 39.938 27.208 50.893a60.685 60.685 0 01-27.69-7.647c-.009.257-.009.507-.009.781 0 29.61 21.075 54.332 49.051 59.934a61.218 61.218 0 01-16.122 2.152 60.84 60.84 0 01-11.491-1.103c7.784 24.293 30.355 41.971 57.115 42.465-20.926 16.402-47.287 26.171-75.937 26.171-4.929 0-9.798-.28-14.584-.846 27.059 17.344 59.189 27.464 93.722 27.464" />
          </svg>
        </a>
        <br></br>
        <a href="https://github.com/mekaustubh28" target="_blank" rel="noreferrer">
          <svg className="hover" height="40" width="40" viewBox="-74.4 -120.90175 644.8 725.4105">
            <path className="fill" fill="#1da1f2" d="M165.9 389.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2 .6-2-1.3-4.3-4.3-5.2-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 0C106.1 0 0 105.3 0 244c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5 21.3 0 42.8 2.9 62.8 8.5 0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 449.8 496 354.9 496 244 496 105.3 383.5 0 244.8 0zM97.2 344.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
          </svg>
        </a>
      </div>
      <div className="progress hover">
        <div className="complete"></div>
      </div>
    </div>
  )
}





























