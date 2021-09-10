import random
import string

number_of_letters = int(input('Enter the number of letters you want in the password: '))
number_of_digits = int(input('Enter the number of digits you want in the password: '))
number_of_symbols = int(input('Enter the number of symbols you want in the password: '))

def shuffle(string):
    tempList = list(string)
    random.shuffle(tempList)
    return ''.join(tempList)

def letters(number_of_letters):
    for letter in range(number_of_letters):
        string.ascii_letters
        random.choice(string.ascii_letters)
        print(random.choice(string.ascii_letters))
        return random.choice(string.ascii_letters)

def digits(number_of_digits):
    for digit in range(number_of_digits):
        random.randint(0, 9)
        print(random.randint(0, 9))
        return random.randint(0, 9)

def symbols(number_of_symbols):
    for symbol in range(number_of_symbols):
        chr(random.randint(35,38))
        print(chr(random.randint(35,38)))
        return chr(random.randint(35,38))

# def createPassword(letter, number, symbol):
#     password = str(letter) + str(number) + str(symbol)
#     password = shuffle(password)
#     print(password)


def main():
    letters(number_of_letters)
    digits(number_of_digits)
    symbols(number_of_symbols)
    # createPassword(letters(number_of_letters), digits(number_of_digits), symbols(number_of_symbols))

main()