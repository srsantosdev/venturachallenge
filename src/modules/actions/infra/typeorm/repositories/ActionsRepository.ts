import { MongoRepository, getMongoRepository } from 'typeorm';

import IActionsRepository from '../../../repositories/IActionsRepository';
import ICreateActionDTO from '../../../dtos/ICreateActionDTO';
import Action from '../schemas/Action';

export default class ActionsRepository implements IActionsRepository {
  private ormRepository: MongoRepository<Action>;

  constructor() {
    this.ormRepository = getMongoRepository(Action);
  }

  public async create({ email, action }: ICreateActionDTO): Promise<Action> {
    const createdAction = this.ormRepository.create({
      email,
      action,
    });

    await this.ormRepository.save(createdAction);

    return createdAction;
  }

  public async all(): Promise<Action[]> {
    const actions = await this.ormRepository.find();

    return actions;
  }
}
