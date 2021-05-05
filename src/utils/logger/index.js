import logger from './logger';

const log = (category, msg, type) => {
  switch (category) {
    case 'error':
      logger.log({ type: type, details: msg, category: category });
      console.error(msg);
      console.trace();
      break;
    case 'warn':
      logger.log({ type: type, details: msg, category: category });
      console.warn(msg);
      break;
    default:
      logger.log({ type: type, details: msg, category: category });
      console.log(msg);
  }
};
export default log;
