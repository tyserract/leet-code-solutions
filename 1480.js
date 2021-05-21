function runningSum(nums) {
    let array = [];
    for (let index = 0; index < nums.length; index++) {
        let element = nums.slice(0, index);
        array.push(element.reduce((a, b) => a + b, 0));
    }
    array.shift()
    array.push(nums.reduce((a,b)=> a + b))
    return array;
}
