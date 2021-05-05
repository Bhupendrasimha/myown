// import { Date } from 'src/__mocks__/matchMedia';
import moment from 'moment';

import Logger from './aws-cloudwatch-logger';
let now = new moment();

const config = {
  logGroupName: 'sita/frontend/dev',
  logStreamName: `sita-frontend`,
  region: 'ap-south-1',
  accessKeyId: 'AKIAT2VEU6GTMEIUX6FZ',
  secretAccessKey: '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',
  uploadFreq: 2000, // Optional. Send logs to AWS LogStream in batches after 10 seconds intervals.
  local: true, // Optional. If set to true, the log will fall back to the standard 'console.log'.
};

const logger = new Logger(config);

export default logger;
