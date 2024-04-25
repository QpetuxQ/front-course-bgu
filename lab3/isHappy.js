function isHappy(n) {
    var getNext = function (num) {
        var totalSum = 0;
        while (num > 0) {
            var digit = num % 10;
            totalSum += digit * digit;
            num = Math.floor(num / 10);
        }
        return totalSum;
    };
    var slow = n, fast = getNext(n);
    while (fast !== 1 && slow !== fast) {
        slow = getNext(slow);
        fast = getNext(getNext(fast));
    }
    return fast === 1;
}
