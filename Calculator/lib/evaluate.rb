class Calculator
  def evaluate(string)
    to_do = string.split(" ")

    while to_do.length > 1
      priority = false
      to_do.each_with_index do |el, idx|
        if el == "*" || el == "/"
          if el == "*"
            to_do[idx] = multiply(to_do[idx - 1].to_i, to_do[idx + 1].to_i)
          else
            to_do[idx] = divide(to_do[idx - 1].to_i, to_do[idx + 1].to_i)
          end

          to_do.slice!(idx + 1)
          to_do.slice!(idx - 1)
          priority = true
          break
        end
      end

      unless priority
        to_do.each_with_index do |el, idx|
          if el == "+" || el == "-"
            if el == "+"
              to_do[idx] = add(to_do[idx - 1].to_i, to_do[idx + 1].to_i)
            else
              to_do[idx] = subtract(to_do[idx - 1].to_i, to_do[idx + 1].to_i)
            end

            to_do.slice!(idx + 1)
            to_do.slice!(idx - 1)
            priority = true
            break
        end
        end
      end
    end

    to_do[0].to_i
  end

  def multiply(n1, n2)
    n1 * n2
  end

  def divide(n1, n2)
    n1 / n2
  end

  def add(n1, n2)
    n1 + n2
  end

  def subtract(n1, n2)
    n1 - n2
  end
end
