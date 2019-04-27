const wabt = require("wabt")();
const fs = require("fs");

const compile = (inputWat) => {
    const outputWasm = `${inputWat.substr(0, inputWat.indexOf('.'))}.wasm`;
    const wasmModule = wabt.parseWat(inputWat, fs.readFileSync(inputWat, "utf8"));
    const { buffer } = wasmModule.toBinary({});
    fs.writeFileSync(outputWasm, Buffer.from(buffer));
};

module.exports = { compile };