import styled, { css } from 'styled-components'
import { Container, Header2 } from './commonStyles'
import { Underline } from '../components/utils'


import bg1 from '../public/bg-1.svg'
// HomeBanner
export const Banner = styled.div`
  position: relative;
  /* padding: 4vh 0; */
  display: flex;
  /* background: teal; */
  left: 0;
  /* background: salmon; */
  min-height: 100vh;
  width: 100vw;
  /* @media (min-width: 1280px) { */
  /*   padding: 18vh 0; */
  /* } */
  /* @media (min-width: 1440px) { */
  /*   padding: 16vh 0; */
  /* } */
  /* @media (min-width: 1536px) { */
  /*   padding: 15vh 0; */
  /* } */

 `
export const BannerTitle = styled.div`
  max-width: calc(100% - 5vh);
  position: absolute;
  left: 0;
  z-index: 2;
  top: 50%;
  transform: translateY(-50%);
`
export const Headline = styled.span`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
   
  }
  p{
    position: relative;
    max-width: calc(320px - 5vw);
    font-size: calc(.875rem + .2vh);
    padding: 1rem 0;
    margin-left: 4vw;
    border-top: 2px solid #000c39;
    border-bottom: 2px solid #000c39;
    @media (min-width: 768px) {
      padding: 2rem 0;
      font-size: calc(.875rem + .2vh);
    }
    @media (min-width: 1024px) {
      font-size: calc(.875rem + .675vh);
      padding: calc(4vh + .125vw) 0;
      margin-left: 8vw;
    }
    &: before {
      content: '';
      position: absolute;
      height: 4px;
      top: 0;
      width: 70%;
      background: #000c39;
    }
    &: after {
      content: '';
      position: absolute;
      height: 4px;
      bottom: 0;
      left: 0;
      width: 70%;
      background: #000c39;
    }
  }
 `
export const Scroll = styled.div`
  height:8rem;
  width: 8rem;
  background: #f5f5f5;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  border-radius: 100%;
  left: 50%;
  transform: translateX(-50%);
  p{
    white-space: nowrap;
  }
 `
// Our Work
export const Grid = styled(Container)`
  /* padding: 1.2vh 0; */
  display: grid;
  position: relative;
  z-index: 2;
  grid-template-columns: repeat(1, minmax(280px, 1fr));
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  &: first-of-type {
    /* min-width 90vh; */
  }
  &: not(:first-of-type) {
    /* margin-top: 20vh; */
  }
  @media (min-width: 768px){
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    display: relative;
    grid-template-columns: ${props => props.two ? 'repeat(2, minmax(1px, 1fr))' : 'repeat(3, minmax(250px, 1fr))'};
    /* height: 80vh; */
  }
`
export const GridItem = styled.div`
  display: flex;
  min-height: 100%;
  margin: 20px 0;
  max-width: 100%;
  flex-direction: column;
  /* max-width: calc(100% - 1vh); */
  &: first-of-type {
    /* min-width: 100vh; */
    @media (min-width: 768px) {
      // padding-top: 10vh;
      margin: 0;
      width: auto;
    }
  }
`
export const GridHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
 `
export const SpanUnderline = styled.span`
  display: inline-block;
  position: relative;
  bottom: 0;
  svg{
    position: absolute;
    bottom: -60px;
    margin-top: 4px;
    left: -10rem;
    z-index: -1;
    width: 100vw;
  
  }
  span{
    margin-bottom: 4px;
  }
  &: after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 60%;
    height: 4px;
    right: 0;
    background: url(Underline);  
  }
  
`
export const GridSubHeader = styled.p`
  max-width: 480px;
  display: inline-block;
  position: relative;
  text-align: center;
  padding-bottom: 15px;
  border-bottom: 2px solid #24242a;
  @media (min-width: 768px) {
    border: none;
  }
  &: after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    background: #000c39;
    width: 60%;
    height: 3px;
    @media (min-width: 768px) {
      display: none;
    }
  }
`
export const Figure = styled.figure`
    /* position: relative;  */
    height: 50vh;
    width: 100%;
    border-radius:1.25rem;
    /* left: 0;  */
    /* @media (min-width: 960px;) { */
    /*   height: 80vh; */
    /*   left: -3.5rem; */
    /* } */
    /* @media (min-width: 1024px;) { */
    /*   left: -12%; */
    /* } */
    /* @media (min-width: 1280px;) { */
    /*      width: 77vw; */
    /* /* left: -3.5rem;  */ */
    /* } */
    .wrapper {
      /* position: relative; */
      height: 100%;
      max-width: 375px;
      @media (min-width: 960px) {
        height: 80vh;
        max-width: calc(100% - 35vw);
      }
      @media (min-width: 1280px;) {
        /* height: 90vh; */
        max-width: calc(100% - 38vw);
      }
      img {
        border-radius: 5%;       
        object-fill: cover;
        box-shadow: 0 0 30px 0 rgb(0 0 0 / 10%), 0 20px 15px -10px rgb(0 0 0 / 30%);
      }
    }
    &: before {
      content: '';
      position: absolute;
      width: 10rem;
      height: 10rem;
      border-radius: 100%;
      z-index: -4;
      top: -15%;
      right: -60%;
      transform: translate(-50%, -5%);
      background: ${props => props.salmon ? '#000c39' : ''}; 
    }
 `
export const GridArticle = styled.a`
  display: flex;
  flex-direction: column;
  position: relative;
  &:first-of-type {
    margin-bottom: -40px;
  }
  article {
    background: #f5f5f5;
    &:last-of-type {
      /* margin-bottom: 30px */
    }
    padding: 2rem 2rem;
    ${props => props.float ? css`
      position: relative;
      transform: translateX(-50%);
      bottom: 8vh;
      left: 50%;
      width: 75%;
    ` : css`
      width: 100%;
    `
  }
    z-index: 2;
    color: #000c29;
    border-radius: 5%;
    box-shadow: 0 0 30px 0 rgb(0 0 0 / 10%), 0 20px 15px -10px rgb(0 0 0 / 30%);
    transition: box-shadow .3s ease-in; 
    &: before {
      content: '';
      position: absolute;
      width: 10rem;
      height: 10rem;
      border-radius: 100%;
      z-index: -4;
      top: -50%;
      right: -50%;
      transform: translate(-50%, 30%);
      background: ${props => props.salmon ? 'salmon' : ''}; 
    }
    p {
      border-top: 1px solid #000c39;
      font-size: calc(1.1875rem + .15vw);
      margin-top: 6px;
      padding-top: 12px;
      position: relative;
      opacity: .85;
      color: #000c39; 
      border-bottom: 1px solid #000c39;
      padding-bottom: 12px;
      &: before {
        content: '';
        width: 30%;
        height: 3px;
        background: #000c28;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
      }
       &: after {
        content: '';
        width: 30%;
        height: 3px;
        background: #000c28;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  } 
`
export const Cta = styled.div`
  font-weight: 700;
  letter-spacing: -1.11px;
  line-height: 1.1;
  position: absolute;
  bottom: -4%;
  right: 0;
  font-family: Monteserat,Arial,sans-serif; 
  color: #000c39;
  a{
    background: transparent;
    border: none;
    color: #333d5e;
    cursor: pointer;
    font-family: Helvetica,Arial,sans-serif;
    align-items: center;
    background: #000c36;
    box-shadow: 0 0 30px 0 rgb(0 0 0 / 10%), 0 20px 15px -10px rgb(0 0 0 / 30%);
    color: #fff;
    display: inline-flex;
    font-size: 1.875rem;
    font-weight: 700;
    padding: 35px 26px;
    position: relative;
    right: -20rem;
    padding-right: 30rem; 
    transition: box-shadow .3s,transform .2s ease-out;
  }
`
//Expertise
export const ExpertiseWrapper = styled.div`
  display: block;
  position: relative;
  /* max-width: calc(100% - 15vw); */
`
export const UtilCard = styled.div`

`
export const CardMain = styled.div`
  background: #fff;
  box-shadow: 0 0 30px 0 rgb(0 0 0 / 10%), 0 20px 15px -10px rgb(0 0 0 / 30%);
  /* padding: 50px 30px; */
  position: relative;
  text-align: left;
  border-top: 2px solid #ff0062;
  border-bottom: 2px solid #ff0062;
  transition: box-shadow .3s;
  /* width: calc(100% - 1vh); */
`
export const CardArticle = styled.article`
  align-items: center; 
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const CardHeader = styled.div`
  color: #000c36;
  letter-spacing: -.15vw;
  line-height: 1.2;
  font-weight: 700;
  border-bottom: 1px solid #000c36;
  margin-bottom: 25px;
  padding-bottom: 25px;
  position: relative;
  @media(min-width: 768px) {
    font-size: clamp(2.45rem, calc(2.45rem + 1vw), 2.875rem)
  }
  &: after {
    background: #000c36;
    bottom: 0;
    content: "";
    height: 6px;
    left: 0;
    position: absolute;
    width: 80%;
  }

`
export const CardCopy = styled.div`
color: #333d5e;
    // font-family: 'Helvetica Neue',serif;
    font-size: calc(1.35rem + .15vw);
    margin-bottom: 40px;
`
export const CardCta = styled.span`
  margin-right: -40px;
  transform: translateX(-40px);
  background: transparent;
  border: none;
  color: #333d5e;
  cursor: pointer;
  background: #000c36;
  box-shadow: 0 0 30px 0 rgb(0 0 0 / 10%), 0 20px 15px -10px rgb(0 0 0 / 30%);
  color: #fff;  
  font-size: clamp(1.125rem, calc(1.125rem + 1.375vw), 1.52rem);
  font-weight: 700;
  margin: 0;
  padding: 23px 25px;
  transition: box-shadow .3s,transform .2s ease-out;
`
//Brand CTA styles 
export const CTAWrapper = styled(Container)`
  position: relative;
  /* padding-top: 10vh; */
  min-height: 40vh;
`
export const CTABanner = styled.div`
  font-weight: 700;
  letter-spacing: -.375px;
  line-height: 1.4;
  margin-top: 0;
  position: absolute;
  right: -10%;
    z-index: 1;
  bottom: 15%;
  max-width: calc(100% - 5vh);
  color: #000c36;
  a{
    background: transparent;
    border: none;
    color: #333d5e;
    cursor: pointer;
    align-items: center;
    background: #000c36;
    box-shadow: 0 0 30px 0 rgb(0 0 0 / 10%), 0 20px 15px -10px rgb(0 0 0 / 30%);
    color: #fff;
    display: inline-flex;
    font-size: calc(1.125rem + .375vw);
    font-weight: 700;
    margin: 0;
    padding: 28px 35px;
    transition: box-shadow .3s,transform .2s ease-out;
  }
`
export const BannerImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  pointer-events: none;
  width: 100%;
  position: absolute;
  left: 0;
`
export const BannerFig = styled(Figure)`
  img{
    min-height: 20vh;
    left:0;
  }
`
