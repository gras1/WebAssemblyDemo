(module
    (func $add (param $first i32) (param $second i32) (param $third i32) (result i32)
        get_local $first
        get_local $second
        i32.add
        get_local $third
        i32.add)
    (export "add" (func $add))
)