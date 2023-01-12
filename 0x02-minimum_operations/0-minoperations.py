#!/usr/bin/python3
""" method that calculates the fewest operaetions
needed to result in exaxtly n and h characters"""


def minOperations(n):
    """
    Args: number of operations
    returns an integer
    """
    if n <= 1:
        return 0
    for i in range(2, n + 1):
        if n % i == 0:
            return minOperations(int(n / i)) + i
