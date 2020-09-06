import { injectable, inject } from 'tsyringe';
import IActionsRepository from '../repositories/IActionsRepository';
import Action from '../infra/typeorm/schemas/Action';

interface IRequest {
  email: string;
  action: string;
}

@injectable()
export default class CreateActionService {
  constructor(
    @inject('ActionsRepository')
    private actionsRepository: IActionsRepository,
  ) {}

  public async execute({ action, email }: IRequest): Promise<Action> {
    const createdAction = await this.actionsRepository.create({
      action,
      email,
    });

    return createdAction;
  }
}
