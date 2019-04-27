(module
  (type $t0 (func (param i32) (result i32)))
  (func $fib (export "fib") (type $t0) (param $n i32) (result i32)
    (if $I0 (result i32)
      (i32.lt_s
        (local.get $n)
        (i32.const 2))
      (then
        (i32.const 1))
      (else
        (i32.add
          (call $fib
            (i32.sub
              (local.get $n)
              (i32.const 2)))
          (call $fib
            (i32.sub
              (local.get $n)
              (i32.const 1)))))))
)
