const fs = require("fs");
const buf = fs.readFileSync("./theanswer.wasm");
const wasmModule = new WebAssembly.Module(new Uint8Array(buf));
const wasmInstance = new WebAssembly.Instance(wasmModule);

console.log(wasmInstance.exports.theanswertolifetheuniverseandeverything());