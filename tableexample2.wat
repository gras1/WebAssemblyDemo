(module
  (import "js" "table" (table 2 anyfunc))
  (elem (i32.const 0) $f1 $f2)
  (func $f1 (result i32) i32.const 42)
  (func $f2 (result i32) i32.const 13)
)