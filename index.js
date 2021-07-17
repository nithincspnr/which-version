const readFileSync = require("fs").readFileSync
const resolve = require("path").resolve

const parseJSON = file => JSON.parse(file)

function readPackageJSON(dir = process.cwd()) {
    const filePath = resolve(dir, "package.json")
    return readFileSync(filePath, "utf-8")
}

function getVersion() {
    const errMsg = "Sorry, failed to read the package version!"
    try {
        const pkgJsonContent = readPackageJSON()
        return parseJSON(pkgJsonContent).version || errMsg
    } catch (error) {
        return errMsg
    }
}

module.exports = { getVersion }