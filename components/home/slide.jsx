import { SectionWrapper } from '../utils'

const slideBox = []

const BrandSlide = () => (
  <SectionWrapper>
    <div className='flex overflow-x-auto transform translate-x-0 transition-all'>
      <SlideBox />
      <Trail />  
    </div>
  </SectionWrapper>
)

const ArrowLeft = () => (<svg></svg>)

const ArrowRight = () => (<svg></svg>)

const SlideBox = ({}) => (
  <div className='box relative grid grid-cols-1 md:grid-cols-2 h-full w-full items-center overflow-hidden'>
    <div className='bg absolute -left-10 h-full p-4 pl-80 w-7/12 transform origin-top-right skew-x-6'></div>
    <div className='details '>
      <h1></h1>
      <p className='text-xs font-semibold leading-4 tracking-tight'></p>
      <button className='py-4 px-12 text-gray-200 rounded-xl border-none outline-none transition-all hover: opacity-80 focus: outline-none border-none'></button>
    </div>
    <div className='illustration '>
      <div className='inner'></div>
    </div>
  </div>
)

const Trail = ({items, isActive}) => (
  <div className='trail '>
    {slideBox.map((id, isActive) => (
      <div className=''></div>
    ))}
  </div>
)

export default BrandSlide
