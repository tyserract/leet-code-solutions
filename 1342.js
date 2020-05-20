/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num) {
   let steps = 0;
   let number = num;
   while( number !== 0){
    if(number % 2 == 0){
        steps += 1;
        number = number / 2;
    } else{
        steps += 1;
        number = number -1;
    }
   }
   return steps;
};
