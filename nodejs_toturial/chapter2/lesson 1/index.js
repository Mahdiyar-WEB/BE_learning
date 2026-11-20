console.log("hello nodejs");

//instead of window in client we have global or globalThis which have some of the window methods like intervals
// console.log(global);
setTimeout(() => {
    console.log('setTimeout sample');
    
}, 1000);
