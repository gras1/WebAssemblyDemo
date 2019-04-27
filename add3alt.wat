(module
    (func $add2 (param $first i32) (param $second i32) (result i32)
        get_local $first
        get_local $second
        i32.add)
    (func $add (param $x i32) (param $y i32) (param $z i32) (result i32)
        get_local $x
        get_local $y
        call $add2
        get_local $z
        i32.add)
    (export "add" (func $add))
)