const wabt = require("wabt")();
const fs = require("fs");

const decompile = (inputWasm) => {
    const outputWat = `${inputWasm.substr(0, inputWasm.indexOf('.'))}.wat`;
    var wasm = fs.readFileSync(inputWasm, null);
    var myModule = wabt.readWasm(wasm, { readDebugNames: true });
    myModule.applyNames();
    var wast = myModule.toText({ foldExprs: false, inlineExport: false });
    fs.writeFileSync(outputWat, wast)
};

module.exports = { decompile };