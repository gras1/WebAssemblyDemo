const fs = require("fs");
const buf = fs.readFileSync("./helloworld.wasm");
const wasmModule = new WebAssembly.Module(new Uint8Array(buf));
const wasmInstance = new WebAssembly.Instance(wasmModule);

const linearMemory = wasmInstance.exports.memory;
const offset = wasmInstance.exports.getMessage();
const buffer = new Uint8Array(linearMemory.buffer, offset, 12);

let str = "";
for (var i = 0; i < buffer.length; i++) {
  str += String.fromCharCode(buffer[i]);
}

console.log(str);