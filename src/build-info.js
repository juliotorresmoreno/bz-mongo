
const { spawn } = require('child_process');

exports.invoke = function (deps, globals, actionName, data, authenticationType, logger, done) {
    const ls = spawn('mongocli.exe', [
        '--command=buildInfo',
        '--globals=' + JSON.stringify(globals),
        '--actionName=' + actionName,
        '--data=' + JSON.stringify(data),
        '--authenticationType=' + authenticationType
    ]);

    ls.stdout.on('data', (data) => {
        done(data.toString("utf-8"));
    });

    ls.stderr.on('data', (data) => {
        done(data.toString("utf-8"));
    });
}.bind(null, {});

exports.invoke.description = `The buildInfo command is an administrative command which returns a build summary for the current mongod. ` +
                             `buildInfo has the following prototype form: { buildInfo: 1 }`;

exports.invoke.definition = [
    {
        "name": "database",
        "type": "string",
        "qty": "single"
    }
];
