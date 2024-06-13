const axios = require('axios');
const cheerio = require('cheerio');


const url = 'https://kolesa.kz/'



const fetchCars = () => {
    axios.get('https://kolesa.kz/')
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html);
            const cars = $(".hot-item")

            let ads : any[] = []
    
            cars.each((index, element) => {
                const image = $(element).find('a').find('picture').find('img').attr('src')
                const title = $(element).find('a').find('picture').find('img').attr('alt')

                ads = [...ads, {image, title}]
            })
            return ads
        })
        .catch( error => {
            console.error('Ошибка при получении данных:', error);
        })
}

export default fetchCars;
