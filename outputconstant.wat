(module
  (import "output" "constant" (func $constant (param i32)))
  (func (export "constantout")
    i32.const 11
    call $constant))