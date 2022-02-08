import Image from 'next/image'
import Link from 'next/link'
import { Container, Section, SVG } from '../styles/layoutStyles'
import { Flex, Header2, Header5, Tagline, Span, Header6, P } from '../styles/commonStyles'
import { CardArticle, CardCopy, CardCta, CardHeader, CardMain, Cta, Figure, GridArticle, GridHeader, GridSubHeader, SpanUnderline } from '../styles/homeStyles'

export const LogoHeader = ({children}) => (
  <div className='font-bold text-current tracking-tighter text-3xl sm:text-3xl md:text-5xl lg:text-6xl'>  
    {children}<Span green>.</Span><Span>.</Span>
  </div>
)


export const SectionWrapper = ({children, reverse}) => (
  <Section className='bg-pink' reverse={reverse}>
    <div id='first'></div>
      {children}
    <div id='second'></div>
  </Section>
)

export const FlexWrapper = ({children}) => (
  <Flex>{children}</Flex> 
)

export const SectionsHeader = ({header, subheader}) => (
  <GridHeader>
    <Header2>
      <SpanUnderline><Underline /><span>{header}</span></SpanUnderline>{header && <Span green>.</Span>}
    </Header2>
    <GridSubHeader>
      <Tagline>
        <p className='text-3xl font-bold tracking-tighter py-4'>{subheader}</p>
      </Tagline>
    </GridSubHeader>
  </GridHeader>
)

export const Underline = () => (
  <svg>
    <path fillRule="evenodd" clipRule="evenodd" d="M340.044 85.2682C341.507 85.0006 342.863 84.6363 344.226 84.5446C344.951 84.495 345.79 84.5669 346.391 85.2087C347.251 86.1306 348.041 85.8258 348.917 85.7961C350.655 85.7391 352.398 85.9919 354.131 86.262C354.441 86.3116 354.72 87.0575 355.132 87.6523C354.432 90.75 353.001 91.3572 351.504 91.6819C350.765 91.8405 349.978 91.5654 349.274 91.9198C345.819 93.6496 342.304 93.3447 338.789 93.2977C331.506 93.201 324.222 93.1093 316.938 93.1093C307.386 93.1068 297.83 92.9036 288.283 93.3125C275.714 93.8553 263.156 95.1514 250.588 95.6693C238.508 96.1674 226.503 98.6531 214.452 99.8352C212.075 100.068 209.674 100.078 207.305 99.7088C205.701 99.4635 205.119 96.1352 206.175 93.771C206.526 92.9804 207.208 92.4501 207.773 92.3138C209.143 91.9842 210.537 92.0412 211.914 91.7884C221.176 90.0859 230.435 88.3437 239.695 86.6139C239.821 86.5891 239.944 86.5296 240.07 86.5172C247.961 85.7787 255.853 85.0377 263.744 84.3091C273.393 83.4195 283.042 82.5347 292.691 81.6599C293.317 81.6029 293.959 81.4865 294.574 81.6574C299.709 83.0899 304.843 81.6401 309.976 81.7665C313.108 81.8433 316.247 80.8372 319.371 81.997C319.617 82.0887 319.881 82.215 320.12 82.1382C325.497 80.453 330.894 82.5496 336.278 81.826C337.859 81.6128 339.328 82.1234 340.044 85.2682Z" fill="url(#paint0_linear)"></path>
    <defs><linearGradient id="paint0_linear" x1="205.642" y1="81.4346" x2="331.643" y2="145.907" gradientUnits="userSpaceOnUse"><stop stopColor="#FF0062"></stop><stop offset="1" stopColor="#fa8072"></stop></linearGradient></defs>
  </svg>
)

export const Img = ({ src, fallback, type = "image/webp", alt }) => (
  <picture>
    <Image src={src} alt={alt} />
  </picture>
)

export const CTA = ({children}) => (
 <Cta>
    <Link href='/contact'>
      <a>{children}<Span>.</Span></a>
    </Link> 
  </Cta> 
)

export const Card = ({float, salmon, figure, title, subtitle, body, cta, src}) => (
  <CardArticle >
    <CardMain float={float} salmon={salmon}>
      {src && 
      <Figure salmon={figure}>
        <div className='absolute inset-0 inset-y-7 rounded-lg '>
          <Image src={src} alt={title} layout='fill' />
        </div>    
      </Figure>}
     <Article  header={title} subheader={subtitle} copy={body}/>
    </CardMain>
  </CardArticle>
)

export const Article = ({ crumbLinks, header, subheader, copy, cta}) => (
  <article className='bg-white w-11/12 mx-auto px-8 py-7 relative -bottom-48 rounded-lg tracking-tighter text-left shadow-lg transition-shadow hover:shadow-2xl'>
    <div className='article--wrapper'>
      {crumbLinks && 
      <div className="article--crumbs">
          <ul className='list-style-none flex items-center flex-wrap mb-3'> 
            {crumbLinks.map((crumb) => (
                <Li className='leading-none pr-2 border-gray-500 border-r'>
                  <span className='text-gray-500 text-xs font-semibold'>{crumb}<Span>.</Span></span>
                </Li>
            ))}
          </ul>
      </div>}
      <CardHeader className='article--header text-4xl'>{header}<Span>.</Span></CardHeader>
      {subheader && <div className="article--subheader text-2xl font-semibold pb-3">{subheader}</div>}
      <CardCopy className='article--copy'>{copy}</CardCopy>
      {cta && <CardCta className='article--ctaButton flex items-center'>{cta}<Span>.</Span></CardCta>}
    </div>
  </article>
)
export const SvgBG = ({text}) => (
  <SVG viewBox="0 0 450 50" className="">
        <text y="50" x="50%" textAnchor="middle" className="svg-text">{text}</text>
  </SVG>
)

export const ComponentHeader = ({sectionHeader, info}) => (
  <>
    <Header2 className='sm:text-center'><span>{sectionHeader}</span><Span>.</Span></Header2>
    <Header6>
      <P>{info}</P>
    </Header6>
  </>
)
export const SectionTitle = ({text, sectionHeader, info}) => (
  <div className='section--header relative z-10 py-3'>
    {text && <SvgBG text={text} /> }
    <Container>
      <ComponentHeader sectionHeader={sectionHeader} info={info}/>
    </Container>
  </div>
)
