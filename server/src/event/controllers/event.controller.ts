import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/utils/jwt-auth.guard';
import { EventService } from '../services/event.service';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.eventService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Request() req) {
    console.log(req.body);
    return this.eventService.createEvent(req);
  }
}
