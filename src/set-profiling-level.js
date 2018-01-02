
const { spawn } = require('child_process');

exports.invoke = function (deps, globals, actionName, data, authenticationType, logger, done) {
    const ls = spawn('mongocli.exe', [
        '--command=setProfilingLevel',
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

exports.invoke.description = `Modifies the current database profiler level used by the database profiling system to capture ` +
                             `data about performance. The method provides a wrapper around the database command profile.`;

exports.invoke.definition = [
    {
        "name": "level",
        "type": "string",
        "qty": "single"
    },
    {
        "name": "database",
        "type": "string",
        "qty": "single"
    }
];
