function isPalindrome(str) {
    const normalized = str.toLowerCase();
    return normalized === normalized.split('').reverse().join('');
}
