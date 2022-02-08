import Image from 'next/image'
import Link from 'next/link'
import { BannerFig, BannerImage, CTABanner, CTAWrapper } from '../../styles/homeStyles'
import { SectionWrapper } from '../utils'

import svgImg from '../../public/bg-1.svg'
import san from '../../public/images/sanfrancisco.webp'

const BrandCTA = () => (
  <SectionWrapper reverse>
    {/* clipped image */}
    <ClippedImage />
    <CTAWrapper>
      <CTABanner>
        <Link href='/contact'>
          <a>Start your <span>SUCCESS</span> journey now.</a>

        </Link>      
      </CTABanner>
    </CTAWrapper>
  </SectionWrapper>
)


const ClippedImage = () => (
  <BannerImage>
    <BannerFig>
      <div className='wrapper'>
        <Image src={san} alt='bg-1' layout='fill' /> 
      </div>
    </BannerFig>
  </BannerImage> 
)


export default BrandCTA
