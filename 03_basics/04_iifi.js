// immediately invoked function expression (IIFI)


(function chai(){
    // named IIFI
    console.log(`DB CONNECTED`);
})();

((name) => {
    // unnamed IIFI
    console.log(`DB CONNECTED TWO ${name}`);
} )('himanshi')