import FakeActionsRepository from '@modules/actions/repositories/fakes/FakeActionsRepository';

import ListAllActionsService from './ListAllActionsService';

let fakeActionsRepository: FakeActionsRepository;
let listAllActionsService: ListAllActionsService;

describe('List All Actions', () => {
  beforeEach(() => {
    fakeActionsRepository = new FakeActionsRepository();
    listAllActionsService = new ListAllActionsService(fakeActionsRepository);
  });

  it('should be able to list all actions', async () => {
    const action1 = await fakeActionsRepository.create({
      email: 'johndoe@example.com.br',
      action: 'play',
    });

    const action2 = await fakeActionsRepository.create({
      email: 'johndoe@example.com.br',
      action: 'pause',
    });

    const action3 = await fakeActionsRepository.create({
      email: 'maryann@example.com.br',
      action: 'play',
    });

    const action4 = await fakeActionsRepository.create({
      email: 'maryann@example.com.br',
      action: 'pause',
    });

    const actions = await listAllActionsService.execute();

    expect(actions).toEqual(
      expect.arrayContaining([action1, action2, action3, action4]),
    );
  });
});
