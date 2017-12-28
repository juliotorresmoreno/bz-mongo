
import { serverInfo } from './bundle';
import { MongoClient } from 'mongodb';

export const invoke = serverInfo(MongoClient).bind(null, {});
