import Image from 'next/image'

import { Banner, Scroll, Figure, BannerTitle, Headline } from '../../styles/homeStyles'
import { Header1 } from '../../styles/commonStyles'
import { SectionWrapper } from '../utils'
 
import beijing from '../../public/images/beijing.webp'
import bg from '../../public/svg/floral.svg'

const HomeBanner = () => {
  return(
    <SectionWrapper reverse fluid>
      <Banner>
        <Figure> 
          <Image src={bg} type='image/svg' alt='bg-floral' layout='fill'/>
        </Figure>
        <BannerTitle>
          <Headline>
            <Header1>Think</Header1> 
            <p>of what makes your life good. Through experiences ammassed from over two decades of exceptional services, we promise to provide you with the best</p>
          </Headline>
           <Headline>
            <Header1>Experience</Header1>
          </Headline>
        </BannerTitle>
        {/* <Scroll> */}
        {/*   <p> Learn More </p> */}
        {/* </Scroll> */}
      </Banner>
    </SectionWrapper>
  )
}

export default HomeBanner;
