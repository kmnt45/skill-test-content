function sumDigits(number) {
    return number
        .toString()
        .split('')
        .map(Number)
        .reduce((acc, digit) => acc + digit, 0);
}