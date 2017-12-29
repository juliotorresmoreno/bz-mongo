
import bzUtil from './bz-util';
import { connect, error } from './util';
import { MongoClient as MongoClientBD } from 'mongodb';

export default (deps, globals = { authdata: {} }, actionName, data, authenticationType, logger, done) => {
    const { database = 'test', level } = data.inputs.input;
    connect(MongoClient, globals.authdata)
        .then((client) => {
            client.db(database).setProfilingLevel(level, (err, response) => {
                if (err) {
                    error(done)(err);
                    return;
                }
                client.close();
                done(bzUtil.getResponse(response, null, 200, null));
            });
        })
        .catch(error(done));
};
