

const { spawn } = require('child_process');

exports.invoke = function (deps, globals, actionName, data, authenticationType, logger, done) {
    const ls = spawn('mongocli.exe', [
        '--command=listDatabases',
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

exports.invoke.description = `The listDatabases command provides a list of all existing databases along with basic statistics about them. ` +
                             `The listDatabases must run against the admin database, as in the following example: ` + 
                             `db.adminCommand( { listDatabases: 1 } )`;

exports.invoke.definition = [

];
