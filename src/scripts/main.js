import $ from 'jquery'

const btnClick = () => {
    $('.btn-menu').on('click', () => {
        $('.menu-link').toggle()
    })
}


export default btnClick
