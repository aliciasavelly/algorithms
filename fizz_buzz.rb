def fizz_buzz(n)
  1.upto(n).each do |num|
    if num % 15 == 0
      p "fizzbuzz"
    elsif num % 3 == 0
      p "fizz"
    elsif num % 5 == 0
      p "buzz"
    else
      p num
    end
  end
end

fizz_buzz(22)
