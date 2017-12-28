

import { addUser } from './bundle';
import { MongoClient } from 'mongodb';

export const invoke = addUser(MongoClient).bind(null, {});
