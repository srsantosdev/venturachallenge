import FakeActionsRepository from '@modules/actions/repositories/fakes/FakeActionsRepository';

import CreateActionService from './CreateActionService';

let fakeActionsRepository: FakeActionsRepository;
let createActionService: CreateActionService;

describe('Create Action', () => {
  beforeEach(() => {
    fakeActionsRepository = new FakeActionsRepository();
    createActionService = new CreateActionService(fakeActionsRepository);
  });

  it('should be able to create a action', async () => {
    const action = await createActionService.execute({
      email: 'johndoe@example.com.br',
      action: 'pause',
    });

    expect(action).toHaveProperty('id');
    expect(action.email).toBe('johndoe@example.com.br');
  });
});
