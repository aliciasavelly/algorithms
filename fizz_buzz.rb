def fizz_buzz(n)
  1.upto(n).each do |num|
    if num % 3 == 0
      if num % 5 == 0
        p "fizzbuzz"
      else
        p "fizz"
      end
    elsif num % 5 == 0
      p "buzz"
    else
      p num
    end
  end
end

fizz_buzz(22)
