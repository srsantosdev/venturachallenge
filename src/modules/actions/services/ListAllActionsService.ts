import { injectable, inject } from 'tsyringe';
import IActionsRepository from '../repositories/IActionsRepository';
import Action from '../infra/typeorm/schemas/Action';

@injectable()
export default class ListAllActionsService {
  constructor(
    @inject('ActionsRepository')
    private actionsRepository: IActionsRepository,
  ) {}

  public async execute(): Promise<Action[]> {
    const actions = await this.actionsRepository.all();

    return actions;
  }
}
