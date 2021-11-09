from random import randint
from time import sleep

class Creature:
    def speak(self):
        pass

class Dog(Creature):
    def speak(self):
        if randint(0, 26) % 13 == 0:
            print("BARKKKKKK")
    
class Cat(Creature):
    def speak(self):
        if randint(0, 21) % 7 == 0:
            print("meeeeeeeeeeeeeeeeowwwwww")

class Pig(Creature):
    def speak(self):
        if randint(0, 10) % 3 == 0:
            print('oink oink')

class Anakin(Creature):
    def speak(self):
        if randint(0, 10) % 2 == 0:
            print("i don't like sand")

class CollectionOfEntities:
    def __init__(self, creatures_list):
        self.creatures = creatures_list
        self.call()

    def call(self):
        while True:
            for x in self.creatures:
                x.speak()
            sleep(.5)


flock = CollectionOfEntities( [Dog(), Dog(), Cat(), Cat(), Anakin(), Pig(), Pig()])
