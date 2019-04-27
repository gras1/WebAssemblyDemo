const fs = require("fs");
const buf = fs.readFileSync("./subtract.wasm");
const wasmModule = new WebAssembly.Module(new Uint8Array(buf));
const wasmInstance = new WebAssembly.Instance(wasmModule);

console.log(wasmInstance.exports.deduct(75, -7));