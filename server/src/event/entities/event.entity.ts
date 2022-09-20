import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  location: string;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @OneToOne(() => User, (user) => user.id)
  @JoinColumn()
  createdBy: User;

  @ManyToOne(() => User, (user) => user.events)
  attendees?: User[];
}
