import Image from 'next/image'
import { Header2, Header4, Header6, Span } from '../../styles/commonStyles';
import { Figure, Grid, GridHeader, GridItem, GridSubHeader, GridArticle } from '../../styles/homeStyles';
import {Card, CTA, SectionsHeader, SectionWrapper } from '../utils'

import dallas from '../../public/images/dallas.webp'
import beijing from '../../public/images/beijing.webp'
const OurWork = () => (
  <SectionWrapper>
    <Grid two>
      <GridItem>
        <SectionsHeader header={'Our Work'} subheader={'Take a look at some of our recent PROJECTS.'} />
        <Card title={'Fujitsu Aerodome'}
              src={dallas}
              name={'dallas'}
              subtitle={'Curating easy ways of managing assets and properties.'}
              body={'Empowering Bottomline Technologies to improve their customer experience and drive forward as a disruptive technology leader.'}
              // salmon={'salmon'}
              float={'float'}
          /> 
         
      </GridItem>
      <GridItem>
        <Card title={'The modern SILK road'}
              src={beijing}
              name={'beijing'}
              body={'We work in partnership with in-house marketing teams to exceed digital objectives and grow your business.'}
              subtitle={'Our major goal is to foster a seamless customer experience.'}
              salmon={''}
              figure={'salmon'}
              float={'float'}
          /> 
      </GridItem>
      <CTA>Get to Know US</CTA>
    </Grid>
  </SectionWrapper>
)

export default OurWork;
