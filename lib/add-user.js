
import bzUtil from './bz-util';
import { connect, error } from './util';

export default (MongoClient) => (deps, globals = { authdata: {} }, actionName, data, authenticationType, logger, done) => {
    const { user, pwd, role, database = 'test' } = data.inputs.input;
    connect(MongoClient, globals.authdata)
        .then((client) => {
            client.db(database).addUser(user, pwd, {
                roles: [
                    { role: role, db: database }
                ]
            })
                .then((res) => {
                    done(bzUtil.getResponse({ response: "User has ben created." }, null, 200, null));
                    client.close();
                })
                .catch(error(done));
        })
        .catch(error(done));
};

