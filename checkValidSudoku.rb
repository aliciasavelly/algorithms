def validSolution(board)
  return false unless check_rows(board)
  newBoard = transposeCols(board)
  return false unless check_rows(newBoard)
  return false unless check_squares(board)

  true
end

def transposeCols(board)
  result = []

  (0..8).each do |col|
    result << []
    (0..8).each do |row|
      result[col] << board[row][col]
    end
  end

  result
end

def check_rows(board)
  board.each do |row|
    total = 0
    rowArr = []
    row.each do |col|
      return false if col == 0
      return false if col > 9 || col < 1
      total += col
      rowArr << col
    end

    (1..9).each do |val|
      return false unless rowArr.include?(val)
    end
    return false if total != 45
  end

  true
end

def check_squares(board)
  pos = [0, 0]
  while pos[0] < 9 && pos[1] < 9
    total = 0
    squareArr = []
    (0..2).each do |row|
      (0..2).each do |col|
        val = board[row + pos[0]][col + pos[1]]
        return false if val == 0
        return false if val > 9 || val < 0
        total += val
        squareArr << val
      end
    end

    return false if total != 45
    (1..9).each do |val|
      return false unless squareArr.include?(val)
    end

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
