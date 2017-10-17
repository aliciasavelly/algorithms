def average_string(s)
  return "n/a" unless s.length > 0

  total = 0
  s_split = s.split(" ")
  numbers = {
    "zero" => 0,
    "one" => 1,
    "two" => 2,
    "three" => 3,
    "four" => 4,
    "five" => 5,
    "six" => 6,
    "seven" => 7,
    "eight" => 8,
    "nine" => 9
  }

  s_split.each do |num|
    return "n/a" unless numbers[num]

    total += numbers[num]
  end

  numbers.key(total / s_split.length)
end

p average_string("one two three three three three nine nine") == "four"
