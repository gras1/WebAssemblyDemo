(module
  (func $fib (export "fib") (param $n i32) (result i32)
    (if (result i32)
      (i32.lt_s
        (get_local $n)
        (i32.const 2))
      (then
        (i32.const 1))
      (else
        (i32.add
          (call $fib
            (i32.sub
              (get_local $n)
              (i32.const 2)))
          (call $fib
            (i32.sub
              (get_local $n)
              (i32.const 1)))))))
)
