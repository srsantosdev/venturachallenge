import { v4 as uuid } from 'uuid';

import IActionsRepository from '../IActionsRepository';
import ICreateActionDTO from '../../dtos/ICreateActionDTO';
import Action from '../../infra/typeorm/schemas/Action';

export default class FakeActionsRepository implements IActionsRepository {
  private actions: Action[] = [];

  public async create({ action, email }: ICreateActionDTO): Promise<Action> {
    const createdAction = new Action();

    Object.assign(createdAction, {
      id: uuid(),
      email,
      action,
    });

    this.actions.push(createdAction);

    return createdAction;
  }

  public async all(): Promise<Action[]> {
    return this.actions;
  }
}
