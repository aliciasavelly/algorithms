# require 'byebug'

def mergeSort(arr, &callback)
  return arr if arr.length < 2
  callback ||= Proc.new { |x, y| x <=> y }

  mid = arr.length / 2
  left = arr.slice(0, mid)
  right = arr.slice(mid, arr.length)
  leftSorted = mergeSort(left, &callback)
  rightSorted = mergeSort(right, &callback)

  merge(leftSorted, rightSorted, &callback)
end

def merge(arr1, arr2, &callback)
  result = []

  while arr1.length > 0 && arr2.length > 0
    if callback.call(arr1[0], arr2[0]) < 0
      result << arr1.shift
    else
      result << arr2.shift
    end
  end

  result + arr1 + arr2
end

p mergeSort([7, 2, 1, 4, 5, 6, 2, 7, 19, 9, 3])

class Array
  def merge_sort(&prc)
    return self if length < 2
    prc ||= Proc.new { |x, y| x <=> y }

    mid = length / 2
    left = take(mid).merge_sort(&prc)
    right = drop(mid).merge_sort(&prc)

    Array.merge(left, right, &prc)
  end

  def self.merge(arr1, arr2, &prc)
    result = []

    while arr1.length > 0 && arr2.length > 0
      result << (prc.call(arr1[0], arr2[0]) < 0 ? arr1.shift : arr2.shift)
    end

    result + arr1 + arr2
  end
end

p [7, 2, 1, 4, 5, 6, 2, 7, 19, 9, 3].merge_sort()
