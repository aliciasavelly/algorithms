def longestValidParentheses(string)
	longest = 0
	stack = []

	string.each_char.with_index do |char, index|
    if char == '('
			stack << index
      # p stack`
      p 8
		else
			if !stack.empty?
        p string[stack.length - 1]
        p stack.length - 1
				string[stack.length - 1] == '(' ? stack.pop : stack.push(index)
        # p stack
        p 14
      end
		end
    p stack
	end

	if stack.empty?
		longest = string.length
	else
		a = string.length
		b = 0
		while !stack.empty?
			b = stack[stack.length - 1]
			stack.pop
			longest = [longest, a-b-1].max
			a = b
		end
		longest = [longest, a].max
	end

	longest
end

# p longestValidParentheses("(()")
p longestValidParentheses(")()())")
# p longestValidParentheses(")())()()((")
