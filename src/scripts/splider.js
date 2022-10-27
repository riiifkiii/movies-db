import '/node_modules/@splidejs/splide/dist/css/splide.min.css'
import Splide from '@splidejs/splide';


new Splide('.splide1', {
    type: 'loop',
    autoplay: 'play',
}).mount();

new Splide('.splide2',{
    type: 'loop',
    autoplay: 'pause'
}).mount()

export default Splide