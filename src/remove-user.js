
import { removeUser } from './bundle';
import { MongoClient } from 'mongodb';

export const invoke = removeUser(MongoClient).bind(null, {});
