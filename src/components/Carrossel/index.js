import { 
  CCarousel, 
  CCarouselItem, 
  CImage, 
  CCarouselCaption 
} from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import agroImage from './AGRO.png'

//carrossel de imagens com o logo do agroconect e as imagens das feiras
const Carrossel = () => {
    return (
    <CCarousel controls indicators dark style={{ height: '400px' }}>
      <CCarouselItem>
        <CImage className="d-block w-100" style={{ height: '400px', objectFit: 'cover' }} src={agroImage} alt="slide 1" />
        <CCarouselCaption className="d-none d-md-block">
          
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" style={{ height: '400px', objectFit: 'cover' }} src={'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhRGYwiXaiLEa6Xu88kfiNvHDTjHuAhXZGx6eze2J3AfdFO5zhyphenhyphenhgJ6si1oXC-9JFCq-NdkwH-XG2MSQDjGd8cjh_kZZ8j24Whmlm66WUnNhuCLGy50pchU8cvlQPGx8DFx9xv4ID4h51vS/s1600/IMG00107.jpg'} alt="slide 2" />
        <CCarouselCaption className="d-none d-md-block">
          
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" style={{ height: '400px', objectFit: 'cover' }} src={'https://i.ytimg.com/vi/NcWpNEXlwls/maxresdefault.jpg'} alt="slide 3" />
        <CCarouselCaption className="d-none d-md-block">
          
        </CCarouselCaption>
      </CCarouselItem>
    </CCarousel>
    )
}

export default Carrossel