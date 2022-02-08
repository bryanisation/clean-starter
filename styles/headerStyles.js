import styled from 'styled-components'
import { Container } from './commonStyles'


export const HeaderContainer = styled.header`
  position: fixed;
  top:0;
  left:0;
  right:0;
  z-index: 999;
  height: 0;
  box-shadow: 0 0 30px 0 rgb(0 0 0 / 10%), 0 20px 15px -10px rgb(0 0 0 / 30%);
  background: #000c39;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    height: 10vh; 
    left:0;
    width: 80%;
    background: whitesmoke;
    z-index:-1;
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    height: 10vh;
    right:0;
    width: 20%;
    background: salmon;
    z-index:-1;
  }
`
export const HeaderWrapper = styled(Container)`
  width: 100%;
  display: flex;
  align-items: center;
  height: 10vh;
  color: #000c39;
  justify-content: space-between;
`
export const Logo = styled.div`
  a{ 
    span{ 
      margin-left: 2px
    }
  }
  padding-right:5px;
  padding-bottom: .5rem;
`
export const Hamburg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
  @media (min-width: 960px) {
    margin-right: 20px; 
  }
  @media (min-width: 1024px) {
    font-size: 3.2vw;
  }

`
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Ul = styled.ul`
  display: none;
  position: relative;

  left: 0;
  @media (min-width: 960px) {
    display: flex;
    li {
      list-style: none;
      margin: 0 10px;
      a {
        text-decoration: none;
        position: relative;
        font-size: 1.5vw;
        font-weight: 500;
        letter-spacing: -.1vw;
        color: #000c39;
        white-space: nowrap;
       &:after {
         content: '';
         z-index: -1;
         width: 0;
         margin-top: .35rem;
         background: #000c39;
         position: absolute;
         bottom: -.25rem;
         left: -0.35rem;
         /*  transform: translateY(-50%); */
         transition: all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
       }
    }
  }
`
export const Contact = styled.div`
  display: none;
  /* background: pink; */
  align-items: center;
  justify-content:center;
  @media (min-width: 768px) {
    /* margin-right:  3.5rem; */
    flex: 1;
    display: flex;
    /* padding-right: 5.5rem */
  }
  a {
    color: #000c39;
    padding-bottom: .5rem;
    white-space: nowrap;
    @media (min-width: 768px) {
      border-bottom: 2px solid #000c39;
    }
  }
`
 export const HamburgerMenu = styled.div`
  height: 80px;
  width: 80px;
  /* position: fixed; */
  /* top: 40px; */
  /* transform: translateY(-50%); */
  /* right: 20px; */
  border-radius: 5%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  transition: 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
  cursor: pointer;
  @media (min-width: 375px) {
    /* top: calc(40px + 0.15vh) */
  }
  @media (min-width: 640px) {
    /* top: calc(52px + 0.15vh) */
  }
  span {
    width: 20px;
    height: 3px;
    margin: 2.5px 0;
    background: #000c39;
    display: block;
    border-radius: 15%;
    transition: width 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
    &:nth-child(2) {
      width: 14px;
    }
    @media (min-width: 640px) {
      width: 24px;
      height: 4px;
      margin: 3px 0;
    }
  }
  &:hover {
    background: darken($color: $white, $amount: 12);
    span:nth-child(2) {
    width: 24px;
  }
  span:nth-child(1) {
      width: 18px;
    }
  }
  @media (min-width: 960px) {
    display: none; 
  }
}
`
export const MenBg = styled.div`
  background-color: #ff0062;
  border-radius: 100%;
  height: 200vw;
  pointer-events: none;
  position: fixed;
  right: -50%;
  top: -50%;
  transform: scale(0);
  transform-origin: top right;
  transition: transform .6s;
  width: 200vw;
`
export const Navigation = styled.div`
  padding: 1vw 5vw;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;
  max-height: 90vh;
  max-width: 1200px;
  pointer-events: none;
  position: relative;
  width: 100%;
  z-index: -1;
background: salmon;
`
