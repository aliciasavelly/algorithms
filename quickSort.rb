def quickSort(arr, &comparator)
  return arr if arr.length < 2
  comparator ||= Proc.new { |x, y| x <=> y }

  pivot = arr.first
  left = arr[1..-1].select { |el| comparator.call(el, pivot) == -1 }
  right = arr[1..-1].select { |el| comparator.call(el, pivot) != -1 }

  quickSort(left, &comparator) + [pivot] + quickSort(right, &comparator)
end

p quickSort([3, 2, 1, 2, 3, 6, 9, 1, 2, 3])
