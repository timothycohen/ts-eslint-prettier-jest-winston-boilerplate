import { logger } from './utils/logger';

export const sayHi = () => {
  // prettier will turn this to single quotes
  const hi = "Hi";
  // eslint will turn this into a string literal
  logger.info('saying "' + hi + '"');

  return 'Hi';
};
sayHi();
