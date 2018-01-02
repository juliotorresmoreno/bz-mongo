
const { spawn } = require('child_process');

exports.invoke = function (deps, globals, actionName, data, authenticationType, logger, done) {
    const ls = spawn('mongocli.exe', [
        '--command=serverStatus',
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

exports.invoke.description = `The serverStatus command returns a document that provides an overview of the database’s state. ` +
                             `Monitoring applications can run this command at a regular interval to collect statistics about the instance.`;

exports.invoke.definition = [
    {
        "name": "database",
        "type": "string",
        "qty": "single"
    }
];
