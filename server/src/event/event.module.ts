import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { EventController } from './controllers/event.controller';
import { eventProviders } from './event.providers';
import { EventService } from './services/event.service';

@Module({
  imports: [DatabaseModule],
  controllers: [EventController],
  providers: [...eventProviders, EventService],
})
export class EventModule {}
