require "set"

def validSolution(board)
  sudoku_sections = rows(board) + cols(board) + blocks(board)
  sudoku_sections.all? { |section| contains_all_nine?(section) }
end

def rows(board)
  board
end

def cols(board)
  board.transpose
end

def blocks(board)
  board.map { |row| row.each_slice(3).to_a }.transpose.flatten.each_slice(9).to_a
end

def contains_all_nine?(section)
  [1, 2, 3, 4, 5, 6, 7, 8, 9].to_set == section.to_set
end

grid = [[3,0,6,5,0,8,4,0,0],
        [5,2,0,0,0,0,0,0,0],
        [0,8,7,0,0,0,0,3,1],
        [0,0,3,0,1,0,0,8,0],
        [9,0,0,8,6,3,0,0,5],
        [0,5,0,0,9,0,6,0,0],
        [1,3,0,0,0,0,2,5,0],
        [0,0,0,0,0,0,0,7,4],
        [0,0,5,2,0,6,3,0,0]]

grid2 = [[5,3,4,6,7,8,9,1,2],
         [6,7,2,1,9,5,3,4,8],
         [1,9,8,3,4,2,5,6,7],
         [8,5,9,7,6,1,4,2,3],
         [4,2,6,8,5,3,7,9,1],
         [7,1,3,9,2,4,8,5,6],
         [9,6,1,5,3,7,2,8,4],
         [2,8,7,4,1,9,6,3,5],
         [3,4,5,2,8,6,1,7,9]]

p validSolution(grid)
p validSolution(grid2)
