(function () {
    const squareEveryDigit1 = (number) => +[].map.call(number.toString(), (item) => Math.pow(item, 2))
        .join('');

    console.log(squareEveryDigit1(9119));
    console.log(squareEveryDigit1(323));
    console.log(squareEveryDigit1(101));


    const squareEveryDigit2 = (number) => +[].reduce.call(number.toString(),
        (accumulator, currentValue) => accumulator + Math.pow(currentValue, 2), '');

    console.log(squareEveryDigit2(9119));
    console.log(squareEveryDigit2(323));
    console.log(squareEveryDigit2(101));

   const squareEveryDigit3 = function squareEveryDigit(number) {

        if (number < 10) {
            return Math.pow(number % 10, 2)
        }

        const digit = Math.pow(number % 10, 2);
        const countDigits = digit.toString().length;

        return squareEveryDigit(Math.floor(number / 10)) * (Math.pow(10, countDigits)) + digit;
        //Math.pow(10, countDigits) оценка количества разрядов занимаемых предыдущим числом
    }

    console.log(squareEveryDigit3(9119));
    console.log(squareEveryDigit3(323));
    console.log(squareEveryDigit3(101));
})();
