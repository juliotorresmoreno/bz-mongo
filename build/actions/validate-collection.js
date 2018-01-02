'use strict';

var _require = require('child_process'),
    spawn = _require.spawn;

exports.invoke = function (deps, globals, actionName, data, authenticationType, logger, done) {
    var ls = spawn('mongocli.exe', ['--command=validateCollection', '--globals=' + JSON.stringify(globals), '--actionName=' + actionName, '--data=' + JSON.stringify(data), '--authenticationType=' + authenticationType]);

    ls.stdout.on('data', function (data) {
        done(data.toString("utf-8"));
    });

    ls.stderr.on('data', function (data) {
        done(data.toString("utf-8"));
    });
}.bind(null, {});

exports.invoke.description = 'Validates a collection. The method scans a collection\u2019s data structures for correctness ' + 'and returns a single document that describes the relationship between the logical collection ' + 'and the physical representation of the data.';

exports.invoke.definition = [{
    "name": "collection",
    "type": "string",
    "qty": "single"
}, {
    "name": "database",
    "type": "string",
    "qty": "single"
}];