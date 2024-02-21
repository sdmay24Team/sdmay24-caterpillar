// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Test1, Test2, Test3 } = initSchema(schema);

export {
  Test1,
  Test2,
  Test3
};