const fs = require("fs");
const buf = fs.readFileSync("./add3.wasm");
const wasmModule = new WebAssembly.Module(new Uint8Array(buf));
const wasmInstance = new WebAssembly.Instance(wasmModule);

console.log(wasmInstance.exports.add(75, -7, 267));