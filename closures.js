/**
 * Lexical Scoping: is the mechanism that determines which variables a function can access based on where that function is defined in the source code, not where it is executed.
 * Closures: is the combination of a function bundled together with references to its sorrounding state (lexical env)
 *           This allows the function to retain access to variables from its outer scope even after the outer function has finished executing.
 */


// counter factory (private state via closure)
function makeCounter(){
    let count = 0;
    return {
        increment () { count += 1; return count;},
        decrement() { count -= 1; return count;},
        value() {return count;}
    };
}

const counter = makeCounter();
console.log('increment ->', counter.increment());
console.log('increment ->', counter.increment());
console.log('decrement ->', counter.decrement());
console.log('value (internal count not global):', counter.value())