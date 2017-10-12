def range_summary(array)
  ranges = []

  i = 0
  while i < array.length - 1
    if array[i] + 1 == array[i + 1]
      start_range = array[i]

      i += 1 until array[i] + 1 != array[i + 1]

      ranges << [start_range, array[i]]
    end

    i += 1
  end

  ranges
end

puts "-------Range Summary-------"
puts range_summary([0, 1]) == [[0, 1]]
puts range_summary([0, 1, 4, 5]) == [[0, 1], [4, 5]]
puts range_summary([0, 1, 3, 4, 6, 7]) == [[0, 1], [3, 4], [6, 7]]
puts range_summary([0, 1, 2, 3, 4, 5, 7, 8, 9, 15, 16]) == [[0, 5], [7, 9], [15, 16]]
