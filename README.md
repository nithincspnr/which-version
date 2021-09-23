# which-version

Get the current version of a module.

## Installation
Use the package manager [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to install it.

```
npm install which-version
```

## Usage
Import the method and use,
```
const getVersion = require("which-version").getVersion;
getVersion();
// => 1.1.0
```

- To get the name as well as version, use `getInfo` method
```
const { name, version } = require("which-version").getInfo();
```

## CLI

If you are inside a module or project, simply find the version in command line using `npx`,
```
npx which-version
//=> module-name :: 1.1.0
```