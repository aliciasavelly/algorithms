def twoToOne(arr1, arr2)
  result = []

  i, j = 0, 0
  while i < arr1.length && j < arr2.length
    if arr1[i] < arr2[j]
      result << arr1[i]
      i += 1
    else
      result << arr2[j]
      j += 1
    end
  end

  result + arr1[i..-1] + arr2[j..-1]
end

p twoToOne([1, 3, 4, 4, 5, 6, 7], [1, 2, 3, 5, 6, 9, 10, 11, 12, 13, 13])
