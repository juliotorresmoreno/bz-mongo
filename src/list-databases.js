

import { listDatabases } from './bundle';
import { MongoClient } from 'mongodb';

export const invoke = listDatabases(MongoClient).bind(null, {});
