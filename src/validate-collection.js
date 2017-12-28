
import { validateCollection } from './bundle';
import { MongoClient } from 'mongodb';

export const invoke = validateCollection(MongoClient).bind(null, {});



