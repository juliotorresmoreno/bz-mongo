
const { spawn } = require('child_process');

exports.invoke = function (deps, globals, actionName, data, authenticationType, logger, done) {
    try {
        logger.info("ping started");
        const ls = spawn('mongocli.exe', [
            '--command=ping',
            '--globals=' + JSON.stringify(globals),
            '--actionName=' + actionName,
            '--data=' + JSON.stringify(data),
            '--authenticationType=' + authenticationType
        ]);
        logger.info("ping run");

        ls.stdout.on('data', (data) => {
            logger.info("ping output");
            done(data.toString("utf-8"));
        });

        ls.stderr.on('data', (data) => {
            logger.info("ping error");
            done(data.toString("utf-8"));
        });
    } catch (e) {
        logger.info(e);
    }
}.bind(null, {});

exports.invoke.description = `The ping command is a no-op used to test whether a server is responding to commands. ` +
                             `This command will return immediately even if the server is write-locked: { ping: 1 }`;

exports.invoke.definition = [
    {
        "name": "database",
        "type": "string",
        "qty": "single"
    }
];
