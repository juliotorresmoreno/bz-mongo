'use strict';

var _require = require('child_process'),
    spawn = _require.spawn;

exports.invoke = function (deps, globals, actionName, data, authenticationType, logger, done) {
    var ls = spawn('mongocli.exe', ['--command=command', '--globals=' + JSON.stringify(globals), '--actionName=' + actionName, '--data=' + JSON.stringify(data), '--authenticationType=' + authenticationType]);

    ls.stdout.on('data', function (data) {
        done(data.toString("utf-8"));
    });

    ls.stderr.on('data', function (data) {
        done(data.toString("utf-8"));
    });
}.bind(null, {});

exports.invoke.description = 'All command documentation outlined below describes a command and its available parameters and provides a ' + 'document template or prototype for each command. Some command documentation also includes the relevant ' + 'mongo shell helpers.';

exports.invoke.definition = [{
    "name": "command",
    "type": "string",
    "qty": "single"
}, {
    "name": "database",
    "type": "string",
    "qty": "single"
}];