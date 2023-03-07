# 806. Number of Lines To Write String

# You are given a string s of lowercase English letters and an array widths denoting how many pixels wide each lowercase English letter is. Specifically, widths[0] is the width of 'a', widths[1] is the width of 'b', and so on.

# You are trying to write s across several lines, where each line is no longer than 100 pixels. Starting at the beginning of s, write as many letters on the first line such that the total width does not exceed 100 pixels. Then, from where you stopped in s, continue writing as many letters as you can on the second line. Continue this process until you have written all of s.

# Return an array result of length 2 where:
#     result[0] is the total number of lines.
#     result[1] is the width of the last line in pixels.

# Example 1:
# Input: widths = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], s = "abcdefghijklmnopqrstuvwxyz"
# Output: [3,60]
# Explanation: You can write s as follows:
# abcdefghij  // 100 pixels wide
# klmnopqrst  // 100 pixels wide
# uvwxyz      // 60 pixels wide
# There are a total of 3 lines, and the last line is 60 pixels wide.

# Example 2:
# Input: widths = [4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], s = "bbbcccdddaaa"
# Output: [2,4]
# Explanation: You can write s as follows:
# bbbcccdddaa  // 98 pixels wide
# a            // 4 pixels wide
# There are a total of 2 lines, and the last line is 4 pixels wide.

# Constraints:

#     widths.length == 26
#     2 <= widths[i] <= 10
#     1 <= s.length <= 1000
#     s contains only lowercase English letters.

widths1 = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]
s1 = "abcdefghijklmnopqrstuvwxyz"
widths2 = [4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]
s2 = "bbbcccdddaaa"

# Solution 1 Attempt: Not Optimal

# class Solution(object):
#     def numberOfLines(self, widths, s):
#         """
#         :type widths: List[int]
#         :type s: str
#         :rtype: List[int]
#         """
#         # Check for s length of 0
#         if len(s) == 0:
#             return [0,0]
#         # Define object to direct where to pull value from in widths array
#         pixels = {
#             "a": 0, "b": 1, "c": 2, "d": 3, "e": 4, "f": 5, "g": 6, "h": 7, "i": 8, "j": 9, "k": 10, "l": 11, "m": 12, "n": 13, "o": 14, "p": 15, "q": 16, "r": 17, "s": 18, "t": 19, "u": 20, "v": 21, "w": 22, "x": 23, "y": 24, "z": 25
#             }
#         #Count rows and remainder
#         rows = 1
#         remainder = 0
#         for i in s:
#             if widths[pixels[i]] + remainder <= 100:
#                 remainder += widths[pixels[i]]
#             else:
#                 rows += 1
#                 remainder = widths[pixels[i]]
#         #Return Result        
#         return [rows,remainder]
    

# SolutionToProblem = Solution()


# print(SolutionToProblem.numberOfLines(widths1,s1))

# Runtime 24 ms
# Beats 29.76%
# Memory 13.6 MB
# Beats 36.90%

class Solution(object):
    def numberOfLines(self, widths, s):
        """
        :type widths: List[int]
        :type s: str
        :rtype: List[int]
        """
        # Check for s length of 0
        if len(s) == 0:
            return [0,0]
        # Define object to direct where to pull value from in widths array
        pixels = {
            "a": 0, "b": 1, "c": 2, "d": 3, "e": 4, "f": 5, "g": 6, "h": 7, "i": 8, "j": 9, "k": 10, "l": 11, "m": 12, "n": 13, "o": 14, "p": 15, "q": 16, "r": 17, "s": 18, "t": 19, "u": 20, "v": 21, "w": 22, "x": 23, "y": 24, "z": 25
            }
        #Count rows and remainder
        rows = 1
        remainder = 0
        #Iterate through letters in s resetting the remainder and adding a row 
        for i in s:
            remainder += widths[pixels[i]]
            if remainder > 100:
                rows += 1
                remainder = widths[pixels[i]]
        #Return Result        
        return [rows,remainder] 

SolutionToProblem = Solution()

print(SolutionToProblem.numberOfLines(widths1,s1))

# Runtime 15 ms
# Beats 90.48%
# Memory 13.4 MB
# Beats 61.90%