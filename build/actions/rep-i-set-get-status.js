'use strict';

var _require = require('child_process'),
    spawn = _require.spawn;

exports.invoke = function (deps, globals, actionName, data, authenticationType, logger, done) {
    var ls = spawn('mongocli.exe', ['--command=setProfilingLevel', '--globals=' + JSON.stringify(globals), '--actionName=' + actionName, '--data=' + JSON.stringify(data), '--authenticationType=' + authenticationType]);

    ls.stdout.on('data', function (data) {
        done(data.toString("utf-8"));
    });

    ls.stderr.on('data', function (data) {
        done(data.toString("utf-8"));
    });
}.bind(null, {});

exports.invoke.description = 'The replSetGetStatus command returns the status of the replica set from the point of view of ' + 'the server that processed the command. replSetGetStatus must be run against the admin database. ' + 'The command has the following prototype form: { replSetGetStatus: 1 }';

exports.invoke.definition = [{
    "name": "database",
    "type": "string",
    "qty": "single"
}];