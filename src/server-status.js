
import { serverStatus } from './bundle';


export const invoke = serverStatus.bind(null, {});
