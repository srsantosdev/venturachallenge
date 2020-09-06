import { container } from 'tsyringe';
import { Request, Response } from 'express';

import CreateActionService from '@modules/actions/services/CreateActionService';
import ListAllActionsService from '@modules/actions/services/ListAllActionsService';

export default class ActionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, action } = request.body;

    const createActionService = container.resolve(CreateActionService);

    const createdAction = await createActionService.execute({
      email,
      action,
    });

    return response.status(201).json(createdAction);
  }

  public async index(_: Request, response: Response): Promise<Response> {
    const listAllActionsService = container.resolve(ListAllActionsService);

    const actions = await listAllActionsService.execute();

    return response.json(actions);
  }
}
