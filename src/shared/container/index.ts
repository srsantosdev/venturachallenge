import { container } from 'tsyringe';

import IActionsRepository from '@modules/actions/repositories/IActionsRepository';
import ActionsRepository from '@modules/actions/infra/typeorm/repositories/ActionsRepository';

container.registerSingleton<IActionsRepository>(
  'ActionsRepository',
  ActionsRepository,
);
