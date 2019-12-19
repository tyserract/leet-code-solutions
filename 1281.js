/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let nToArray  = n.toString().split("").map( x=> parseInt(x));
    let pod = nToArray.reduce((a,b)=>a+b);
    let sod = nToArray.reduce(((a,b)=> a*b));
    return sod  - pod;
};
