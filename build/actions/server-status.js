'use strict';

var _require = require('child_process'),
    spawn = _require.spawn;

exports.invoke = function (deps, globals, actionName, data, authenticationType, logger, done) {
    var ls = spawn('mongocli.exe', ['--command=serverStatus', '--globals=' + JSON.stringify(globals), '--actionName=' + actionName, '--data=' + JSON.stringify(data), '--authenticationType=' + authenticationType]);

    ls.stdout.on('data', function (data) {
        done(data.toString("utf-8"));
    });

    ls.stderr.on('data', function (data) {
        done(data.toString("utf-8"));
    });
}.bind(null, {});

exports.invoke.description = 'The serverStatus command returns a document that provides an overview of the database\u2019s state. ' + 'Monitoring applications can run this command at a regular interval to collect statistics about the instance.';

exports.invoke.definition = [{
    "name": "database",
    "type": "string",
    "qty": "single"
}];