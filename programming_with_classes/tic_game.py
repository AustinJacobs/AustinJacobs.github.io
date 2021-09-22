# Assignment Tic, Tac, Toe. Completed by Austin Jacobs

gameBoard = {'1': '1' , '2': '2' , '3': '3' ,
         '4': '4' , '5': '5' , '6': '6' ,
         '7': '7' , '8': '8' , '9': '9'}

board_keys = []

for key in gameBoard:
    board_keys.append(key)

def createBoard(board):
    print(board['1'] + '|' + board['2'] + '|' + board['3'])
    print('-+-+-')
    print(board['4'] + '|' + board['5'] + '|' + board['6'])
    print('-+-+-')
    print(board['7'] + '|' + board['8'] + '|' + board['9'])

def main():
    turn = 'X'
    count = 0

    while count < 10:
        createBoard(gameBoard)
        move = input(f"\n{turn}'s turn to choose a square (1-9):  ")
        print("")

        if gameBoard[move] == move:
            gameBoard[move] = turn
            count += 1
        else:
            print("Choose a spot that hasn't been taken.")
            continue

        if count >=5:
            if gameBoard['7'] == gameBoard['8'] == gameBoard['9'] != ' ': 
                createBoard(gameBoard)
                print(f"\nGood game. Thanks for playing!. {turn}'s won!")                            
                break
            elif gameBoard['4'] == gameBoard['5'] == gameBoard['6'] != ' ': 
                createBoard(gameBoard)
                print(f"\nGood game. Thanks for playing!. {turn}'s won!")                
                break
            elif gameBoard['1'] == gameBoard['2'] == gameBoard['3'] != ' ': 
                createBoard(gameBoard)
                print(f"\nGood game. Thanks for playing!. {turn}'s won!")                
                break
            elif gameBoard['1'] == gameBoard['4'] == gameBoard['7'] != ' ': 
                createBoard(gameBoard)
                print(f"\nGood game. Thanks for playing!. {turn}'s won!")                
                break
            elif gameBoard['2'] == gameBoard['5'] == gameBoard['8'] != ' ': 
                createBoard(gameBoard)
                print(f"\nGood game. Thanks for playing!. {turn}'s won!")                
                break
            elif gameBoard['3'] == gameBoard['6'] == gameBoard['9'] != ' ': 
                createBoard(gameBoard)
                print(f"\nGood game. Thanks for playing!. {turn}'s won!")                
                break 
            elif gameBoard['7'] == gameBoard['5'] == gameBoard['3'] != ' ': 
                createBoard(gameBoard)
                print(f"\nGood game. Thanks for playing!. {turn}'s won!")                
                break
            elif gameBoard['1'] == gameBoard['5'] == gameBoard['9'] != ' ': 
                createBoard(gameBoard)
                print(f"\nGood game. Thanks for playing!. {turn}'s won!")                
                break

        if count == 9:
            print(f"Game Over!")
            print("It's a draw!")

        if turn =='X':
            turn = 'O'
        else:
            turn = 'X'

if __name__ == "__main__":
    main()