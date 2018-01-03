
import bzUtil from './bz-util';
import { connect, error } from './util';

export default (MongoClient) => (deps, globals = { authdata: {} }, actionName, data, authenticationType, logger, done) => {
    const { database = 'test' } = data.inputs.input;
    console.log("sdfs")
    connect(MongoClient, globals.authdata)
        .then((client) => {
            client.db(database).admin().ping((err, response) => {
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
