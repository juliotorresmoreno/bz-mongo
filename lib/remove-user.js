
import bzUtil from './bz-util';
import { connect, error } from './util';

export default (MongoClient) => (deps, globals = { authdata: {} }, actionName, data, authenticationType, logger, done) => {
    const { user, pwd, role, database = 'test' } = data.inputs.input;
    connect(MongoClient, globals.authdata)
        .then((client) => {
            const db = client.db(database);
            db.removeUser(user)
                .then((res) => {
                    done(bzUtil.getResponse({ response: "User has ben deleted." }, null, 200, null));
                    client.close();
                })
                .catch(error(done));
        })
        .catch(error(done));
};
