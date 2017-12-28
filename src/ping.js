
import { ping } from './bundle';
import { MongoClient } from 'mongodb';

export const invoke = ping(MongoClient).bind(null, {});
