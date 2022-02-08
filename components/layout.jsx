import { useRef, useState, useEffect } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { Container, MainWrapper } from '../styles/commonStyles'

// import gsap from 'gsap'

const Layout = ({children}) => {
  //Dom nodes
  let header = useRef(null)
  let menuBg = useRef(null)
  let mobile = useRef(null)
  //the menu's state
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: 'Menu',
  })
  //the button's state
  const [disabled, setDisabled] = useState(false)


  //toggle Menu
  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close"
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu"
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close"
      });
    }
  };

  //Determine if out menu button should be disabled
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return(
    <>
      <Header />      
      <MainWrapper>
        {/* <Container> */}
          {children}
        {/* </Container> */}
      </MainWrapper>
      <Footer />
    </>
  )
}

export default Layout;
