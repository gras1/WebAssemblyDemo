const fs = require("fs");
const buf = fs.readFileSync("./tableexample.wasm");
const wasmModule = new WebAssembly.Module(new Uint8Array(buf));

const wasmInstance = new WebAssembly.Instance(wasmModule);

console.log(wasmInstance.exports.callByIndex(0));
console.log(wasmInstance.exports.callByIndex(1));
