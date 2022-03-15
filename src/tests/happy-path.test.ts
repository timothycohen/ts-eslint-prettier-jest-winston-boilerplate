import { sayHi } from '../index.js';

it('happy path', () => {
  const response = sayHi();
  expect(response).toBe('Hi');
});
