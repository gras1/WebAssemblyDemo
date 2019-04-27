const fs = require("fs");
const buf = fs.readFileSync("./usingglobal.wasm");
const wasmModule = new WebAssembly.Module(new Uint8Array(buf));

let myGlobal = new WebAssembly.Global({value:'i32', mutable:true}, 0);
var importObject = {
    js: {
        global: myGlobal
    }
};

const wasmInstance = new WebAssembly.Instance(wasmModule, importObject);

wasmInstance.exports.incGlobal();
wasmInstance.exports.incGlobal();
wasmInstance.exports.incGlobal();
wasmInstance.exports.incGlobal();
console.log(wasmInstance.exports.getGlobal());
