import { sayHi } from './index';

it('happy path', () => {
  const response = sayHi();
  expect(response).toBe('Hi');
});
