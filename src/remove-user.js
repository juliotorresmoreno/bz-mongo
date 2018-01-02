

const { spawn } = require('child_process');

exports.invoke = function (deps, globals, actionName, data, authenticationType, logger, done) {
    const ls = spawn('mongocli.exe', [
        '--command=removeUser',
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

exports.invoke.description = `Removes the specified username from the database.`;

exports.invoke.definition = [
    {
        "name": "user",
        "type": "string",
        "qty": "single"
    },
    {
        "name": "database",
        "type": "string",
        "qty": "single"
    }
];
