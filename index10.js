const fs = require("fs");
const buf = fs.readFileSync("./tableexample2.wasm");
const wasmModule = new WebAssembly.Module(new Uint8Array(buf));

let tbl = new WebAssembly.Table({initial:2, element:"anyfunc"});
var importObject = {
    js: {
        table: tbl
    }
};

const wasmInstance = new WebAssembly.Instance(wasmModule, importObject);

console.log(tbl.get(0)());
console.log(tbl.get(1)());
