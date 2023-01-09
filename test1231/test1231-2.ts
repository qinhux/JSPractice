Array(10000000).fill().map(() => new Array(12));
function* fun(x) {
    for(let i = 0; i < x; i++) {
        yield 0;
    }
}

//Array.from(fun(10000000), ()=> new Array(12));
