import { Router } from 'express';
import axios from 'axios';
import cheerio from 'cheerio';
import { authMiddleware } from '../middlewares/auth-middleware';
import fetchCars from './kolesa/parse';

const parseRouter = Router();

parseRouter.get('/kolesa', async (request, response) => {
    try {
        const htmlResponse = await axios.get('https://kolesa.kz/');
        const html = htmlResponse.data;
        const $ = cheerio.load(html);
        const cars = $(".hot-item");

        let ads : any = [];

        cars.each((index, element) => {
            const image = $(element).find('a picture img').attr('src');
            const title = $(element).find('a picture img').attr('alt');
            console.log()
            if (index !== 0) {
              ads = [...ads, {index, image, title}]
            } 
        });

        response.json(ads);
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
        response.status(500).json({ error: 'Ошибка сервера' });
    }
});

export default parseRouter;
