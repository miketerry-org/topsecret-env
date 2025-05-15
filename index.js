// index.js:

"use strict";

// load all necessary modules
const createSchemaTemplate = require("./lib/createschemaTemplate.js");
const decryptEnvFile = require("./lib/decryptEnvFile.js");
const encryptEnvFile = require("./lib/encryptEnvFile.js");
const loadEnvFile = require("./lib/loadEnvFile.js");
const maskSensitiveKeys = require("./lib/maskSensitiveKeys.js");
const validateObject = require("./lib/validateObject.js");

const envTypes = [
  "array",
  "boolean",
  "date",
  "float",
  "integer",
  "object",
  "string",
  "time",
];

module.exports = {
  createSchemaTemplate,
  decryptEnvFile,
  encryptEnvFile,
  envTypes,
  loadEnvFile,
  maskSensitiveKeys,
  validateObject,
};
