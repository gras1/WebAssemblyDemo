const fs = require("fs");
const buf = fs.readFileSync("./outputconstant.wasm");
const wasmModule = new WebAssembly.Module(new Uint8Array(buf));

var importObject = {
    output: {
        constant: function(arg) {
            console.log(arg);
        }
    }
};

const wasmInstance = new WebAssembly.Instance(wasmModule, importObject);

wasmInstance.exports.constantout();