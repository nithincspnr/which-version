# which-version
To know which is the current version of your module or project.

## Installation
Use the package manager [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to install it.
```
npm install which-version
```

## Usage
Use in your project as,
```
const getVersion = require("which-version").getVersion;
getVersion();
// => 1.0.0
```
> **Note**: This is a synchronous method

## CLI
If you are inside a module or project, you can use it as a command-line utility for finding out the version,

### Install
```
npm install --g which-version
```
and run,
```
which-version
// => 1.0.0
```
Otherwise use `npx` to run one the command if you don't want to install the package forever in your computer,
```
npx which-version
```