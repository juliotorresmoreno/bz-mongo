

import { buildInfo } from './bundle';
import { MongoClient } from 'mongodb';

export const invoke = buildInfo(MongoClient).bind(null, {});
