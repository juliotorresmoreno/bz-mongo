

import { command } from './bundle';
import { MongoClient } from 'mongodb';

export const invoke = command(MongoClient).bind(null, {});
