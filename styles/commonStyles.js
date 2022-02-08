
import styled from 'styled-components'


//Containers
export const MainWrapper = styled.main`
  overflow: hidden;
  margin-top: 10vh;
  color: #000c39;
  background: #f3f3f3;
`
export const Container = styled.div`
  padding: 0 calc(0.875rem + 0.15vh); 
  @media (min-width: 425px) {
    max-width: calc(375px + 20vw);
    margin: 0 auto;
  }
  @media (min-width: 640px) {
    max-width: calc(425px + 30vw)
  }
  @media (min-width: 768px) {
    max-width: calc(640px + 15vw)
  }
  @media (min-width: 1024px) {
    max-width: calc(920px + .875vw);
  }
  @media (min-width: 1280px) {
    max-width: calc(1024px + 1.5vw)
  }
  @media (min-width: 1440px) {
    max-width: calc(1156px + 1.875vw)
  }
  @media (min-width: 1536px) {
    max-width: calc(1356px + 1vw) 
  }
  @media (min-width: 2300px) {
    max-width: calc(1536px + 0.5vw) 
  }
`
//paragraphs
export const P = styled.p`
  position: relative;  
  font-size: clamp(1.1rem, calc(1rem + 2vw), 1.35rem);
  @media(min-width: 768px) {
    text-align: center;
  }
`
//Headers
export const Header1 = styled.div`
  font-size: calc(4.5rem + .5vw); 
  font-weight: 800;
  letter-spacing: -1.875vw;
  line-height: 0.875;
  @media (min-width: 360px) {
    font-size: calc(5rem + .875vw); 
    letter-spacing: -.35vw;
    flex: 4;
  }
  @media (min-width: 400px) {
    font-size:  calc(5.5rem + .875vw); 
    letter-spacing: -.35vw;
    flex: 4;
  }
 
  @media (min-width: 425px) {
    font-size: calc(6rem + .5vw); 
    letter-spacing: -.35vw;
    flex: 4;
  }
  @media (min-width: 540px) {
    font-size: calc(7.8rem + .05vw); 
    letter-spacing: -.35vw;
    flex: 4;
  }
  @media (min-width: 640px) {
    font-size: calc(8.8rem + .5vw);
    letter-spacing: -.35vw;
    flex: 4;
  }
  @media (min-width: 768px) {
    font-size: calc(12rem + 1vw);
    letter-spacing: -1.675vw;
    line-height: 0.875; 
  }
 
  @media (min-width: 820px) {
    font-size: calc(12rem + 2vw);
    font-weight: 800;
    letter-spacing: -1.675vw;
  }
  @media (min-width: 910px) {
    font-size: calc(13.5rem + 2vw);
    font-weight: 800;
    letter-spacing: -1.675vw;
    line-height: 0.875; 
  }
  @media (min-width: 1024px) {
    font-size: calc(15rem + 2vw);
    font-weight: 800;
    letter-spacing: -1.771vw;
    line-height: 0.875; 
  }
  @media (min-width: 1280px) {
    font-size: calc(20rem + 1vw);
    flex: 4;
    letter-spacing:-1.8vw;
  }
  @media (min-width: 1440px) {
    font-size: calc(22.5rem + 1vw);
    flex: 4;
    letter-spacing:-1.8vw;
  }
  @media (min-width: 1536px) {
    font-size: calc(23.5rem + 1vw);
    flex: 4;
    letter-spacing:-1.8vw;
  }
`
export const Header2 = styled.div`
  font-size: clamp(2.6rem, calc(2.875rem + 1.5vw), 5.5rem);
  font-weight: 700;
  letter-spacing: -.25vw;
  line-height: 1;
  text-align: ${p => p.center ? 'center' : ''};
  // @media (min-width: 768px) {
  //   font-size: calc(3rem + .5vw);
  // }
  // @media (min-width: 1024px) {
  //   font-size: clamp(calc(3rem + .5vw);
  // }
`
export const Header3 = styled.div``
export const Header4 = styled.div`
  font-weight: 700;
  font-size: 8vw;
  letter-spacing: -.875vw;
  @media (min-width: 425px) {
    font-size: calc(2.2rem + .05vw);
    letter-spacing: -.35vw;
    flex: 4;
  }
  @media (min-width: 640px) {
    /* font-size: calc(2.2rem + .05vw);  */
    letter-spacing: -.35vw;
    flex: 4;
  }
  @media (min-width: 768px) {
    font-size: calc(3.5vh + .675vw);
    letter-spacing: -.35vw;
    flex: 4;
  }
  @media (min-width: 1024px) {
    font-size: 3.2vw;
    /* flex: 4; */
    letter-spacing:-.34vw;
  }
  @media (min-width: 1536px) {
    font-size: 3vw;
    flex: 4;
    letter-spacing:-.34vw;
  }
`
export const Header5 = styled.div`
    font-size: calc(1.3rem + .1875vw);
    letter-spacing: -.1vw;
    font-weight: 600;
    color: #000c39;
    /* @media (min-width: 768px) { */
    /*   font-size: clac(1.35rem + .1875vw); */
    /* } */
    /* @media (min-width: 1024px) { */
    /*   font-size: calc(1.875vw + 0.0875vw); */
    /*   letter-spacing: -.12vw */
    /* } */
    /* @media (min-width: 1280px) { */
    /*   font-size: calc(1.675vw + 0.05vw); */
    /*   letter-spacing: -.10vw */
    /* } */
    /* @media (min-width: 1440px) { */
    /*   font-size: calc(1.5vw + 0.05vw); */
    /*   letter-spacing: -.1vw */
    /* } */
    /* @media (min-width: 1536px) { */
    /*   font-size: calc(1.45vw + 0.05vw); */
    /*   letter-spacing: -.1vw */
    /* } */

`
export const Header6 = styled.div`
  font-size: clamp(1.2rem, calc(1.2rem + .5vw), 1.4rem);
  font-weight: 700;
  letter-spacing: -1.11px;
  line-height: 1.4;
  margin-top: 0;
  padding: 12px 0;
  // max-width: 960px;
  text-align: ${props => props.center ? 'center' : ''}
  @media(min-width: 768px) {
    margin: 0 auto;
    max-width: 640px;
  }
`
export const Tagline = styled.div`
  /* width: 100%; */
`
export const Span = styled.span`
  color: ${props => props.green ? 'green': '#ff0062'};
  font-family: ${props => props.serif ? 'serif' : 'inherit'}
`

//Expertise
export const Flex = styled.div`
  display: flex;
  flex: 4;
  flex-direction: ${props => props.column ? 'column' : null};
  position: relative;
  width: auto;
  margin: 0;
  display: flex;
  max-width: calc(382px - 1vw);
`
export const Card = styled.div``
export const CardImage = styled.a``
