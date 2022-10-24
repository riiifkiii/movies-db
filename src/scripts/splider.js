import '/node_modules/@splidejs/splide/dist/css/splide.min.css'
import Splide from '@splidejs/splide';


new Splide('.splide', {
    type: 'loop',
    autoplay: 'pause',
}).mount();