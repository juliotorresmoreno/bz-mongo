'use strict';

var _require = require('child_process'),
    spawn = _require.spawn;

exports.invoke = function (deps, globals, actionName, data, authenticationType, logger, done) {
    var ls = spawn('mongocli.exe', ['--command=ping', '--globals=' + JSON.stringify(globals), '--actionName=' + actionName, '--data=' + JSON.stringify(data), '--authenticationType=' + authenticationType]);

    ls.stdout.on('data', function (data) {
        done(data.toString("utf-8"));
    });

    ls.stderr.on('data', function (data) {
        done(data.toString("utf-8"));
    });
}.bind(null, {});

exports.invoke.description = 'The ping command is a no-op used to test whether a server is responding to commands. ' + 'This command will return immediately even if the server is write-locked: { ping: 1 }';

exports.invoke.definition = [{
    "name": "database",
    "type": "string",
    "qty": "single"
}];