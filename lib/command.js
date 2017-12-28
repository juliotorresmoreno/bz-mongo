
import bzUtil from './bz-util';
import { error } from './util';

export default (MongoClient) => (deps, globals = { authdata: {} }, actionName, data, authenticationType, logger, done) => {
    const url = globals.authdata.url || 'mongodb://localhost:27017';
    const { database = 'test', command } = data.inputs.input;
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, client) {
            if (err) {
                reject(err);
                return;
            }
            resolve(client);
        });
    })
        .then((client) => {
            const _done = (args) => {
                done(args);
                client.close();
            }
            const db = client.db(database);
            db.command(command)
                .then((res) => _done(bzUtil.getResponse(res, null, 200, null)))
                .catch(error(_done));
        })
        .catch(error(done));
};
