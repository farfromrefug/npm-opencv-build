"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var constants_1 = require("./constants");
var dirs_1 = require("./dirs");
var getLibsFactory_1 = require("./getLibsFactory");
var utils_1 = require("./utils");
var constants_2 = require("./constants");
exports.opencvModules = constants_2.opencvModules;
var env_1 = require("./env");
exports.isAutoBuildDisabled = env_1.isAutoBuildDisabled;
exports.readAutoBuildFile = env_1.readAutoBuildFile;
exports.opencvInclude = dirs_1.dirs.opencvInclude;
exports.opencv4Include = dirs_1.dirs.opencv4Include;
exports.opencvLibDir = dirs_1.dirs.opencvLibDir;
exports.opencvBinDir = dirs_1.dirs.opencvBinDir;
exports.opencvBuildDir = dirs_1.dirs.opencvBuild;
exports.getLibs = getLibsFactory_1.getLibsFactory({ isWin: utils_1.isWin, isOSX: utils_1.isOSX, opencvModules: constants_1.opencvModules, path: path, fs: fs });
