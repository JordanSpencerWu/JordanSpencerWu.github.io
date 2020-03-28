---
author:
  [
    Thomas H. Cornmen,
    And,
    Charles E Leiserson,
    And,
    Ronald L. Riverest,
    And,
    Clifford Stein,
  ]
date: 2016-09-17
description: This book does a great job at explaining sorting algorithms and data structures with the help of visual figures. It's very math intensive, going over proofs and concepts of the materials. The main reason I bought the book was to understand the basic sorting algorithms and data structures. It give me a better understanding of the time and space complexity in terms of Big O Notation.
seo-description: Introduction to Algorithms by Thomas H. Cornmen and Charles E Leiserson and Ronald L. Riverest and Clifford Stein notes.
title: Heap Sort
---

This algorithm starts by using **MAX-HEAPIFY** to build a max-heap on the input array $A[1..n]$, where $n = A.length$. Since the maximum element of the array is stored at the root $A[1]$, we can put it into its correct final position by exchanging it with $A[n]$. If we now discard node $n$ from the heap and we can do so by simply decrementing $A.heap-size$, we observe that the children of the root remain max-heaps, but the new root element might violate the max-heap property. All we need to do to restore the max-heap property, however, is call **MAX-HEAPIFY A,1**, which leaves a max-heap in $A[1..n - 1]$. The heapsort algorithm then repeats this process for the max-heap of size $n-1$ down to a heap of size 2.

**Input**: A sequence of $n$ numbers $<a_1,a_2,\cdots,a_n>$

**Ouput**: A permutation reordering $<a'_1,a'_2,\cdots,a'n>$ of the input sequence such that $a'_1 \leq a'_2 \leq \cdots \leq a'_n$.

##### BUILD-MAX-HEAP A

```java
  for i = A.length downto 2
    exchange A[1] with A[i]
    A.heap-size = A.heap-size - 1
    MAX-HEAPIFY(A,1)
```

The **HEAPSORT** procedure takes time $\Theta(n \\ lg \\ n)$, since the call to **BUILD-MAX-HEAP** takes time $\Theta(n)$ and each of the $n - 1$ calls to **MAX-HEAPIFY** takes time $\Theta(lg \\ n)$.

##### Java Implementation Using Figure 6.4 In Book

```java
  public class Main {

      private static int heapSizeMaxIndex;

      public static void main(String[] args) {
          int[] unsortedArray = {4, 1, 3, 2, 16, 9, 10, 14, 8, 7};
          heapSort(unsortedArray);
          printArray(unsortedArray);
          // returns 1 2 3 4 7 8 9 10 14 16
      }

      public static void heapSort(int[] array) {
          int rootNodeIndex = 0;
          buildMaxHeap(array);
          for (int i = heapSizeMaxIndex; i >= 1; i--) {
              swap(array,rootNodeIndex,i);
              heapSizeMaxIndex = heapSizeMaxIndex - 1;
              maxHeapify(array,rootNodeIndex);
          }
      }

      public static void buildMaxHeap(int[] array) {
          heapSizeMaxIndex = array.length - 1;
          int midPoint = heapSizeMaxIndex/2;

          for (int indexsOfLeaves = midPoint; indexsOfLeaves >= 0; indexsOfLeaves--) {
              maxHeapify(array,indexsOfLeaves);
          }
      }

      public static void maxHeapify(int[] array, int parentIndex) {
          int leftChildIndex = (parentIndex * 2) + 1;
          int rightChildIndex = (parentIndex * 2) + 2;
          int indexOfLargestValue = parentIndex;

          if (leftChildIndex <= heapSizeMaxIndex && array[leftChildIndex] > array[indexOfLargestValue]) {
              indexOfLargestValue = leftChildIndex;
          }
          if (rightChildIndex <= heapSizeMaxIndex && array[rightChildIndex] > array[indexOfLargestValue]) {
              indexOfLargestValue = rightChildIndex;
          }
          if (indexOfLargestValue != parentIndex) {
              swap(array,parentIndex,indexOfLargestValue);
              maxHeapify(array, indexOfLargestValue);
          }
      }

      public static void swap(int[] array, int firstIndex, int secondIndex) {
          int temp = array[firstIndex];
          array[firstIndex] = array[secondIndex];
          array[secondIndex] = temp;
      }

      public static void printArray(int[] array) {
          for (int i = 0; i < array.length; i++) {
              System.out.print(array[i] + " ");
          }
      }
  }
```