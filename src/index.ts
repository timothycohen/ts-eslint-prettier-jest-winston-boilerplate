import { logger } from './utils/logger.js';

export const sayHi = () => {
  logger.info('saying hi');

  return 'Hi';
};
sayHi();
