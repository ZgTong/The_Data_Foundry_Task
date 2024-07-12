// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Severity = {
  "LOW": "Low",
  "MEDIUM": "Medium",
  "HIGH": "High"
};

const { ServiceRequest } = initSchema(schema);

export {
  ServiceRequest,
  Severity
};