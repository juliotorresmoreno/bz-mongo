
const flags = require("node-flags");
const MongoClient = require('mongodb').MongoClient;
const conector = require('./bundle');

const defaultData = {
    inputs: {
        input: {
        }
    }
}

function get(name, defaultValue, parse = false) {
    const temp = flags.get(name);
    if (parse)
        return temp ? JSON.parse(temp) : defaultValue;
    return temp || defaultValue;
}

const
    command = get('command'),
    deps = get('deps'),
    globals = get('globals'), 
    actionName = get('actionName'), 
    data = get('data', defaultData, true),
    authenticationType = get('authenticationType', undefined, true);

if (!command || conector[command] === undefined) {
    console.log(`${command}, not found`);
    process.exit(0);
}

conector[command](MongoClient)(deps, globals, actionName, data, authenticationType, null, function (data) {
    console.log(JSON.stringify(data, null, 4));
    process.exit(0);
});