'use strict';

var _require = require('child_process'),
    spawn = _require.spawn;

var invoke = function (deps, globals, actionName, data, authenticationType, logger, done) {
    var ls = spawn('mongocli.exe', ['--command=addUser', '--globals=' + JSON.stringify(globals), '--actionName=' + actionName, '--data=' + JSON.stringify(data), '--authenticationType=' + authenticationType]);
    ls.stdout.on('data', function (data) {
        done(data.toString("utf-8"));
    });
    ls.stderr.on('data', function (data) {
        done(data.toString("utf-8"));
    });
}.bind(null, {});

invoke.definition = [{
    "name": "user",
    "type": "string",
    "qty": "single"
}, {
    "name": "pwd",
    "type": "string",
    "qty": "single"
}, {
    "name": "role",
    "type": "string",
    "qty": "single"
}, {
    "name": "database",
    "type": "string",
    "qty": "single"
}];

exports.invoke = invoke;