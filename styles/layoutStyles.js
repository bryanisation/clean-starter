import styled from 'styled-components'
// import { Container } from './commonStyles'

export const Body = styled.div`
  background: orange;
  height: 100vh;
  width: 100vw;
`
export const MainWrapper = styled.main`
  overflow: hidden;
  color: #000c39;
  display: grid;
  grid-row-gap: 5vh;
  grid-template-rows: repeat(1, minmax(320px, 1fr));
  background: #f3f3f3; 
`
export const Section = styled.section`
   height: 100%; 
   width: ${props => props.fluid ? '100vw' : ''};
   position: relative;
   padding-bottom: 2rem;
   /* z-index: 2; */
   &:not(:first-child) {
     padding: 60px 0;
   }
   #first {
      position: absolute;
      width: 80%;
      height: 100%;
      background: ${props => props.reverse ? 'salmon' : 'whitesmoke'};
      left: 0;
      top: 0;
      z-index: 0;
    }
   #second {
      position: absolute;
      width: 20%;
      height: 100%;
      background: ${props => props.reverse ? 'whitesmoke' : 'salmon'};
      right: 0;
      top: 0;
      z-index: 0;
   }
   &:not(:first-child) {
     padding-top: -20px;
   }
   .inner-section {
     margin: 0 auto;
    }
  }
  `
export const Li = styled.li`
  &:not(:first-child) {
    padding: 0 .5rem ;

  }
  &:last-child {
    border: none;
  }
`
export const SVG = styled.svg`
  visibility: hidden !important; 
  @media (min-width: 640px){
      visibility: visible !important;
     font-family: Helvetica,Arial,sans-serif;
     font-size: 8.2vw;
     font-weight: 600;
     height: 90vw;
     left: 50%;
     letter-spacing: -.1vw;
     pointer-events: none;
     position: absolute;
     text-align: center;
     top: 50%;
     transform: translate(-50%,-50%);
     width: 100%;
     .svg-text{
       fill: none;
       stroke: rgba(0,12,54,.07);
       stroke-linejoin: round;
       stroke-width: 1.1px;
     }
  }
`
  export const Container = styled.div`
  margin: 0 auto;
  padding: 20px 0;
  @media (min-width: 425px) {
    max-width: calc(100vw - 10vw)
  }
  @media (min-width: 768px) {
    max-width: calc(640 + 5vw)
  }
  @media (min-width: 1024px) {
    max-width: calc(920px + 2vw);
  }
  @media (min-width: 1280px) {
    max-width: calc(1024px + 15vw)
  }
  @media (min-width: 1440px) {
    max-width: calc(1280px + 5vw)
  }
  @media (min-width: 1536px) {
    max-width: calc(1356px + 5vw) 
  }
  @media (min-width: 2300px) {
    max-width: calc(1536px + 5vw) 
  }
`
export const Span = styled.span`
  color: ${props => props.green ? 'green': '#ff0062'};
  font-family: ${props => props.serif ? 'serif' : 'inherit'}
`
//font sizes
export const Header1 = styled.div`
  font-size: 22vw;
  font-weight: 700;
  letter-spacing: -1.62vw;
  line-height: .875; 
 @media (min-width: 1280px) {
    /* font-size: 20vw; */
    line-height: 0.75
  }
`
export const Header2 = styled.div`
  font-size: 6.8vw;
  font-weight: 700;
  letter-spacing: -.72vw;
  line-height: 1;
  margin-top: -40px;
  text-align: ${ props => props.center ? 'center' : null}; 
`
export const Header3 = styled.div``
export const Header4 = styled.div``
export const Header5 = styled.div``
export const Header6 = styled.div`
  font-size: 1.1875rem;
  font-weight: 700;
  letter-spacing: -1.11px;
  line-height: 1.4;
  margin-top: 0;
`
export const GridItemWrapper = styled.div``
//card
export const GridHeader = styled.div``
export const Card = styled.div``
export const GridImage = styled.a``
export const FlexItemWrapper = styled.div`
  width: auto;
  margin: 0;
  display: flex;
  /* flex-direction: column; */
  /* max-width: calc(382px - 1vw); */
`
