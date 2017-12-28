
import { setProfilingLevel } from './bundle';
import { MongoClient } from 'mongodb';

export const invoke = setProfilingLevel(MongoClient).bind(null, {});



