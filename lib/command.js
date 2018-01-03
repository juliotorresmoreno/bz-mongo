
import bzUtil from './bz-util';
import { connect, error } from './util';

export default (MongoClient) => (deps, globals = { authdata: {} }, actionName, data, authenticationType, logger, done) => {
    const { database = 'test', command } = data.inputs.input;
    connect(MongoClient, globals.authdata)
        .then((client) => {
            client.db(database).command(JSON.parse(command))
                .then((response) => {
                    done(bzUtil.getResponse(response, null, 200, null));
                    client.close();
                })
                .catch(error(done));
        })
        .catch(error(done));
};
