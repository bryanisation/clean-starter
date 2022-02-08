import styled from 'styled-components'
// import { motion } from 'framer-motion' 

import {Container} from './commonStyles'

export const BrandFooter = styled.footer`
  width: 100vw;
  background: #000c39;
  color: #fff;
  padding: 50px 0;
  padding-bottom: 35px;
  font-family: Helvetica, Arial;
  position: relative;
  z-index: 100;
  a {
   &:after {
      content: '';
      marging-top: .45rem;
      height: 8px;
      width: 0;
      background: white;
      position: absolute;
      bottom: 0;
      left: 0;
      transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
      }
      &:hover {
        &:after {
          width: 100%
        }
    }
  }
`
export const InnerFooter = styled(Container)` 
  @media (min-width: 1024px) {
    margin: 0 auto;
    padding: 1.875vw 0;
  }
`
export const MailUs = styled.div`
  a.brand-mail{
    display: inline-block;
    font-size: 8.2vw;
    font-weight: 700;
    letter-spacing: -.28vw;
    margin-bottom: 10px;
    text-decoration: none;
    padding-bottom: 5px;
   @media (min-width: 640px) {
     font-size: 7.5vw;
    }
    @media (min-width: 768px) {
     font-size: 7.8vw;
    }
   @media (min-width: 1024px) {
      font-size: 6.8vw;
      letter-spacing: -.41vw;
    }
    @media (min-width: 1280px) {
      font-size: calc(5rem + 1.5vw);
      letter-spacing: -.41vw;
    }
  }
`
export const Phone = styled.div`
    border-top: 1px solid #223163;
    marging-top: 1.875rem;
    padding-top: 1.875rem;
    a.brand-phone{
      display: inline-block;
      font-size: calc(1.5rem + 1.4vw);
      font-weight: 700;
      letter-spacing: -.15vw;
      line-height: 1;
      padding: 5px 0;
      text-decoration: none;
      postion: relative;
      transition: width .5s cubic-bezier(.18,.89,.32,1.28);
      @media (min-width: 640px) {
         font-size: 5.85vw;
      }
      @media (min-width: 768px) {
         font-size: 4.75vw;
      }
      @media (min-width: 1024px) {
        font-size: calc(1.65rem + 1.5vw);
      }
      @media (min-width: 1280px) {
        font-size: calc(1.5rem + 1.1vw);
      }

    }
    @media (min-width: 640px) {
      font-size: calc(1.6785rem + 1.5vw);
      max-width: 340px;
    }
`
export const FooterNav = styled.nav`
    font-family: Helvetica,Arial,sans-serif;
    font-size: 1.1875rem;
    margin-bottom: 24px;
   @media (min-width: 640px) {
     font-size: 3.5vw;
  }
 @media (min-width: 768px) {
     font-size: 2.78vw;
  }
 @media (min-width: 1024px) {
     font-size: 1.675vw;
     max-width: 340px;
  }
 @media (min-width: 1280px) {
     font-size: 1.5vw;
     max-width: 340px;
  }
`
export const NavList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  li.list-item:not(:last-child){
    border-right: 1px solid #7c8693;
    margin-right: 17px;
    padding-right: 17px;
}
`
export const UList = styled.ul`
    align-items: center;
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    border-bottom: 1px solid #223163;
    margin-bottom: 1.875rem;
    padding-bottom: 1.875rem;
 @media (min-width: 640px) {
      /* font-size: calc(.875rem + .01vw); */
      max-width: 340px;
  }
`
export const SocialItem = styled.li`
  &:not(:last-child) {
    margin-right: 1rem; 
  }
  a.social-link{
    transition: all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
    display: block;
    position: relative;
    width: 44px; 
    &:after {
     display: none
    }
    &:hover {
    transform: scale(1.2)
  }

}
@media (min-width: 640px) {
  max-width: 340px;
}
`
export const Copy = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  p{
    color: #7c8693;
    font-size: calc(.875rem + 0.1vw);
    @media (min-width: 640px) {
      font-size: calc(.875rem + .01vw);
      max-width: 340px;
  }
}
`
export const Terms = styled(FooterNav)`
  margin-bottom: 0;
`
export const InnerTerms = styled(NavList)`
  margin-top: 0.875rem;
  li {
    a{
    color: #fff;
    font-size: .875rem;
    font-weight: 700;
    padding: 5px 0;
    text-decoration: none;
    padding: 3px 0;
   @media (min-width: 640px) {
        font-size: calc(.875rem + .01vw)
    }
}
  }
}
`
