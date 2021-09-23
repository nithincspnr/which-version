#!/usr/bin/env node
const { name, version } = require('./').getInfo();

const output = name ? `${name} :: ${version}` : `${version}`

process.stdout.write(output);