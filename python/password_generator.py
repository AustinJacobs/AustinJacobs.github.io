import random

def main():
    uppercaseLetter1 = str(chr(random.randint(65,90)))
    uppercaseLetter2 = str(chr(random.randint(65,90)))

    lowercaseLetter1 = str(chr(random.randint(97,122)))
    lowercaseLetter2 = str(chr(random.randint(97,122)))

    randomDigit1 = str(random.randint(0,9))
    randomDigit2 = str(random.randint(0,9))

    randomSymbol1 = str(chr(random.randint(35,38)))
    randomSymbol2 = str(chr(random.randint(35,38)))

    finalPassword = createPassword(uppercaseLetter1, uppercaseLetter2, lowercaseLetter1, lowercaseLetter2, randomDigit1, randomDigit2, randomSymbol1, randomSymbol2)

    print(finalPassword)
    
def createPassword(a, b, c, d, e, f, g, h):
    password = a + b + c + d + e + f + g + h
    tempList = list(password)
    random.shuffle(tempList)
    return ''.join(tempList)

main()