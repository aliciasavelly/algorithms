def print_grid(arr):
    for i in range(9):
        for j in range(9):
            print(str(arr[i][j]) + " "),
        print ('')

def find_empty_location(arr, l):
    for row in range(9):
        for col in range(9):
            if arr[row][col] == 0:
                l[0] = row
                l[1] = col
                return True

print print_grid([[3,0,6,5,0,8,4,0,0],
                  [5,2,0,0,0,0,0,0,0],
                  [0,8,7,0,0,0,0,3,1],
                  [0,0,3,0,1,0,0,8,0],
                  [9,0,0,8,6,3,0,0,5],
                  [0,5,0,0,9,0,6,0,0],
                  [1,3,0,0,0,0,2,5,0],
                  [0,0,0,0,0,0,0,7,4],
                  [0,0,5,2,0,6,3,0,0]])
