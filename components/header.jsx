import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { HeaderContainer, NavHeader, HeaderWrapper, Contact, HamburgerMenu, Ul, MenBg, Hamburg, Logo, Nav } from '../styles/headerStyles'
import { Header4, Header5, Header6, Span } from '../styles/commonStyles';

import dallas from "../public/images/dallas.webp";
import austin from "../public/images/austin.webp";
import newyork from "../public/images/newyork.webp";
import sanfrancisco from "../public/images/sanfrancisco.webp";
import beijing from "../public/images/beijing.webp";
import { LogoHeader } from './utils';


const cities = [
  { name: "Dallas", image: dallas },
  { name: "Austin", image: austin }, 
  { name: "New York", image: newyork },
  { name: "San Francisco", image: sanfrancisco },
  { name: "Beijing", image: beijing }
];

const navLinks = [
  {id:1, name:'About', href:'/about'},
  {id:2, name:'Design', href:'/design'},
  {id:3, name:'Contact', href:'/contact'},
  {id:4, name:'Blog', href:'/blog'},
  {id:5, name:'Why work with Us', href:'/why'}
]

const Header = () => {
  let navBtn = useRef(null)
  let menuBg = useRef(null)

  const [state, setState] = useState({
    initial: null,
    clicked: false,
    menuName: 'Close'
  })

  const handleMenu = () => {
    // disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close"
      });
      console.log(1)
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu"
      });
      console.log(2)
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close"
      });
      console.log(3)
    }
  };
  useEffect(() => {
    //listen for page changes
    console.log(state)
  }, [state])
   
  return (
    <HeaderContainer>
        <HeaderWrapper>
          <Logo>
            <Link href='/'>
              <LogoHeader>  
                goodbrands
              </LogoHeader>
          </Link>
          </Logo>
          <Navigation />
          <Hamburg>
            <Contact>
              <Link href='/contact'>
                <a>
                  <Header5>
                    Let's work together
                  </Header5>
                </a>
            </Link>
            </Contact>
            <HamburgerMenu ref={el => navBtn = el} onClick={handleMenu}>
              {state.clicked ? <Header6>{state.menuName}</Header6> : 
              <>
                <span></span>
                <span></span>
              </>}
            </HamburgerMenu>
          </Hamburg>
        </HeaderWrapper>
      {/* <MenBg ref={el => menuBg = el}/> */}
    </HeaderContainer>
  );
};


const Navigation = (data) => {
  return(
      <Nav>
        <Ul>
          {navLinks.map(({id, name, href}) =>
            <li key={id}>
                <Link href={href}>
                  <a>{name}</a>
                </Link>
            </li>
          )}
        </Ul>
      </Nav>
    
  )
}

const Locations = () => {
  return(
    <CityLocations>
      Locations:
      {cities.map(el => (
        <span key={el.name}>
          {el.name}
        </span>
      ))}
    </CityLocations> 
  )
}



export default Header;
