def validSolution(board)
  return false unless check_rows(board)
  return false unless check_cols(board)
  return false unless check_squares(board)

  true
end

def check_rows(board)
  board.each do |row|
    total = 0
    row.each do |col|
      return false if col == 0
      return false if col > 9 || col < 1
      total += col
    end

    return false if total != 45
  end

  true
end

def check_cols(board)
  (0..8).each do |col|
    total = 0
    (0..8).each do |row|
      val = board[row][col]
      return false if val == 0
      return false if val > 9 || val < 0
      total += val
    end

    return false if total != 45
  end

  true
end

def check_squares(board)

end
