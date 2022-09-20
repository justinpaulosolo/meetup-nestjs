import { DataSource } from 'typeorm';
import { Event } from './entities/event.entity';

export const eventProviders = [
  {
    provide: 'EVENT_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Event),
    inject: ['DATA_SOURCE'],
  },
];
