import {
  ObjectID,
  ObjectIdColumn,
  Entity,
  CreateDateColumn,
  Column,
} from 'typeorm';

@Entity('actions')
export default class Action {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  email: string;

  @Column()
  action: string;

  @CreateDateColumn()
  created_at: Date;
}
