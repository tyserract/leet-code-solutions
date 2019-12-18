var numJewelsInStones = function(J, S) {
    let counter = 0;
    S.split('').forEach(element => {
        J.indexOf(element) >= 0 ? counter ++ : counter 
});
return counter;
};
