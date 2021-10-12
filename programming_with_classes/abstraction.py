import random

class Vehicle:
    def number_of_wheels(self):
        pass

    def name_of_vehicle(self):
        return "Vehicle Unknown"

    @staticmethod
    def random_vehicle():
        number = random.randint(0, 1000)
        if (number % 2 == 0):
            return Motorcycle()
        elif (number % 3 == 0):
            return Car()
        else:
            return Semi()


class Motorcycle:
    def number_of_wheels(Vehicle):
        return 2

    def name_of_vehicle(Vehicle):
        return "Motorcycle"

class Car:
    def number_of_wheels(Vehicle):
        return 4

    def name_of_vehicle(Vehicle):
        return "Car"

class Semi:
    def number_of_wheels(Vehicle):
        return 18

    def name_of_vehicle(Vehicle):
        return "Semi"

for x in range(100):
    vehicle = Vehicle.random_vehicle()
    print(vehicle.name_of_vehicle(), vehicle.number_of_wheels())