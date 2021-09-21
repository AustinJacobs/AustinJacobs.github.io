# Assignment Tic, Tac, Toe Game. Completed by Austin Jacobs

board = ['1', '2', '3', '4', '5', '6', '7', '8', '9']



# def createBoard():
#     a = (' |' *  2 )
#     c = ''.join('-+-+-')
#     print('\n'.join((a, c, a, c, a)))

# createBoard()


def displayBoard(board):
    row_length = 3
    for i in range(0, len(board), row_length):
        print('|'.join(board[i:i+row_length]))
    
displayBoard(board)