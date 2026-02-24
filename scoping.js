function varExample() {
    // var decleration is moved up, but assignment stays: var is hoisted
    console.log('x before assignment (var):', x);  // prints undefined
    var x = 1;
    if (true){
        var x = 2;  //overwrites the x above
        console.log('inside if (var) x =', x);
    }
    console.log('after if (var) x =', x);
}
varExample();

function letConstantExample(){
    // if let is declared at first then it will cause reference error
    let y = 1;
    if (true){
        let y = 2;
        console.log('inside block (let) y =', y);
    }
    console.log('after block (let) y=', y);

    const obj = {name: 'node'};
    console.log('const object after mutation:', obj);

    // reassignment of const is not allowed: obj = {} will cause error 
}
letConstantExample();