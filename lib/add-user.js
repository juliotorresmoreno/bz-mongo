
import bzUtil from './bz-util';
import { connect, error } from './util';

function addUser(MongoClient) {
    return function (deps, globals = { authdata: {} }, actionName, data, authenticationType, logger, done) {
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
    }
}

addUser.definition = [
    {
        "name": "user",
        "type": "string",
        "qty": "single"
    }, 
    {
        "name": "pwd",
        "type": "string",
        "qty": "single"
    },
    {
        "name": "role",
        "type": "string",
        "qty": "single"
    },
    {
        "name": "database",
        "type": "string",
        "qty": "single"
    }
];

export default addUser;