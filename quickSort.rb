def quickSort(arr, &comparator)
  return arr if arr.length < 2
  comparator ||= Proc.new { |x, y| x <=> y }

  pivot = arr.first
  left = arr[1..-1].select { |el| comparator.call(el, pivot) == -1 }
  right = arr[1..-1].select { |el| comparator.call(el, pivot) != -1 }

  quickSort(left, &comparator) + [pivot] + quickSort(right, &comparator)
end

p quickSort([3, 2, 1, 2, 3, 6, 9, 1, 2, 3])

class Array
  def my_quick_sort(&prc)
    return self if self.length < 2
    prc ||= Proc.new { |x, y| x <=> y }

    pivot = self.first
    left = self[1..-1].select { |el| prc.call(el, pivot) == -1 }
    right = self[1..-1].select { |el| prc.call(el, pivot) != -1 }

    left.my_quick_sort(&prc) + [pivot] + right.my_quick_sort(&prc)
  end
end

a = [3, 2, 1, 2, 3, 6, 9, 1, 2, 3]
p a.my_quick_sort()
