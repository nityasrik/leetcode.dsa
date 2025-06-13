/**242. Valid Anagram
Given two strings s and t, return true if t is an anagram of s, and false otherwise.**/

var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    const map = {};
    for (let i = 0; i < s.length; i++) {
        map[s[i]] = (map[s[i]] || 0) + 1;
        map[t[i]] = (map[t[i]] || 0) - 1;
    }
    for (let key in map) {
        if (map[key] !== 0) return false;
    }

    return true;
};