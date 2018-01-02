

const { spawn } = require('child_process');

exports.invoke = function (deps, globals, actionName, data, authenticationType, logger, done) {
    const ls = spawn('mongocli.exe', [
        '--command=validateCollection',
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

exports.invoke.description = `Validates a collection. The method scans a collection’s data structures for correctness `+
                             `and returns a single document that describes the relationship between the logical collection ` +
                             `and the physical representation of the data.`;

exports.invoke.definition = [
    {
        "name": "collection",
        "type": "string",
        "qty": "single"
    },
    {
        "name": "database",
        "type": "string",
        "qty": "single"
    }
];
