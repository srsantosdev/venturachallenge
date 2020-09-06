import Action from '../infra/typeorm/schemas/Action';
import ICreateActionDTO from '../dtos/ICreateActionDTO';

export default interface IActionsRepository {
  create(data: ICreateActionDTO): Promise<Action>;
  all(): Promise<Action[]>;
}
