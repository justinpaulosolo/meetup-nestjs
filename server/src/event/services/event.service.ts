import { Inject, Injectable } from '@nestjs/common';
import { Event } from '../entities/event.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EventService {
  constructor(
    @Inject('EVENT_REPOSITORY')
    private eventRepository: Repository<Event>,
  ) {}

  async findAll(): Promise<Event[]> {
    return this.eventRepository.find();
  }

  async createEvent(req: any) {
    const userId = req.user.userId;
    const event = this.eventRepository.create({
      title: req.body.title,
      description: req.body.description,
      location: req.body.location,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      createdBy: userId,
    });
    console.log(event);
    return await this.eventRepository.save(event);
  }

  async findOne(id: number): Promise<Event> {
    return await this.eventRepository.findOne({
      where: {
        id: id,
      },
    });
  }
}
