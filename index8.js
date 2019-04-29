const fs = require("fs");
const buf = fs.readFileSync("./usingglobal.wasm");
const wasmModule = new WebAssembly.Module(new Uint8Array(buf));

const wasmInstance = new WebAssembly.Instance(wasmModule);

wasmInstance.exports.incrementGlobal();
wasmInstance.exports.incrementGlobal();
wasmInstance.exports.incrementGlobal();
wasmInstance.exports.incrementGlobal();
console.log(wasmInstance.exports.getGlobal());
