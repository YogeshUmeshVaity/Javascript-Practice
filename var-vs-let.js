// Scoping rules
function run() {
    var foo = 'Foo'
    let bar = 'Bar'
    console.log(foo, bar)
    {
        let baz = 'Bazz'
        console.log(baz)
        console.log(bar)
    }

    // console.log(baz) // ReferenceError
}

// run()

// Hoisting
function run2() {
    console.log(foo)
    var foo = "Foo"
    console.log(foo)
}

run2()