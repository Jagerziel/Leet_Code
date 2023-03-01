# 2085. Count Common Words With One Occurrence
# Easy

# Given two string arrays words1 and words2, return the number of strings that appear exactly once in each of the two arrays.

# Example 1:

# Input: words1 = ["leetcode","is","amazing","as","is"], words2 = ["amazing","leetcode","is"]
# Output: 2
# Explanation:
# - "leetcode" appears exactly once in each of the two arrays. We count this string.
# - "amazing" appears exactly once in each of the two arrays. We count this string.
# - "is" appears in each of the two arrays, but there are 2 occurrences of it in words1. We do not count this string.
# - "as" appears once in words1, but does not appear in words2. We do not count this string.
# Thus, there are 2 strings that appear exactly once in each of the two arrays.

# Example 2:

# Input: words1 = ["b","bb","bbb"], words2 = ["a","aa","aaa"]
# Output: 0
# Explanation: There are no strings that appear in each of the two arrays.

# Example 3:

# Input: words1 = ["a","ab"], words2 = ["a","a","a","ab"]
# Output: 1
# Explanation: The only string that appears exactly once in each of the two arrays is "ab".

 

# Constraints:

#     1 <= words1.length, words2.length <= 1000
#     1 <= words1[i].length, words2[j].length <= 30
#     words1[i] and words2[j] consists only of lowercase English letters.



words1 = ["leetcode","is","amazing","as","is"]
words2 = ["amazing","leetcode","is"]
words3 = ["a","ab"]
words4 = ["a","a","a","ab"]
words5 = ["a", "a", "ab"]
words6 = ["a", "ab", "c", "d", "e"]
words7 = []
words8 = []

# Solution 1 - Times out on LeetCode (58/60)

# class Solution(object):
#     def countWords(self, words1, words2):
#         """
#         :type words1: List[str]
#         :type words2: List[str]
#         :rtype: int
#         """

#         duplicated = []
#         # Iterate through each word and if they are equal to each other then push word to duplicated array
#         for i in words1:
#             for j in words2:
#                 if i == j:
#                     duplicated.append("{}-{}".format(i, j))

#         # Set counter for unique words
#         uniqueCount = 0
#         # Loop through  duplicated array and only count unique items
#         for i in duplicated:
#             if duplicated.count(i) == 1:
#                 uniqueCount += 1
#         # Return result
#         return uniqueCount

# SolutionToProblem = Solution()

# print(SolutionToProblem.countWords(words4, words5))

# Solution 2 - Times out on LeetCode (58/60)

# class Solution(object):
#     def countWords(self, words1, words2):
#         """
#         :type words1: List[str]
#         :type words2: List[str]
#         :rtype: int
#         """
#         duplicate = []
#         count = 0
#         result = 0

#         for i in words1:
#             if words1.count(i) == 1:
#                 duplicate.append(i)
#         print(duplicate)
#         for j in words2:
#             if words2.count(j) == 1:
#                 duplicate.append(j)
#         print(duplicate)
#         for k in duplicate:
#             if duplicate.count(k) == 2:
#                 count += 1
        
#         for i in range(count):
#             if i % 2 == 0:
#                 result +=1

#         return result

# SolutionToProblem = Solution()

# print(SolutionToProblem.countWords(words3, words6))

# Solution 3 - Passed - Not Optimized

# class Solution(object):
#     def countWords(self, words1, words2):
#         """
#         :type words1: List[str]
#         :type words2: List[str]
#         :rtype: int
#         """
#         # Create Dictionary to hold unique keys
#         duplicated = {}
#         # Identify Unique Keys
#         for i in words1:
#             try: 
#                 if duplicated[i] == "Keep":
#                     duplicated[i] = "Ignore"
#             except:
#                 duplicated[i] = "Keep"
#         # Match words2 items to Keys in duplicated dictionary
#         for j in words2:
#             try:
#                 if duplicated[j] == "Keep":
#                     duplicated[j] = "Keep Two"
#                 elif duplicated[j] == "Keep Two":
#                     duplicated[j] = "Ignore"     
#             except:
#                 pass
#         # Count results with "Keep Two"
#         result = 0
#         for k in duplicated:
#             if duplicated[k] == "Keep Two":
#                 result += 1
#         # Return Result
#         return result


# SolutionToProblem = Solution()

# print(SolutionToProblem.countWords(words3, words4))

# Runtime 61 ms
# Beats 68.67%
# Memory 13.8 MB
# Beats 82.67%

# Solution 4 - Passed - Optimized

class Solution(object):
    def countWords(self, words1, words2):
        """
        :type words1: List[str]
        :type words2: List[str]
        :rtype: int
        """
        # Create Dictionary to hold unique keys
        duplicated = {}
        # Identify Unique Keys
        for i in words1:
            try: 
                if duplicated[i] == "Keep":
                    duplicated[i] = "Ignore"
            except:
                duplicated[i] = "Keep"
        # Match words2 items to Keys in duplicated dictionary
        result = 0
        for j in words2:
            try:
                if duplicated[j] == "Keep":
                    duplicated[j] = "Keep Two"
                    result += 1
                elif duplicated[j] == "Keep Two":
                    duplicated[j] = "Ignore"   
                    result -= 1  
            except:
                pass
        # Return Result
        return result


SolutionToProblem = Solution()

print(SolutionToProblem.countWords(words3, words4))

# Runtime 52 ms
# Beats 84.67%
# Memory 14.1 MB
# Beats 10%