/**
 *
 * @author JarveinR
 *
 */

var propertiesMgr = require('properties-parser');
var loadModule = require('./loadModule');
var path = require('path');
var fs = require('fs');



var config = eval(fs.readFileSync('../../etc/config.js', "utf8"));
config.logsPath = path.join(__dirname, config.backingDownLogDirectory||'tmp/', 'Temporary/Connectors/');
config.schema = "http";
config.server = "localhost";
config.port = 16541;
config.maxRequestLengthSize = "10mb";
config.clusterWorkerNumber = "auto";
config.nodeJSExecutablePath = "C:\\BizagiJEE\\nodejs\\0.12.5\\node.exe";
config.forceEnableLogger = false;
config.logsPath = config.logsPath;

var configPropertiesPath = path.join(__dirname, config.backingDownConfigFile||'tmp/', 'config.properties');
if (fs.existsSync(configPropertiesPath)) {
    var properties = propertiesMgr.read(configPropertiesPath);

    if (properties.schema)
        config.schema = properties.schema;

    if (properties.server)
        config.server = properties.server;

    if (properties.port)
        config.port = properties.port;

    if (properties.maxRequestLengthSize)
        config.maxRequestLengthSize = properties.maxRequestLengthSize;

    if (properties.clusterWorkerNumber)
        config.clusterWorkerNumber = properties.clusterWorkerNumber;

    if (properties.nodeJSExecutablePath)
        config.nodeJSExecutablePath = properties.nodeJSExecutablePath;

    if (properties.forceEnableLogger)
        config.forceEnableLogger = properties.forceEnableLogger;

    if (properties.logsDirectoryPath)
        config.logsPath = properties.logsDirectoryPath;
}

Object.defineProperty(exports, "config", {value:config});