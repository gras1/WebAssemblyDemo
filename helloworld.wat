(module
  (memory $mem 1)
  (data (i32.const 0) "Hello World!")
  (export "memory" (memory $mem))
  (func $getMessage (result i32)
    (i32.load offset=12
      (i32.const 0)
    )
  )
  (export "getMessage" (func $getMessage))
)