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
  pos = [0, 0]
  while pos[0] < 9 && pos[1] < 9
    total = 0
    (0..2).each do |row|
      (0..2).each do |col|
        val = board[row + pos[0]][col + pos[1]]
        return false if val == 0
        return false if val > 9 || val < 0
        total += val
      end
    end

    return false if total != 45

    if pos[0] == 6 and pos[1] == 6
      pos = [9, 9]
    elsif pos[0] == 6
      pos[0] = 0
      pos[1] += 3
    else
      pos[0] += 3
    end
  end

  true
end