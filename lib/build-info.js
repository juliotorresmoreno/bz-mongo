
import bzUtil from './bz-util';
import { connect, error } from './util';

export default (MongoClient) => (deps, globals = { authdata: {} }, actionName, data, authenticationType, logger, done) => {
    const { database = 'test' } = data.inputs.input;
    connect(MongoClient, globals.authdata)
        .then((client) => {
            client.db(database).command({ buildInfo: 1 })
                .then((res) => {
                    done(bzUtil.getResponse(res, null, 200, null));
                    client.close();
                })
                .catch(error(done));
        })
        .catch(error(done));
};

