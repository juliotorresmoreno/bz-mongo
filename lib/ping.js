
import bzUtil from './bz-util';
import { connect, error } from './util';

export default (MongoClient) => (deps, globals = { authdata: {} }, actionName, data, authenticationType, logger, done) => {
    const { database = 'test' } = data.inputs.input;
    connect(MongoClient, globals.authdata)
        .then((client) => {
            client.db(database).admin().ping((err, { databases }) => {
                if (err) {
                    error(done)(err);
                    return;
                }
                client.close();
                done(bzUtil.getResponse(databases, null, 200, null));
            });
        })
        .catch(error(done));
};
