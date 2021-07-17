#!/usr/bin/env node
const getVersion = require('./index').getVersion;

process.stdout.write(getVersion());