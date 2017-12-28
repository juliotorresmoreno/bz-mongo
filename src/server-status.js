
import { serverStatus } from './bundle';
import { MongoClient } from 'mongodb';

export const invoke = serverStatus(MongoClient).bind(null, {});
