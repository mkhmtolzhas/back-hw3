import mongoose from 'mongoose';
import { CreateAdsDto } from './dtos/CreateAds.dto';
// import Ads, { IAds } from './models/Event';
import { IAds } from './models/Ads';
import Ads from './models/Ads';



// this event service instance shows how to create a event, get a event by id, and get all events with in-memory data
class EventService {
  
    async getEventById(id: string): Promise<IAds | null> {
      return await Ads.findById(id).exec();
    }

    async getEvents(): Promise<IAds[]> {
      return await Ads.find().exec(); 
    }

    async createEvent(createEventDto: CreateAdsDto): Promise<IAds> {
      const { ads } = createEventDto;
      const newEvent = new Ads({
       ads,
      });
  
      await newEvent.save();
      return newEvent;
    }
  
    
  }
  
  export default EventService;
  