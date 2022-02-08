import Image from 'next/image'
import { Figure, Grid, GridArticle, GridHeader, GridItem, ExpertiseWrapper, CardCopy, CardHeader, CardCta } from '../../styles/homeStyles'; 
import { Container, Header2, Header5, Header6, P, SectionHeader, Span, Tagline } from '../../styles/commonStyles';
import { Article, Card, SectionsHeader, SectionTitle, SectionWrapper } from '../utils';
import { Li, SVG } from '../../styles/layoutStyles';
import Link from 'next/link';

const data = [
  {
    href: 'blog/our-experiences',
    name: 'Our Expertise', 
    tag: 'We work in partnership with our clients to produce digital products and services that create a lasting positive impact.',
    header: 'Creative & Technical Builds',
    copy: 'Delivering award-winning digital products, apps and websites to support your journey to market leadership.',
    cta: 'Partner with Us'
  },
  {
    href: 'blog/our-experiences',
    name:'', 
    tag:'',
    header:'Sales Growth & Traffic Generation', 
    copy:'We work in partnership with in-house marketing teams to exceed digital objectives and grow your business.', 
    cta:'More on how we could help your business grow'
  },
  { 
    href: 'blog/our-experiences',
    name:'', 
    tag:'', 
    header:'Digital Strategy & Service ', 
    copy:'Our experienced team of strategists take you on a collaborative journey to define a digital roadmap that drives commercial growth.', 
    cta:'Explore our workshops and process'}
]

const Expertise = () => (
  <SectionWrapper >
    <Container> 
      <SectionTitle 
        text={'Experts'} 
        sectionHeader={'We are EXPERTS'}
        info={'We work in partnership with our clients to produce digital products and services that create a lasting positive impact.'}  
      />  
      <Grid>
        {data && data.map((el) => (
          <ExpertiseCard href={el.href} header={el.header} copy={el.copy} cta={el.cta}/>
        ))}
      </Grid>
    </Container>
</SectionWrapper>
)

const ExpertiseCard = ({href, header, copy, cta}) => (
  <GridItem>
    <Link href={href}>
      <a className='inline-block w-full'>
        <Article header={header} copy={copy} cta={cta}/>
      </a>
   </Link>
  </GridItem> 
)

export default Expertise;
