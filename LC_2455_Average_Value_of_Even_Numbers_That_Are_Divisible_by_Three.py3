# NOTE I ACCIDENTALLY DID THIS PROBLEM IN PYTHON3 SO IT WILL NOT RUN PROPERLY IN THIS FILE!

# 2455. Average Value of Even Numbers That Are Divisible by Three
# Easy

# Given an integer array nums of positive integers, return the average value of all even integers that are divisible by 3.

# Note that the average of n elements is the sum of the n elements divided by n and rounded down to the nearest integer.

# Example 1:
# Input: nums = [1,3,6,10,12,15]
# Output: 9
# Explanation: 6 and 12 are even numbers that are divisible by 3. (6 + 12) / 2 = 9.

# Example 2:
# Input: nums = [1,2,4,7,10]
# Output: 0
# Explanation: There is no single number that satisfies the requirement, so return 0.

 

# Constraints:
#     1 <= nums.length <= 1000
#     1 <= nums[i] <= 1000

test1 = [1,3,6,10,12,15]
test2 = [1,2,4,7,10]

# class Solution:
#     def averageValue(self, nums: List[int]) -> int:
#         # Set Variables
#         count = 0
#         sum = 0
#         # Loop Through List
#         for i in nums:
#             if i % 3 == 0:
#                 if i % 2 == 0:
#                     count += 1
#                     sum += i
#         # Check for Null List Length
#         if count == 0:
#             return 0
#         # Return Result
#         return sum // count

# print(Solution.averageValue(test1))

# Runtime73 ms
# Beats 97.81%
# Memory 14 MB
# Beats 89.49%

