"""
abstract human class
men and women
men and women meet
women make new human

import time
time.sleep(1) # wait 1 second
"""

import time
import random

class Human:
    def __init__(self):
        self.sex = "unknown"
    
    def set_gender(self):
        gender = random.randint(0,1)
        if gender == 0:
            self.sex = "male"
        elif gender == 1:
            self.sex = "female"

man = Human()       #first man
man.sex = "male"

woman = Human()     # first woman
woman.sex = "female"

male_population = 1        
female_population = 1




while(1):
    if male_population <= female_population:
        for i in range(male_population):
            new_human = Human()
            new_human.set_gender()
            if new_human.sex == "male":
                male_population += 1
            elif new_human.sex == "female":
                female_population += 1
    elif female_population < male_population:
        for i in range(female_population):
            new_human = Human()
            new_human.set_gender()
            if new_human.sex == "male":
                male_population += 1
            elif new_human.sex == "female":
                female_population += 1


    print(f"Male population: {male_population}")
    print(f"Female population: {female_population}")
    print()
    
    time.sleep(1)
