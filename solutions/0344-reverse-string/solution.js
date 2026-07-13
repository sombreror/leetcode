class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */

    //in this solution we dont need to return anything as the @return {void} says.

    //using the two pointers to change the characters form one place to another.
    //to not lose the characters in a positions and to reverse the string we need to store the value;
    //in this case i used the destructuring assignment to store the value without using the temp value to temporarly store the values.
    reverseString(s) {
        let left = 0,
            right = s.length - 1;

        while (left < right) {
            [s[left], s[right]] = [s[right], s[left]];
            left++;
            right--;
        }
    }
}
