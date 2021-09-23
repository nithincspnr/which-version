const resolve = require("path").resolve

/** 
 * Local module
 */
function readPkgJSON(dir = process.cwd()) {
    try {
        return require(resolve(dir, "package.json"))
    } catch (e) {
        throw new Error('Sorry, No package.json file found!')
    }
}

function getInfo() {
    const { name, version } = readPkgJSON();
    return { name, version }
}

function getVersion() {
    return getInfo().version
}

module.exports = { getVersion, getInfo }